var IndexGenerator = function ( groupName, group ) {

	this.modulePath = groupName.replace( /\./g, '/' );
	this.groupName = groupName.split( '.' ).splice( -1 )[0];
	this.group = group;
};

IndexGenerator.prototype = {
	path: function ( type ) {
		return type + '/' + this.modulePath + '.js';
	},

	amd: function () {
		var groupName = this.groupName, dependencyPaths, dependencyNames;

		this.group.sort();

		dependencyPaths = this.group.map( function ( methodName, i ) {
			return "'" + ( groupName ? groupName + '/' : '' ) + methodName + "'";
		});

		dependencyNames = this.group.map( function ( methodName, i ) {
			return '"__dependency' + ( i + 1 ) + '__"';
		});

		return 'define([' + dependencyPaths.join( ',' ) + '], function (' + dependencyNames.join( ',' ) + '){\n\t' +
			this.group.map( function ( methodName, i ) {
				return methodName + ': __dependency' + ( i + 1 ) + '__';
			}).join( ',\n\t' ) +
		'\n};'
	},

	cjs: function () {
		var groupName = this.groupName;

		return 'module.exports = {\n\t' +
			this.group.sort().map( function ( methodName ) {
				return methodName + ': require( \'./' + ( groupName ? groupName + '/' : '' ) + methodName + '\' )';
			}).join( ',\n\t' ) +
		'\n};'
	}
};

module.exports = IndexGenerator;
