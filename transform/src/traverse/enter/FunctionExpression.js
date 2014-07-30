var shouldExport = require( '../../shouldExport' );

module.exports = function ( node, parent, scanned ) {
	if ( node.id ) {
		scanned.definedInScope( node.id.name );
	}

	scanned.enterScope();
};
