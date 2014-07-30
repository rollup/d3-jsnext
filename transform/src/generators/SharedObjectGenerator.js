var SharedObjectGenerator = function ( group ) {
	this.group = group;
};

SharedObjectGenerator.prototype = {
	path: function ( type ) {
		return type + '/d3/_' + this.group.path;
	},

	amd: function () {
		/* all the modules that assign to this shared object */

		return 'define([\'require\',\'exports\'],function (require,exports){\n' +
			'require([' +

			']);\n' +
		'});';
	},

	cjs: function () {
		return 'module.exports = {};';
	}
};

module.exports = SharedObjectGenerator;
