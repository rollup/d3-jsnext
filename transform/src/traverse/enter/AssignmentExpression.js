var astHelpers = require( '../../astHelpers' ),
	groupByIdentifier = require( '../../groupByIdentifier' );

module.exports = function ( node, parent, scanned ) {
	var left, keypath, group;

	left = node.left;

	// Property assignments to the d3 namespace (and children)
	if ( left.type === 'MemberExpression' ) {
		keypath = astHelpers.getKeypath( left );

		if ( !keypath ) {
			return;
		}

		if ( group = groupByIdentifier[ keypath ] ) {
			if ( !~scanned.shared.indexOf( group ) ) {
				scanned.shared.push( group );
			}
		}

		else if ( /^d3\./.test( keypath ) && !~scanned.exports.indexOf( keypath ) ) {
			scanned.exports.push( keypath );
		}
	}
};
