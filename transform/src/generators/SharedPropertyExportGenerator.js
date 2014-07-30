var relative = require( '../../utils/relative' );

var SharedGenerator = function ( group, name ) {

	this.name = name;
	this.modulePath = name.replace( /\./g, '/' );
	this.relativePath = relative( this.modulePath, 'd3/_' + group.path.replace( '.js', '' ) );
};

SharedGenerator.prototype = {
	path: function ( type ) {
		return type + '/' + this.modulePath + '.js';
	},

	amd: function () {
		return 'define([\'' + this.relativePath + '\'],function(dep){return dep.' + this.name.replace( /\./g, '$' ) + ';});';
	},

	cjs: function () {
		return 'module.exports = require( \'' + this.relativePath + '\' ).' + this.name.replace( /\./g, '$' ) + ';';
	}
};

module.exports = SharedGenerator;
