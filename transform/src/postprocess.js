var estraverse = require( 'estraverse' ),
	getKeypath = require( './astHelpers/getKeypath' ),
	replaceMemberExpression = require( './replaceMemberExpression' ),
	shouldExport = require( './shouldExport' ),
	astHelpers = require( './astHelpers' );

module.exports = function ( scanned, pathsByHelperName, pathsByExportName ) {
	estraverse.replace( scanned.ast, {
		enter: function ( node, parent ) {
			var keypath, replacementKeypath;

			if ( node._isReplacement || parent._isReplacement ) {
				return;
			}

			if ( node.type === 'MemberExpression' ) {
				// this.skip();
				// return;

				keypath = getKeypath( node );

				if ( !shouldExport( keypath ) ) {
					return;
				}

				// TODO circular groups, e.g. d3.event?

				replacementKeypath = replaceMemberExpression( keypath, null, pathsByHelperName, pathsByExportName );
				if ( replacementKeypath ) {
					return astHelpers.generateMemberExpression( replacementKeypath );
				}
			}

			// Replace foo.apply(d3,...) with foo.apply(null,...)
			if ( node.type === 'CallExpression' ) {
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
			}
		}
	});
};
