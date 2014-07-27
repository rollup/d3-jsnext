var shared = require( './shared.json' );

module.exports = function confirm ( dep, x, pathsByHelperName, pathsByExportName ) {
	var index;

	do {
		if ( shared[ dep ] ) {
			return dep;
		}

		if ( pathsByHelperName[ dep ] || pathsByExportName[ dep ] ) {
			return dep;
		}

		index = dep.lastIndexOf( '.' );
		if ( ~index ) {
			dep = dep.substr( 0, index );
		} else {
			// This applies to locale/time-format.js... not proud of this hack
			// but the alternative is to keep track of all variables currently
			// in scopes below the root scope, and exclude them from dependencies
			console.error( 'Could not find `' + dep + '` definition (' + x.filepath + ')' );
			return null;
		}
	} while ( true );
};
