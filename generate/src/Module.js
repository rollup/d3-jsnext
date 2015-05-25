import { dirname, relative, resolve } from 'path';
import { readFileSync } from 'sander';
import { parse } from 'acorn';
import MagicString from 'magic-string';
import attachScopes from './ast/attachScopes';
import walk from './ast/walk';
import createAlias from './utils/createAlias';
import dedupe from './utils/dedupe';
import isExport from './utils/isExport';

function isIdentifier ( node, parent ) {
	if ( node.type !== 'Identifier' ) return false;
	if ( parent.type === 'MemberExpression' && !parent.computed && node !== parent.object ) return false;
	if ( parent.type === 'Property' && node !== parent.value ) return false;

	return true;
}

function getKeypath ( node ) {
	if ( node.type !== 'MemberExpression' || node.computed ) return null;

	let keypath = node.property.name;

	node = node.object;
	while ( node.type === 'MemberExpression' ) {
		if ( node.computed ) return null;
		keypath = `${node.property.name}.${keypath}`;

		node = node.object;
	}

	if ( node.type !== 'Identifier' ) return null;
	return `${node.name}.${keypath}`;
}

function readSource ( file, included ) {
	const dir = dirname( file );

	let lastIndex = 0;

	return readFileSync( file ).toString()
		.replace( /^\/\/\s*import.+?\n/gm, '' ) // ...(including commented-out ones...)
		.replace( /^import \"(.+?)\";?\n/gm, ( match, relativePath, index ) => {
			// ...except some. In most cases, we want to strip out import statements
			// altogether and reconstruct them from the ASTs we're about to generate.
			// There are a couple of places, however, where that won't work, because
			// imports exist for their side-effects rather than their dependencies.
			// (This is an undesirable pattern with ES6 modules, but that's a subject
			// for another time.) As an easy way of including them, we identify
			// side-effecty imports (because they're not at the top of the module -
			// they come later on, after e.g. `d3_selection.prototype` has been
			// defined) and basically copy-and-paste them in. This is, it goes
			// without saying, a dreadful hack.

			if ( index > lastIndex ) {
				const path = resolve( dir, relativePath + '.js' );
				included[ path ] = true;
				const include = readSource( path, included );

				return include + '\n\n';
			}

			lastIndex = index + match.length;
			return '';
		})
		.trim();
}

export default class Module {
	constructor ( file ) {
		this.file = file;
		this.dir = dirname( file );

		let lastIndex = 0;

		this.src = readSource( file, this.included = {} );
		this.magicString = new MagicString( this.src );

		// Attempt to parse with acorn
		try {
			this.ast = parse( this.src );
		} catch ( err ) {
			console.log( this.src );
			console.log( `error parsing ${file}: ${err.message}` );
			throw err;
		}

		this.internalDependencies = {};
		this.exportDependencies = {};

		this.internalNameByExportName = {};
		this.exports = {};

		this.analyse();

		this.definitions = this.ast._scope.names.slice();
	}

	analyse () {
		let scope = attachScopes( this.ast );

		walk( this.ast, {
			enter: ( node, parent ) => {
				if ( node._scope ) {
					scope = node._scope;
				}

				if ( isIdentifier( node, parent ) && !scope.contains( node.name ) ) {
					this.internalDependencies[ node.name ] = true;
				}

				const keypath = getKeypath( node );
				if ( isExport( keypath ) ) {
					this.exportDependencies[ keypath ] = true;
				}

				// check for assignments to d3.whatever
				if ( node.type === 'AssignmentExpression' && node.left.type === 'MemberExpression' ) {
					const keypath = getKeypath( node.left );

					if ( isExport( keypath ) ) {
						this.exports[ keypath ] = true;

						if ( node.right.type === 'Identifier' ) {
							this.internalNameByExportName[ keypath ] = node.right.name;
							node._shouldRemove = true;

							return;
						}
					}
				}
			},

			leave: ( node, parent ) => {
				if ( node._scope ) {
					scope = scope.parent;
				}
			}
		});
	}

