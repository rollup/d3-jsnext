var shouldExport = require( '../../shouldExport' ),
	groupByIdentifier = require( '../../groupByIdentifier' ),
	astHelpers = require( '../../astHelpers' );

module.exports = function ( node, parent, state ) {
	var name, group, replacement;

	if ( !state.scopeDepth && node.id ) {
		name = node.id.name;

		// If this is a function that needs to be shared between
		// modules, it must be assigned to the shared namespace,
		// not declared with a function declaration
		if ( group = groupByIdentifier[ name ] ) {
			replacement = {
				type: 'ExpressionStatement',
				expression: {
					type: 'AssignmentExpression',
					left: astHelpers.generateMemberExpression( group.name + '.' + name ),
					operator: '=',
					right: {
						type: 'FunctionExpression',
						id: null,
						params: node.params,
						defaults: node.defaults,
						body: node.body,
						rest: node.rest,
						generator: node.generator,
						expression: node.expression
					}
				}
			};

			// We may need to hoist this to the top of its body
			replacement._shouldHoist = true;

			// Prevent this from getting nuked later
			replacement.expression.left._isReplacement = true;

			if ( !~state.shared.indexOf( group ) ) {
				state.shared.push( group );
			}

			return replacement;
		}


		if ( shouldExport( name ) && !~state.helpers.indexOf( name ) ) {
			state.helpers.push( name );
		}
	}

	state.scopeDepth += 1;
};
