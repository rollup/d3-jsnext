var astHelpers = require( '../../../../astHelpers' ),
	groupByIdentifier = require( '../../../../groupByIdentifier' );

module.exports = function ( node, parent, scanner ) {
	var keypath, group;

	if ( !node._ignore ) {
		keypath = astHelpers.getKeypath( node );
		scanner.usedInScope( keypath );
	}
};