	render ({
		pathByExportName,
		exportNamesByPath,
		pathByInternalName,
		internalNamesByPath,
		internalNameByExportName,
		exportNameByInternalName
	}) {
		const self = this;
		const magicString = this.magicString;

		let scope = this.ast._scope;
		let varsToDeclare = {};

		walk( this.ast, {
			enter ( node, parent ) {
				if ( node._scope ) {
					scope = node._scope;
				}

				// rewrite top-level `this` as `window`
				if ( node.type === 'ThisExpression' && !scope.parent ) {
					magicString.overwrite( node.start, node.end, 'window' );
				}

				// remove e.g. `d3.ascending = d3_ascending`
				// TODO we don't always want this...
				if ( node._shouldRemove ) {
					//console.log( 'should remove', node );
					// let end = node.end;
					// const remaining = magicString.slice( end );
					// const match = /^;\n*/.exec( remaining );
					//
					// if ( match ) end += match[0].length;
					//
					// magicString.remove( node.start, end );
					// return this.skip();
				}

				// if we encounter `d3.whatever = ...` it gets turned into
				// `d3$whatever = ...`, so we need to declare `var d3$whatever`
				if ( node.type === 'AssignmentExpression' && node.left.type === 'MemberExpression' ) {
					const keypath = getKeypath( node.left );

					if ( isExport( keypath ) ) {
						const alias = internalNameByExportName[ keypath ] || createAlias( keypath );

						if ( alias ) {
							varsToDeclare[ alias ] = true;
						}
					}
				}

				// rewrite all other instances of `d3.whatever` to `d3_whatever`, but be
				// careful with e.g. `d3.ns.qualify` -> `d3$ns.qualify`
				if ( node.type === 'MemberExpression' ) {
					const keypath = getKeypath( node );

					if ( keypath === 'd3.event' ) {
						// TODO fix this, once things actually work
						magicString.overwrite( node.start, node.end, 'window.d3_event' );
					}

					if ( !!pathByExportName[ keypath ] ) {
						const alias = keypath.replace( /\./g, '$' );
						magicString.overwrite( node.start, node.end, alias );
						return this.skip();
					}
				}
			},

			leave ( node ) {
				if ( node._scope ) {
					scope = scope.parent;
				}
			}
		});

		let dependencies = {};
		let imported = {};

		const addDependency = ( owner, name ) => {
			if ( !owner || owner === this.file ) return;

			if ( imported[ name ] ) {
				if ( owner !== imported[ name ] ) {
					throw new Error( `Importing ${name} from separate locations: ${imported[ name ]}, ${owner}` );
				}

				return;
			}

			imported[ name ] = owner;

			let relativePath = relative( this.dir, owner ).replace( /\.js$/, '' );
			if ( relativePath[0] !== '.' ) relativePath = `./${relativePath}`;

			if ( !dependencies[ relativePath ] ) {
				dependencies[ relativePath ] = [];
			}

			dependencies[ relativePath ].push( name );
		};

		Object.keys( this.internalDependencies ).forEach( name => {
			addDependency( pathByInternalName[ name ], name );
		});

		Object.keys( this.exportDependencies ).forEach( keypath => {
			const keys = keypath.split( '.' );
			let owner;

			while ( keys.length ) {
				keypath = keys.join( '.' );
				owner = pathByExportName[ keypath ];
				if ( owner ) break;

				keys.pop();
			}

			if ( !owner ) return;

			const alias = keypath.replace( /\./g, '$' );
			addDependency( owner, alias );
		});

		const varDeclarationBlock = Object.keys( varsToDeclare )
			.map( name => `var ${name};` )
			.join( '\n' );

		if ( varDeclarationBlock ) {
			magicString.prepend( varDeclarationBlock + '\n\n' );
		}

		const importBlock = Object.keys( dependencies ).map( relativePath => {
			const names = dependencies[ relativePath ];
			return `import { ${names.join( ', ' )} } from '${relativePath}';`
		}).join( '\n' );

		if ( importBlock ) {
			magicString.prepend( importBlock + '\n\n' );
		}

		let shouldExport = dedupe(
			exportNamesByPath[ this.file ]
				.map( name => {
					const alias = internalNameByExportName[ name ] || createAlias( name );
					return alias;
				})
				.concat( internalNamesByPath[ this.file ])
		);

		const exportBlock = shouldExport.length > 4 ?
			`\n\nexport {\n  ${shouldExport.join(',\n  ')}\n};` :
			shouldExport.length > 0 ?
			`\n\nexport { ${shouldExport.join(', ')} };` :
			'';

		return magicString.append( exportBlock ).toString();
	}
}
