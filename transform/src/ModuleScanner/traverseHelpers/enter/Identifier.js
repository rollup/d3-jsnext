var shouldExport = require( '../../../shouldExport' ),
	astHelpers = require( '../../../astHelpers' ),
	groupByIdentifier = require( '../../../groupByIdentifier' );

module.exports = function ( node, parent, scanned ) {
	var group;

	scanned.usedInScope( node.name ); // new-style

	if ( groupByIdentifier.hasOwnProperty( node.name ) && ( group = groupByIdentifier[ node.name ] ) ) {
		// Return a replacement node
		replacement = astHelpers.generateMemberExpression( group.name + '.' + node.name );
		replacement._isReplacement = true;
		return replacement;
	}
};
