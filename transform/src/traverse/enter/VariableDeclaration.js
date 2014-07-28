var groupByIdentifier = require( '../../groupByIdentifier' ),
	astHelpers = require( '../../astHelpers' ),
	shouldExport = require( '../../shouldExport' );

var escodegen = require( 'escodegen' );

module.exports = function ( node, parent, scanned ) {
	var declaration, group;

	// We only futz about with root-level declarations
	if ( scanned.scopeDepth ) {
		return;
	}

	if ( node.declarations.length !== 1 ) {
		console.error( 'wrong length', JSON.stringify(node,null,'  ') );
		throw new Error( 'wrong length', node );
	}

	declaration = node.declarations[0];
	name = declaration.id.name;

	// Are we declaring a variable that needs to be shared
	// between multiple modules?
	if ( group = groupByIdentifier[ name ] ) {
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

		if ( !~scanned.shared.indexOf( group ) ) {
			scanned.shared.push( group );
		}

		replacement._isReplacement = true;
		return replacement;
	}

	else if ( shouldExport( name ) && !~scanned.helpers.indexOf( name ) ) {
		scanned.helpers.push( name );
	}
};
