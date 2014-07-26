var fs, path, mkdirp;

fs = require( 'fs' );
path = require( 'path' );
mkdirp = require( 'mkdirp' );

module.exports = function ( base, modulePath, contents ) {
	// Create the folder if it doesn't exist already
	mkdirp( path.resolve( base, modulePath, '../' ), function ( err ) {
		if ( err ) {
			throw err;
		}

		fs.writeFile( path.resolve( base, modulePath ), contents, function ( err, result ) {
			if ( err ) {
				console.error( 'Error writing ' + modulePath  + ': ' + (err.message || err) );
			} else {
				console.log( 'Wrote ' + modulePath );
			}
		});
	});
};