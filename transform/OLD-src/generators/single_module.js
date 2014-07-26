var path, estraverse, escodegen, write_module, paths, template;

estraverse = require( 'estraverse' );
escodegen = require( 'escodegen' );
write_module = require( '../write_module' );
replace = require( '../replace' );

paths = require( '../paths' );

template = require( '../templates' ).single_module;

console.log( 'single module template', template );

module.exports = function ( ast, node ) {
	var path, definition, code, result;

	path = 'd3/' + node.expression.left.property.name + '.js';

	// replace with a define call
	estraverse.replace( ast, {
		enter: function ( candidate ) {
			if ( candidate === node ) {
				return {
					type: 'ExpressionStatement',
					expression: {
						type: 'AssignmentExpression',
						operator: '=',
						left: {
							type: 'Identifier',
							name: '_export'
						},
						right: node.expression.right
					}
				};
			}
		}
	});

	result = replace( template, {
		$BODY: ast
	});

	code = escodegen.generate( result );
	write_module( paths.OUTPUT, path, code );
};