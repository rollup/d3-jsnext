var estraverse, escodegen, write_module, paths;

estraverse = require( 'estraverse' );
escodegen = require( 'escodegen' );
write_module = require( '../write_module' );

paths = require( '../paths' );

module.exports = function ( ast, export_nodes ) {
	var path, definition, code;

	return;

	// First, we create an internal module, which has all the API
	// exports as members of its export value
	internal_module = make_internal_module( ast );

	export_nodes.forEach( function ( node ) {
		var path = 'd3/' + node.expression.left.property.name + '.js';

		console.log
	});

	// replace with a define call
	estraverse.replace( ast, {
		enter: function ( candidate ) {
			var index, node;

			index = export_nodes.indexOf( candidate );
			if ( index !== -1 ) {
				node = export_nodes[ index ];
			}

			/*if ( candidate ===  ) {
				console.log( 'candidate === node' );
				return {
					type: 'ExpressionStatement',
					expression: {
						type: 'CallExpression',
						callee: {
							type: 'Identifier',
							name: 'define'
						},
						arguments: [
							{
								type: 'FunctionExpression',
								id: null,
								params: [],
								defaults: [],
								body: {
									type: 'BlockStatement',
									body: [
										{
											type: 'ReturnStatement',
											argument: node.expression.right
										}
									]
								},
								rest: null,
								generator: false,
								expression: false
							}
						]
					}
				};
			}*/
		}
	});

	code = escodegen.generate( ast );
	write_module( paths.OUTPUT, path, code );
};


function make_internal_module ( ast ) {

}