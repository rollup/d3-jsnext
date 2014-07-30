// Experimental...
module.exports = function ( node, parent, scanned ) {
	var keypath, replacementKeypath;

	if ( node._isReplacement || parent._isReplacement ) {
		return;
	}

	keypath = getKeypath( node );

	if ( shouldExport( keypath ) && !scanned.checkIfDefined( scanned.scope(), keypath ) ) {
		replacementKeypath = replaceMemberExpression( keypath, null, pathsByHelperName, pathsByExportName );
		if ( replacementKeypath ) {
			return astHelpers.generateMemberExpression( replacementKeypath );
		}
	}
};
