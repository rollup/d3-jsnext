var undeclaredHelperPattern = /(d3_[\w]+)/g,
	declaredHelperPattern = /(?:(d3_\w+)\s*=|function\s+(d3_\w+))/g,
	exportPattern = /(d3\.[\w\.]+)\s*=/g;

module.exports = function ( src, filepath, pathsByExportName, pathsByHelperName ) {
	var match, dependencies = [], helpers = [], exports = [];

	// We'll just use regex for now...
	while ( match = declaredHelperPattern.exec( src ) ) {
		helpers.push( match[1] || match[2] );
	}

	while ( match = undeclaredHelperPattern.exec( src ) ) {
		if ( !~helpers.indexOf( match[1] ) && !~dependencies.indexOf( match[1] ) ) {
			dependencies.push( match[1] );
		}
	}

	while ( match = exportPattern.exec( src ) ) {
		exports.push( match[1] );
	}

	return {
		src: src,
		filepath: filepath,
		dependencies: dependencies,
		helpers: helpers,
		exports: exports
	};
};
