var astHelpers = require( '../../astHelpers' ),
	groupByIdentifier = require( '../../groupByIdentifier' );

module.exports = function ( node, parent, scanned ) {
	var keypath, group;

	if ( !node._ignore ) {
		keypath = astHelpers.getKeypath( node );

		if ( group = groupByIdentifier[ keypath ] ) {
			if ( !~scanned.shared.indexOf( group ) ) {
				scanned.shared.push( group );
			}
		}

		else if ( /^d3\./.test( keypath ) && !~scanned.dependencies.indexOf( keypath ) ) {
			scanned.dependencies.push( keypath );
		}
	}
};
