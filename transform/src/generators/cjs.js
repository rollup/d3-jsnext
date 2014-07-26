var relative = require( '../../utils/relative' ),
	path = require( 'path' );

module.exports = function ( exportName, srcPath ) {
	var exportPath, relativePath;

	exportPath = exportName.replace( /\./g, '/' );
	exportPath = exportPath.replace( /\.[^\.]+$/, '' );
	srcPath = 'd3/_' + srcPath;

	relativePath = relative( exportPath, srcPath );

	return 'module.exports = require( \'' + relativePath.replace( '.js', '' ) + '\' ).' + exportName.replace( /\./g, '$' ) + ';';
};

function replace () {
	return '../';
}
