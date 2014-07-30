var relative = require( '../../utils/relative' );

var ExportGenerator = function ( exportName, srcPath ) {
	var relativePath;

	this.exportName = exportName;
	this.exportPath = exportName.replace( /\./g, '/' ).replace( /\.[^\.]+$/, '' );
	this.srcPath = 'd3/_' + srcPath;

	this.relativePath = relative( this.exportPath, this.srcPath );
};

ExportGenerator.prototype = {
	path: function ( type ) {
		return '/' + type + '/' + this.exportName.replace( /\./g, '/' ) + '.js';
	},

	cjs: function () {
		return 'module.exports = require( \'' + this.relativePath.replace( '.js', '' ) + '\' ).' + this.exportName.replace( /\./g, '$' ) + ';';
	},

	amd: function () {
		return 'define([\'' + this.relativePath.replace( '.js', '' ) + '\'], function (x) { return x.' + this.exportName.replace( /\./g, '$' ) + '; });';
	}
};

module.exports = ExportGenerator;
