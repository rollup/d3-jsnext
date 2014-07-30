var relative = require( '../../../utils/relative' );

module.exports = function () {
	var result, filepath = this.filepath;

	result = [
		'define([ \'require\', \'exports\' ], function ( require, exports ) {',

		'\t\'use strict\';',

		this.importDeclarations.map( function ( group ) {
			var relativePath = relative( filepath, group.path );

			return group.dependencies.map( function ( dep ) {
				// dep may be an exposed function, e.g. `d3.quantile` - we need
				// to turn those into `d3$quantile`
				dep = dep.replace( /\./g, '$' );

				return 'var ' + dep + ' = require( \'' + relativePath.replace( '.js', '' ) + '\' ).' + dep + ';';
			}).join( '\n' );
		}).join( '\n' ),

		this.shared.map( function ( group ) {
			return 'var ' + group.name + ' = require( \'' + relative( filepath, group.path ).replace( '.js', '' ) + '\' );';
		}).join( '\n' ),

		this.safeExports.map( function ( exportName ) {
			return 'var ' + exportName + ';';
		}).join( '\n' ),

		this.src,

		this.helpers.map( function ( helperName ) {
			return 'exports.' + helperName + ' = ' + helperName + ';';
		}).join( '\n' ),

		this.safeExports.map( function ( exportName ) {
			return 'exports.' + exportName + ' = ' + exportName + ';';
		}).join( '\n' ),

		'});'
	].join( '\n' );


	return result;
};
