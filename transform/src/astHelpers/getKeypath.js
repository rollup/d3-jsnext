module.exports = function ( node ) {
	var keys = [], key;

	do {
		key = node.property.name;

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
