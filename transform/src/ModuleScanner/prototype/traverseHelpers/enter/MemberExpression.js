var astHelpers = require( '../../../../astHelpers' ),
	groupByIdentifier = require( '../../../../groupByIdentifier' );

module.exports = function ( node, parent, scanned ) {
	var keypath, group;

	if ( !node._ignore ) {
		keypath = astHelpers.getKeypath( node );
		scanned.usedInScope( keypath );
	}
};
