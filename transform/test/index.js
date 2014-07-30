var fs = require( 'graceful-fs' ),
	path = require( 'path' ),
	promo = require( 'promo' ),
	Promise = promo.Promise,
	glob = promo( require( 'glob' ) ),
	mkdirp = promo( require( 'mkdirp' ) ),

	readFile = promo( fs.readFile ),

	transformTest = require( './transformTest' ),
	writeTo = require( '../utils/writeTo' ),
	debug = require( '../utils/debug' ),

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
			copyFolder( path.join( __dirname, 'root' ), destDir ),
			copyFolder( path.join( srcDir, 'data' ), path.join( destDir, 'data' ) )
		]).then( function () {
			console.log( 'done!' );
		}).catch( debug );
	});
};

function toString ( buffer ) {
	return buffer.toString();
}

function copy ( srcPath, destPath ) {
	return readFile( srcPath ).then( writeTo( destPath ) );
}

function copyFolder ( srcPath, destPath ) {
	return glob( path.join( srcPath, '**' ) ).then( function ( files ) {
		var promises = files.map( function ( file ) {
			return copy( file, file.replace( srcPath, destPath ) );
		});
	});
}
