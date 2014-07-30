var estraverse = require( 'estraverse' ),
	traverseHelpers = require( './traverseHelpers' );

module.exports = function () {
	var scanner = this;

	// Find declared helpers, and API methods/properties
	estraverse.replace( this.ast, {
		enter: function ( node, parent ) {
			var fn, _left, _right, name, declaration, left, keypath, skip;

			node._scope = scanner.scope();

			// We don't want to traverse nodes we created ourselves
			if ( parent._isReplacement ) {
				return;
			}

			if ( fn = traverseHelpers.enter[ node.type ] ) {
				replacement = fn( node, parent, scanner );
				return replacement;
			}
		},

		leave: function ( node, parent ) {
			var i;


			//delete node._isReplacement;
			delete node._ignore;

			if ( fn = traverseHelpers.leave[ node.type ] ) {
				replacement = fn( node, parent, scanner );
				return replacement;
			}
		}
	});
}
