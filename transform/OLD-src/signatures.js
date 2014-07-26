module.exports = {
	import: function ( node ) {
		//console.log( node );
	},

	api_import: function ( node ) {
		//console.log( node );
	},

	api_export: function ( node ) {
		return node.type === 'ExpressionStatement' &&
			node.expression.type === 'AssignmentExpression' &&
			node.expression.left &&
			node.expression.left.type === 'MemberExpression' &&
			node.expression.left.object &&
			node.expression.left.object.type === 'Identifier' &&
			node.expression.left.object.name === 'd3';
	}
}