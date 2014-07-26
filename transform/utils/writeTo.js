var fs = require( 'graceful-fs' ),
	path = require( 'path' ),
	promo = require( 'promo' ),
	mkdirp = promo( require( 'mkdirp' ) ),
	writeFile = promo( fs.writeFile );

module.exports = function ( filename ) {
	return function ( data ) {
		return mkdirp( path.dirname( filename ) )
			.then( function () {
				writeFile( filename, data );
			});
	};
};
