var groupByIdentifier = require( './groupByIdentifier' );

module.exports = function confirm ( dep, x, pathsByHelperName, pathsByExportName ) {
	var index, group, remainder = '';

	do {
		if ( group = groupByIdentifier[ dep ] ) {
			return group.name + '.' + dep.replace( /\./g, '$' ) + remainder;
		}

		if ( pathsByHelperName[ dep ] || pathsByExportName[ dep ] ) {
			return dep.replace( /\./g, '$' ) + remainder;
		}

		index = dep.lastIndexOf( '.' );
		if ( ~index ) {
			remainder = dep.substr( index ) + remainder;
			dep = dep.substr( 0, index );
		} else {
			// This applies to locale/time-format.js... not proud of this hack
			// but the alternative is to keep track of all variables currently
			// in scopes below the root scope, and exclude them from dependencies.
			// Maybe later
			console.error( 'Could not find `' + dep + '` definition (' + ( x ? x.filepath : 'unknown file' ) + ')' );
			return null;
		}
	} while ( true );
};
