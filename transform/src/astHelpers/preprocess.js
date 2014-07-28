var estraverse = require( 'estraverse' ),
	astHelpers = require( './index' );

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
		var _left, _right, declaration;

		// We need to break apart e.g. `var foo = bar = baz = 0;`
		_left = node.id;
		_right = node.init;

		do {
			declaration = {
				type: 'VariableDeclarator',
				id: _left,
				init: getEndValue( _right )
			};

			result.push({
				type: 'VariableDeclaration',
				kind: 'var',
				declarations: [ declaration ]
			});

			if ( !_right ) {
				break;
			}

			_left = _right.left;
			_right = _right.right;
		} while ( _left );
	});

	return result;
}

function getEndValue ( node ) {
	if ( node && node.type === 'AssignmentExpression' ) {
		return getEndValue( node.right );
	}

	return node;
}
