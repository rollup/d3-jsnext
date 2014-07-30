var estraverse = require( 'estraverse' );

module.exports = function ( ast ) {
	estraverse.traverse( ast, {
		enter: function ( node ) {
			if ( node.type === 'FunctionExpression' || node.type === 'FunctionDeclaration' ) {
				this.skip();
				return;
			}

			if ( node.body ) {
				preprocessBody( node.body );
			}
		}
	});
};

function preprocessBody ( body ) {
	var i, node;

	// Top-level variable declarations should not be grouped
	// for the subsequent operations, it makes life harder

	i = body.length;
	while ( i-- ) {
		node = body[i];

		if ( node.type === 'VariableDeclaration' ) {
			declarations = unrollDeclarations( node.declarations );
			spliceArgs = [ i, 1 ].concat( declarations );

			body.splice.apply( body, spliceArgs );
		}
	}
}

function unrollDeclarations ( declarations ) {
	var result = [];

	declarations.forEach( function ( node ) {
		var _left, _right, _value, declaration, unrolled = [];

		// We need to break apart e.g. `var foo = bar = baz = 0;`
		_left = node.id;
		_right = node.init;

		do {
			// If this is the `foo` in `foo = bar = ...`, then
			// we change it to `var foo = bar;` - later, we'll
			// reverse the order, so the `bar` declaration
			// comes first
			if ( _right && _right.type === 'AssignmentExpression' ) {
				_value = _right.left;
			} else {
				_value = _right;
				_right = null;
			}

			if ( _left.type === 'MemberExpression' ) {
				statement = {
					type: 'ExpressionStatement',
					expression: {
						type: 'AssignmentExpression',
						left: _left,
						operator: '=',
						right: _value
					}
				};
			} else {
				statement = {
					type: 'VariableDeclaration',
					kind: 'var',
					declarations: [{
						type: 'VariableDeclarator',
						id: _left,
						init: _value
					}]
				};
			}

			unrolled.push( statement );

			if ( !_right ) {
				break;
			}

			_left = _right.left;
			_right = _right.right;
		} while ( _left );

		result = result.concat( unrolled.reverse() );
	});

	return result;
}

function getEndValue ( node ) {
	if ( node && node.type === 'AssignmentExpression' ) {
		return getEndValue( node.right );
	}

	return node;
}
