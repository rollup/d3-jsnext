var esprima = require( 'esprima' ),
	estraverse = require( 'estraverse' ),
	escodegen = require( 'escodegen' );

var undeclaredHelperPattern = /(d3_[\w]+)/g,
	declaredHelperPattern = /(?:(d3_\w+)\s*=[^=]|function\s+(d3_\w+))/gm,
	undeclaredExportPattern = /(d3\.[\w\.]+)/g,
	declaredExportPattern = /(d3\.[\w\.]+)\s*=[^=]/g,

	shouldExport = require( './shouldExport' ),
	groupByIdentifier = require( './groupByIdentifier' ),
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
			scopeDepth: 0,
			scopes: [{ used: [], defined: [], parent: null }],

			definedInModule: null, // fill in on leaving Program node
			externalRefs: [],

			_scopesToCheck: []
		};

	scanned.enterScope = function () {
		scanned.scopes.push({
			used: [],
			defined: [],
			parent: scanned.scope()
		});

		scanned.scopeDepth += 1;
	};

	scanned.leaveScope = function () {
		var scope = scanned.scopes.pop();

		// If any d3 identifiers/keypaths were used in this scope,
		// we need to check later whether they were defined at
		// in a parent scope
		if ( scope.used.length ) {
			scanned._scopesToCheck.push( scope );
		}

		scanned.scopeDepth -= 1;
	};

	scanned.scope = function () {
		return scanned.scopes[ scanned.scopes.length - 1 ];
	};

	scanned.isDefined = function ( varName ) {
		var i = scanned.scopes.length, scope;

		while ( i-- ) {
			scope = scanned.scopes[i];
			if ( ~scope.defined.indexOf( varName ) ) {
				return true;
			}
		}

		return false;
	};

	scanned.definedInScope = function ( name ) {
		var defined = scanned.scope().defined;

		if ( groupByIdentifier.hasOwnProperty( name ) && ( group = groupByIdentifier[ name ] ) && !~scanned.shared.indexOf( group ) ) {
			scanned.shared.push( group );
		}

		if ( shouldExport( name ) && !~defined.indexOf( name ) ) {
			defined.push( name );
		}
	};

	scanned.usedInScope = function ( name ) {
		var used = scanned.scope().used;

		if ( groupByIdentifier.hasOwnProperty( name ) && ( group = groupByIdentifier[ name ] ) && !~scanned.shared.indexOf( group ) ) {
			scanned.shared.push( group );
		}

		if ( shouldExport( name ) && !~used.indexOf( name ) ) {
			used.push( name );
		}
	};

	scanned.checkIfDefined = function ( scope, name ) {
		var index = name.indexOf( '.' );

		if ( ~index ) {
			name = name.substr( 0, index );
		}

		do {
			if ( ~scope.defined.indexOf( name ) ) {
				return true;
			}
		} while ( scope = scope.parent );
	};

	/*scanned.addShared = function ( group ) {
		if ( !~scanned.shared.indexOf( group ) ) {
			scanned.shared.push( group );
		}
	};*/

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

			node._scope = scanned.scope();

			// We don't want to traverse nodes we created ourselves
			if ( parent._isReplacement ) {
				return;
			}

			if ( fn = traverse.enter[ node.type ] ) {
				replacement = fn( node, parent, scanned );
				return replacement;
			}
		},

		leave: function ( node, parent ) {
			var i;


			//delete node._isReplacement;
			delete node._ignore;

			if ( fn = traverse.leave[ node.type ] ) {
				replacement = fn( node, parent, scanned );
				return replacement;
			}
		}
	});

	// See which variables were used but not declared...
	scanned._scopesToCheck.forEach( function ( scope ) {
		scope.used.forEach( function ( name ) {
			if ( !scanned.checkIfDefined( scope, name ) && !~scanned.externalRefs.indexOf( name ) ) {
				scanned.externalRefs.push( name );
			}
		});
	});

	if ( require('./TEST') ) {
		console.log( 'MODULE REPORT\n===' );
		console.log( '\nscanned.shared\n', '  ' + JSON.stringify(scanned.shared) );
		console.log( '\nscanned.definedInModule\n', '  ' + scanned.definedInModule );
		console.log( '\nscanned.externalRefs\n', '  ' + scanned.externalRefs );
		console.log( '===\n' );
	}

	scanned.dependencies = scanned.externalRefs;
	scanned.exports = scanned.definedInModule.filter( function ( name ) {
		return /^d3\./.test( name );
	});
	scanned.helpers = scanned.definedInModule.filter( function ( name ) {
		return !/^d3\./.test( name );
	});

	scanned.ast = ast;
	delete scanned.scopeDepth;

	return scanned;
};


function s ( thing ) {
	return JSON.stringify( thing, null, '  ' );
}
