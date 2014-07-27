var esprima = require( 'esprima' ),
	estraverse = require( 'estraverse' ),
	escodegen = require( 'escodegen' );

var undeclaredHelperPattern = /(d3_[\w]+)/g,
	declaredHelperPattern = /(?:(d3_\w+)\s*=[^=]|function\s+(d3_\w+))/gm,
	undeclaredExportPattern = /(d3\.[\w\.]+)/g,
	declaredExportPattern = /(d3\.[\w\.]+)\s*=[^=]/g,

	shared = require( './shared.json' );

module.exports = function ( src, filepath, pathsByExportName, pathsByHelperName ) {
	var ast,
		match,
		dependencies = [],
		helpers = [],
		exports = [],
		sharedAssignments = [],
		declaratorsToRemove = [],
		scopeDepth = 0,
		i,
		node;

	src = src
		// Remove smash import declarations
		.replace( /^import .+/gm, '' )
		.trim();

	try {
		ast = esprima.parse( src );
	} catch ( err ) {
		console.log( 'error parsing ' + filepath + ': ' + err.message );
		throw err;
	}

	// Find declared helpers, and API methods/properties
	estraverse.replace( ast, {
		enter: function ( node, parent ) {
			var _left, _right, declaration, left, keypath, skip;

			if ( node.type === 'VariableDeclaration' ) {
				node._unpackedDeclarations = [];
				node._sharedDeclarations = [];
			}

			// Function declarations
			if ( node.type === 'FunctionExpression' || node.type === 'FunctionDeclaration' ) {
				if ( !scopeDepth && node.id && /^d3_/.test( node.id.name ) ) {
					helpers.push( node.id.name );
				}

				scopeDepth += 1;
			}

			// Variable declarations
			if ( node.type === 'VariableDeclarator' ) {
				if ( !scopeDepth && node.id ) {

					// We need to break apart e.g. `var foo = bar = baz = 0;`
					_left = node.id;
					_right = node.init;
					do {
						declaration = {
							type: 'VariableDeclarator',
							id: _left,
							init: getEndValue( _right )
						};

						if ( !!shared[ declaration.id.name ] ) {
							parent._sharedDeclarations.push({
								name: shared[ declaration.id.name ],
								init: declaration.init
							});

							parent._shouldFlatten = true;
						}

						else {
							parent._unpackedDeclarations.push( declaration );

							if ( /^d3_/.test( declaration.id.name ) ) {
								helpers.push( declaration.id.name );
							}
						}

						if ( !_right ) {
							break;
						}

						_left = _right.left;
						_right = _right.right;
					} while ( _left );

					function getEndValue ( node ) {
						if ( node && node.type === 'AssignmentExpression' ) {
							return getEndValue( node.right );
						}

						return node;
					}
				}
			}

			// Property assignments to the d3 namespace (and children)
			if ( node.type === 'AssignmentExpression' ) {
				left = node.left;

				if ( left.type === 'MemberExpression' ) {
					keypath = getKeypath( left );
					if ( /^d3\./.test( keypath ) ) {
						exports.push( keypath );
					}
				}
			}

			// References to helpers
			if ( node.type === 'Identifier' ) {
				if ( shared[ node.name ] ) {
					usesShared = true;
				}

				if ( /^d3_/.test( node.name ) ) {
					dependencies.push( node.name );
				}
			}

			// References to d3 namespace
			if ( node.type === 'MemberExpression' ) {
				keypath = getKeypath( node );

				if ( shared[ keypath ] ) {
					usesShared = true;
				}

				if ( /^d3\./.test( keypath ) ) {
					dependencies.push( keypath );
				}

				skip = true;
			}


			if ( skip ) {
				this.skip();
			}
		},

		leave: function ( node ) {
			var i;

			if ( node.type === 'VariableDeclaration' ) {
				if ( node._shouldFlatten ) {
					node.declarations = node._unpackedDeclarations;
				}

				if ( !node.declarations.length ) {
					return { emptyVariableDeclaration: true, _sharedDeclarations: node._sharedDeclarations };
				}

				delete node._shouldFlatten;
				delete node._unpackedDeclarations;
			}

			if ( node.type === 'FunctionExpression' || node.type === 'FunctionDeclaration' ) {
				scopeDepth -= 1;
			}
		}
	});

	// insert sharedAssignments nodes
	insertSharedAssignments( ast.body );

	dependencies = dependencies.filter( function ( dep ) {
		return !~helpers.indexOf( dep ) && !~exports.indexOf( dep );
	});

	try {
		src = escodegen.generate( ast );
	} catch ( err ) {
		console.log( 'could not generate code from ' + filepath + ' ast:\n', s(ast) );
		throw err;
	}

	return {
		src: escodegen.generate( ast ),
		filepath: filepath,
		dependencies: dependencies,
		helpers: helpers,
		exports: exports
	};
};

function getKeypath ( node ) {
	keys = [];

	do {
		keys.unshift( node.property.name );
		node = node.object;
	} while ( node.type === 'MemberExpression' );

	if ( node.type === 'Identifier' ) {
		keys.unshift( node.name );
		return keys.join( '.' );
	}

	return '';
}

function insertSharedAssignments ( body ) {
	var i, node, spliceArgs, declarations;

	i = body.length;
	while ( i-- ) {
		node = body[i];

		if ( node._sharedDeclarations ) {
			declarations = node._sharedDeclarations.filter( function ( decl ) {
				return decl.init;
			}).map( function ( decl ) {
				var assignment;

				assignment = {
					type: 'ExpressionStatement',
					expression: {
						type: 'AssignmentExpression',
						operator: '=',
						left: {
							type: 'MemberExpression',
							computed: false,
							object: {
								type: 'Identifier',
								name: 'shared'
							},
							property: {
								type: 'Identifier',
								name: decl.name
							}
						},
						right: decl.init
					}
				};

				return assignment;
			});

			spliceArgs = [ i + 1, 0 ].concat( declarations );

			body.splice.apply( body, spliceArgs );

			delete node._sharedDeclarations;
		}

		if ( node.emptyVariableDeclaration ) {
			body.splice( i, 1 );
		}
	}
}


function s ( thing ) {
	return JSON.stringify( thing, null, '  ' );
}
