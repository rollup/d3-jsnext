module.exports = function ( groupName, group ) {

	return 'module.exports = {\n\t' +
		group.sort().map( function ( methodName ) {
			return methodName + ': require( \'./' + ( groupName ? groupName + '/' : '' ) + methodName + '\' )';
		}).join( ',\n\t' ) +
	'\n};'


	var depth;

	depth = exportName.split( '.' ).length;

	parentPath = depth > 1 ? repeat( '../', depth - 1 ) : './';

	return 'module.exports = require( \'' + parentPath + '_' + srcPath.replace( '.js', '' ) + '\' ).' + exportName.replace( /\./g, '$' ) + ';';
};
