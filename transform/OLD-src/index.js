var path, fs, spelunk, rimraf, D3_SRC, transform_folder;

path = require( 'path' );
fs = require( 'fs' );
rimraf = require( 'rimraf' );
spelunk = require( 'spelunk' );

transform_folder = require( './transform_folder' );

D3_SRC = path.resolve( __dirname, '../d3/src/$test' );      // TODO the whole lot


// avoid naming collisions
spelunk.getKey = function ( filePath, fileName, stats ) {
	if ( stats.isDirectory() ) {
		return '_' + fileName;
	}

	return fileName.replace( '.js', '' );
};


spelunk( D3_SRC, function ( err, d3_src ) {
	if ( err ) {
		throw err;
	}

	// Nested callbacks? Ugh. But can't be bothered to use a promise library
	// just to make it a bit nicer
	rimraf( path.resolve( __dirname, '../out' ), function ( err, result ) {
		if ( err ) {
			throw err;
		}

		rimraf( path.resolve( __dirname, '../asts' ), function ( err, result ) {
			if ( err ) {
				throw err;
			}

			transform_folder( d3_src, '/$test/' );
		});
	});
});

