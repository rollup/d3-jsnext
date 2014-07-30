var vm = require( 'vm' ),
	fs = require( 'fs' ),
	path = require( 'path' ),
	jsdom = require( 'jsdom' ),
	XMLHttpRequest = require( './XMLHttpRequest' ),
	document,
	window,
	context,

	cache = {};

document = jsdom.jsdom("<html><head></head><body></body></html>");
window = document.createWindow();

// Monkey-patch createRange support to JSDOM.
document.createRange = function() {
	return {
		selectNode: function() {},
		createContextualFragment: jsdom.jsdom
	};
};

module.exports = function requireAbsolute ( currentPath ) {
	var require, _module;

	if ( !cache[ currentPath ] ) {
		require = function ( dep ) {
			var absolute, result;

			absolute = path.resolve( '/', currentPath, '..', dep.replace( /^\.\//, '' ) );

			try {
				result = requireAbsolute( absolute );
			} catch ( err ) {
				console.error( 'Could not require ' + absolute + ' (' + dep + ', required by ' + currentPath + ')' );
				throw err;
			}
			return requireAbsolute( absolute );
		};

		cache[ currentPath ] = _module = {
			exports: {}
		};

		context = vm.createContext({
			require: require,
			module: _module,
			exports: _module.exports,

			console: console,
			XMLHttpRequest: XMLHttpRequest,
			document: document,
			window: window,
			setTimeout: setTimeout,
			clearTimeout: clearTimeout,
		});

		code = fs.readFileSync( currentPath + '.js' );

		try {
			vm.runInContext( code, context );
		} catch ( err ) {
			// console.log( '\n\n==========================\nfailed to run ' + currentPath );
			// console.log( '>>> ' + err.message.substr( 0, 100 ) + '\n\n' );
			// console.log( code.toString() + '\n==========================\n\n' );
			// throw err;
		}
	}

	return cache[ currentPath ].exports;
}
