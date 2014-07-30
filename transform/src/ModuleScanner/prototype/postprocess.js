var estraverse = require( 'estraverse' ),
	confirm = require( '../../confirm' );

module.exports = function ( pathsByHelperName, pathsByExportName ) {
	estraverse.replace( this.ast, {
		enter: function ( node, parent ) {
			var keypath, replacementKeypath;

			if ( node._isReplacement || parent._isReplacement ) {
				return;
			}

			if ( node.type === 'MemberExpression' ) {
				/*keypath = getKeypath( node );

				if ( shouldExport( keypath ) && !scanned.definedInScope( node._scope, keypath ) ) {
					replacementKeypath = replaceMemberExpression( keypath, null, pathsByHelperName, pathsByExportName );
					if ( replacementKeypath ) {
						return astHelpers.generateMemberExpression( replacementKeypath );
					}
				}*/
			}

			// Replace foo.apply(d3,...) with foo.apply(null,...)
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
				}
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
