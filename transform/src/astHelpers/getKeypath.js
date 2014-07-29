module.exports = function ( node ) {
	var keys = [], key;

	do {
		if ( node.computed ) {
			return null;
		}

		key = node.property.name;

		if ( !key ) {
			return null;
		}

		keys.unshift( key );
		node = node.object;
		node._ignore = true;
	} while ( node.type === 'MemberExpression' );

	if ( node.type === 'Identifier' ) {
		keys.unshift( node.name );
		return keys.join( '.' );
	}

	return null;
};
