import { dirname, relative } from 'path';
import { parse } from 'acorn';
import MagicString from 'magic-string';
import attachScopes from '../ast/attachScopes';
import walk from '../ast/walk';
import createAlias from '../utils/createAlias';

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

function findNextNode ( nodes, node ) {
	const len = nodes.length;
	let i;

	for ( i = 0; i < len; i += 1 ) {
		if ( nodes[i].start >= node.end ) {
			return nodes[i];
		}
	}

	return null;
}

export default class Module {
	constructor ( src, file ) {
		this.file = file;
		this.dir = dirname( file );

		// Remove smash import declarations, and remove whitespace
		this.src = src.replace( /^import .+/gm, '' ).trim();
		this.magicString = new MagicString( this.src );

		// Attempt to parse with acorn
		try {
			this.ast = parse( this.src );
		} catch ( err ) {
			console.log( `error parsing ${file}: ${err.message}` );
			throw err;
		}

		this.dependencies = {};
		this.internalNameByExportName = {};
		this.exports = [];
		this.helpers = [];

		this.allNodes = [];
		this.analyse();

		this.definitions = this.ast._scope.names.slice();
	}

	analyse () {
		let scope = attachScopes( this.ast );

		walk( this.ast, {
			enter: ( node, parent ) => {
				this.allNodes.push( node );

				if ( node._scope ) {
					scope = node._scope;
				}

				if ( isIdentifier( node, parent ) && !scope.contains( node.name ) ) {
					this.dependencies[ node.name ] = true;
				}

				// check for assignments to d3.whatever
				if ( node.type === 'AssignmentExpression' && node.left.type === 'MemberExpression' ) {
					const keypath = getKeypath( node.left );

					if ( keypath && keypath.slice( 0, 3 ) === 'd3.' ) {
						this.exports.push( keypath );

						if ( node.right.type === 'Identifier' ) {
							this.internalNameByExportName[ keypath ] = node.right.name;
							node._shouldRemove = true;

							// we don't want this appearing in the output
							this.magicString.remove( node.start, node.end );
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

		this.allNodes.sort( ( a, b ) => {
			return a.start - b.start;
		});
	}

	render ( pathByName, namesByPath, internalNameByExportName, exportNameByInternalName ) {
		const self = this;
		const magicString = this.magicString;

		let scope = this.ast._scope;

		walk( this.ast, {
			enter ( node, parent ) {
				if ( node._scope ) {
					scope = node._scope;
				}

				// remove e.g. `d3.ascending = d3_ascending`
				if ( node._shouldRemove ) {
					const nextNode = findNextNode( self.allNodes, node );

					magicString.remove( node.start, nextNode ? nextNode.start : node.end );
					return this.skip();
				}

				// replace `d3.whatever = ...` with `var d3$whatever = ...`
				if ( node.type === 'AssignmentExpression' && node.left.type === 'MemberExpression' ) {
					const keypath = getKeypath( node.left );

					if ( keypath ) {
						const alias = internalNameByExportName[ keypath ] || createAlias( keypath );

						if ( alias ) {
							magicString.overwrite( node.start, node.left.end, `var ${alias}` );
							return this.skip();
						}
					}
				}

				// rewrite all other instances of `d3.whatever` to `d3_whatever`
				if ( node.type === 'MemberExpression' ) {
					const keypath = getKeypath( node );

					if ( keypath ) {
						const alias = internalNameByExportName[ keypath ] || createAlias( keypath );

						if ( alias ) {
							magicString.overwrite( node.start, node.end, alias );
							return this.skip();
						}
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
		Object.keys( this.dependencies ).forEach( name => {
			const owner = pathByName[ name ];

			if ( !owner ) return;

			let relativePath = relative( this.dir, owner ).replace( /\.js$/, '' );
			if ( relativePath[0] !== '.' ) relativePath = `./${relativePath}`;

			if ( !dependencies[ relativePath ] ) {
				dependencies[ relativePath ] = [];
			}

			dependencies[ relativePath ].push( name );
		});

		const importBlock = Object.keys( dependencies ).map( relativePath => {
			const names = dependencies[ relativePath ];
			return `import { ${names.join( ', ' )} } from '${relativePath}';`
		}).join( '\n' );

		if ( importBlock ) {
			magicString.prepend( importBlock + '\n\n' );
		}

		const shouldExport = namesByPath[ this.file ]
			.map( name => {
				const alias = internalNameByExportName[ name ] || createAlias( name );
				return alias;
			})
			.filter( Boolean );

		const exportBlock = `\n\nexport { ${shouldExport.join(', ')} };`

		return magicString.append( exportBlock ).toString();
	}
}
