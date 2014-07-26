var transform_file, path, esprima, estraverse, escodegen, write_module, paths, signatures, generators;

path = require( 'path' );

esprima = require( 'esprima' );
estraverse = require( 'estraverse' );
escodegen = require( 'escodegen' );

write_module = require( './write_module' );
paths = require( './paths' );
signatures = require( './signatures' );
generators = require( './generators' );

transform_file = function ( contents, filePath ) {
	var cleaned,
		ast,
		imports,
		api_imports,
		api_exports;

	// First, we need to get rid of the import directives, as they are not
	// legal JavaScript and will trip up Esprima
	cleaned = contents.replace( /^import "(.+?)";$/gm, function ( match, $1 ) {
		if ( !/index$/.test( filePath ) ) {
			console.log( 'import directive: ', filePath, $1, path.resolve( filePath, '../', $1 ) );
		}
		
		return '_import("' + $1 + '");';
	});

	// Then we generate an AST
	ast = esprima.parse( cleaned );

	write_module( paths.ASTS, filePath.substring(1) + '.json', JSON.stringify( ast, null, '\t' ) );

	imports = [];
	api_imports = [];
	api_exports = [];

	estraverse.traverse( ast, {
		enter: function ( node ) {
			if ( signatures.import( node ) ) {
				imports.push( node );
			}

			if ( signatures.api_import( node ) ) {
				api_imports.push( node );
			}

			if ( signatures.api_export( node ) ) {
				api_exports.push( node );
			}
		}
	});


	// Not exporting anything...?
	if ( !api_exports.length ) {

	}

	// If we're exporting a single module...
	else if ( api_exports.length === 1 ) {
		generators.single_module( ast, api_exports[0] );
	}

	else {
		generators.multiple_modules( ast, api_exports );
	}

	estraverse.replace( ast, {
		enter: function ( node ) {
			return node;
		}
	});
};

module.exports = transform_file;