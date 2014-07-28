var esprima = require( 'esprima' ),
	estraverse = require( 'estraverse' ),
	escodegen = require( 'escodegen' );

var undeclaredHelperPattern = /(d3_[\w]+)/g,
	declaredHelperPattern = /(?:(d3_\w+)\s*=[^=]|function\s+(d3_\w+))/gm,
	undeclaredExportPattern = /(d3\.[\w\.]+)/g,
	declaredExportPattern = /(d3\.[\w\.]+)\s*=[^=]/g,

	shouldExport = require( './shouldExport' ),
	traverse = require( './traverse' ),
	astHelpers = require( './astHelpers' );

module.exports = function ( src, filepath, pathsByExportName, pathsByHelperName ) {
	var ast,
		match,
		i,
		node,
		scanned = {
			filepath: filepath,
			shared: [],
			dependencies: [],
			helpers: [],
			exports: [],
			scopeDepth: 0
		};

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

	astHelpers.preprocess( ast );

	// Find declared helpers, and API methods/properties
	estraverse.replace( ast, {
		enter: function ( node, parent ) {
			var fn, _left, _right, name, declaration, left, keypath, skip;

			// We don't want to traverse nodes we created ourselves
			if ( parent._isReplacement ) {
				return;
			}

			if ( fn = traverse.enter[ node.type ] ) {
				replacement = fn( node, parent, scanned );
				return replacement;
			}
		},

		leave: function ( node ) {
			var i;

			if ( node.type === 'FunctionExpression' || node.type === 'FunctionDeclaration' ) {
				scanned.scopeDepth -= 1;
			}

			delete node._isReplacement;
			delete node._ignore;
		}
	});

	scanned.dependencies = scanned.dependencies.filter( function ( dep ) {
		return !~scanned.helpers.indexOf( dep ) && !~scanned.exports.indexOf( dep );
	});

	scanned.ast = ast;
	delete scanned.scopeDepth;

	return scanned;
};


function s ( thing ) {
	return JSON.stringify( thing, null, '  ' );
}
