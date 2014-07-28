module.exports = function ( name, init ) {
	return {
		type: 'VariableDeclarator',
		id: {
			type: 'Identifier',
			name: name
		},
		init: init
	};
};
