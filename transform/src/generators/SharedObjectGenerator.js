var SharedObjectGenerator = function ( group ) {
	this.group = group;
};

SharedObjectGenerator.prototype = {
	path: function ( type ) {
		return type + '/d3/_' + this.group.path;
	},

	amd: function () {
		return 'define({});';
	},

	cjs: function () {
		return 'module.exports = {};';
	}
};

module.exports = SharedObjectGenerator;
