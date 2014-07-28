module.exports = function ( keypath ) {
	var keys = keypath.split( '.' ), node;

	node = memberExpression( keys );
	return node;
};


function memberExpression ( keys ) {
	var key = keys.pop();

	if ( !keys.length ) {
		return {
			type: 'Identifier',
			name: key
		};
	}

	return {
		type: 'MemberExpression',
		computed: false,
		object: memberExpression( keys ),
		property: {
			type: 'Identifier',
			name: key
		}
	};
}
