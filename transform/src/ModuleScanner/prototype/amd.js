var relative = require( '../../../utils/relative' );

module.exports = function () {
	var result, filepath = this.filepath, dependencyPaths, dependencyNames;

	dependencyPaths = [];
	this.importDeclarations.forEach( function ( group ) {
		dependencyPaths.push( "'" + relative( filepath, group.path ).replace( '.js', '' ) + "'" );
	});
	this.shared.forEach( function ( group ) {
		dependencyPaths.push( "'" + relative( filepath, group.path ).replace( '.js', '' ) + "'" );
	});
	dependencyPaths.push( "'exports'" );


	dependencyNames = [];
	this.importDeclarations.forEach( function ( group, i ) {
		dependencyNames.push( '__dependency' + ( i + 1 ) + '__' );
	});
	this.shared.forEach( function ( group, i ) {
		dependencyNames.push( group.name );
	});
	dependencyNames.push( 'exports' );


	result = [
		'define([' + dependencyPaths.join( ',' ) + '], function (' + dependencyNames.join( ',' ) + ') {',

		'\t\'use strict\';',

		this.importDeclarations.map( function ( group, i ) {
			var dependencyName, relativePath;

			dependencyName = '__dependency' + ( i + 1 ) + '__';
			relativePath = relative( filepath, group.path );

			return group.dependencies.map( function ( dep ) {
				// dep may be an exposed function, e.g. `d3.quantile` - we need
				// to turn those into `d3$quantile`
				dep = dep.replace( /\./g, '$' );

				return 'var ' + dep + ' = ' + dependencyName + '.' + dep + ';';
			}).join( '\n' );
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
