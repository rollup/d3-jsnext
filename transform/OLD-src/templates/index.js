var fs, path, esprima;

fs = require( 'fs' );
path = require( 'path' );
esprima = require( 'esprima' );

fs.readdirSync( __dirname ).forEach( function ( file ) {
	if ( file !== 'index.js' ) {
		module.exports[ file.replace( '.js', '' ) ] = esprima.parse( fs.readFileSync( path.resolve( __dirname, file ) ).toString() );
	}
});