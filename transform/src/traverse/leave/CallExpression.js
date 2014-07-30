module.exports = function ( node, parent, scanned ) {
	if (
		node.callee.type === 'MemberExpression' &&
		node.callee.property.name === 'apply' &&
		node.arguments[0] &&
		node.arguments[0].name === 'd3'
	) {
		node.arguments[0] === {
			"type": "Literal",
			"value": null,
			"raw": "null"
		};
	}
};
