var fs = require( 'fs' ),
	path = require( 'path' ),
	promo = require( 'promo' ),
	Promise = promo.Promise,
	glob = promo( require( 'glob' ) ),
	rimraf = promo( require( 'rimraf' ) ),
	stat = promo( fs.stat ),

	transformTests = require( './test' ),
	transformSource = require( './src' ),

	debug = require( './utils/debug' );

// Unlink all files. TODO use rimraf when have internet
rimraf( path.join( __dirname, '../output' ) )

.then( transformTests )
.then( transformSource )
.then( function () {
	// TODO... run tests
})

.catch( debug );
