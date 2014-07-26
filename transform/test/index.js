var fs = require( 'graceful-fs' ),
	path = require( 'path' ),
	promo = require( 'promo' ),
	Promise = promo.Promise,
	glob = promo( require( 'glob' ) ),
	mkdirp = promo( require( 'mkdirp' ) ),

	readFile = promo( fs.readFile ),

	transformTest = require( './transformTest' ),
	writeTo = require( '../utils/writeTo' ),

	srcDir = path.join( __dirname, '../../d3/test' ),
	destDir = path.join( __dirname, '../../output/test' );

module.exports = function () {
	return glob( path.join( srcDir, '*/*.js' ) ).then( function ( files ) {
		var testPromises;

		testPromises = files.map( function ( file ) {
			return readFile( file )
					.then( toString )
					.then( transformTest )
					.then( writeTo( file.replace( srcDir, destDir ) ) );
		});

		Promise.all([
			testPromises,
			copy( path.join( srcDir, 'XMLHttpRequest.js' ), path.join( destDir, 'XMLHttpRequest.js' ) ),
			copy( path.join( __dirname, 'root/assert.js' ), path.join( destDir, 'assert.js' ) ),
			copy( path.join( __dirname, 'root/load.js' ), path.join( destDir, 'load.js' ) ),
			copy( path.join( __dirname, 'root/requireAbsolute.js' ), path.join( destDir, 'requireAbsolute.js' ) ),
			copy( path.join( __dirname, 'root/d3.js' ), path.join( destDir, 'd3.js' ) )
		]).then( function () {
			console.log( 'done!' );
		})
	});
};

function toString ( buffer ) {
	return buffer.toString();
}

function copy ( srcPath, destPath ) {
	return readFile( srcPath ).then( writeTo( destPath ) );
}
