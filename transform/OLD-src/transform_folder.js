var transform_file, transform_folder;

transform_file = require( './transform_file' );

transform_folder = function ( contents, folderPath ) {
	var key;

	for ( key in contents ) {
		if ( contents.hasOwnProperty( key ) ) {
			if ( key.charAt(0) === '_' ) {
				transform_folder( contents[key], folderPath + key.replace( '_', '' ) + '/' );
			} else {
				transform_file( contents[key], folderPath + key );
			}
		}
	}
};

module.exports = transform_folder;