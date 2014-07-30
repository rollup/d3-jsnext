var groupByIdentifier = require( '../../groupByIdentifier' ),
	astHelpers = require( '../../astHelpers' ),
	shouldExport = require( '../../shouldExport' );

var escodegen = require( 'escodegen' );

module.exports = function ( node, parent, scanned ) {
	var declaration, group;

	if ( !scanned.scopeDepth && node.declarations.length !== 1 ) {
		console.error( 'wrong length', JSON.stringify(node,null,'  ') );
		throw new Error( 'wrong length', node );
	}

	declaration = node.declarations[0];
	name = declaration.id.name;

	scanned.definedInScope( name );

	// Are we declaring a variable that needs to be shared
	// between multiple modules?
	if ( !scanned.scopeDepth && ( group = groupByIdentifier[ name ] ) ) {
		if ( declaration.init ) {
			replacement = {
				type: 'ExpressionStatement',
				expression: {
					type: 'AssignmentExpression',
					//left: astHelpers.generateMemberExpression( group.name + '.' + name ),
					left: declaration.id,
					operator: '=',
					right: declaration.init
				}
			};
		} else {
			replacement = { type: 'EmptyStatement' };
		}

		replacement._isReplacement = true;
		return replacement;
	}
};
