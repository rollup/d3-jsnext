var estraverse = require( 'estraverse' ),
	confirm = require( '../../confirm' ),
	astHelpers = require( '../../astHelpers' ),
	shouldExport = require( '../../shouldExport' ),
	replaceMemberExpression = require( '../../replaceMemberExpression' );

module.exports = function ( pathsByHelperName, pathsByExportName ) {
	var self = this;

	estraverse.replace( this.ast, {
		enter: function ( node, parent ) {
			var keypath, replacementKeypath, replacement;

			if ( node._isReplacement || parent._isReplacement ) {
				return;
			}

			if ( node.type === 'MemberExpression' ) {
				keypath = astHelpers.getKeypath( node );

				if ( shouldExport( keypath ) && !self.checkIfDefined( node._scope, keypath ) ) {
					replacementKeypath = replaceMemberExpression( keypath, null, pathsByHelperName, pathsByExportName );
					if ( replacementKeypath ) {
						replacement = astHelpers.generateMemberExpression( replacementKeypath );

						estraverse.replace( replacement, {
							enter: fixApplyContext
						});

						return replacement;
					}
				}
			}

			// Replace foo.apply(d3,...) with foo.apply(null,...)
			if ( replacement = fixApplyContext( node ) ) {
				return replacement;
			}
		}
	});

	var deps = this.dependencies, i = deps.length, dep, index;
	while ( i-- ) {
		dep = confirm( deps[i], this, pathsByHelperName, pathsByExportName );

		if ( !dep ) {
			deps.splice( i, 1 );
		} else {
			deps[i] = dep;
		}
	}

	this.consolidate( pathsByHelperName, pathsByExportName );
};

function fixApplyContext ( node ) {
	if ( node.type === 'CallExpression' ) {
		if (
			node.callee.type === 'MemberExpression' &&
			node.callee.property.name === 'apply' &&
			node.arguments[0] &&
			node.arguments[0].name === 'd3'
		) {
			console.log( 'fixing CallExpression' );
			node.arguments[0] === {
				"type": "Literal",
				"value": null,
				"raw": "null"
			};

			return node;
		}
	}
}
