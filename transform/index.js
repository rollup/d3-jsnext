var fs = require( 'fs' ),
	path = require( 'path' ),
	promo = require( 'promo' ),
	Promise = promo.Promise,
	glob = promo( require( 'glob' ) ),
	unlink = promo( fs.unlink ),
	rmdir = promo( fs.rmdir ),
	stat = promo( fs.stat ),

	transformTests = require( './test' ),
	transformSource = require( './src' ),

	debug = require( './utils/debug' );

// Unlink all files. TODO use rimraf when have internet
glob( path.join( __dirname, '../output/**/*' ) ).then( function ( files ) {
	var promises = files.map( function ( file ) {
		stat( file ).then( function ( stats ) {
			if ( stats.isDirectory() ) {
				return rmdir( file );
			}

			return unlink( file );
		});
	});

	return Promise.all( promises );
})

.then( transformTests )
.then( transformSource )
.then( function () {
	// TODO... run tests
})

.catch( debug );
