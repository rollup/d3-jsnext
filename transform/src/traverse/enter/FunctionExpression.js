var shouldExport = require( '../../shouldExport' );

module.exports = function ( node, parent, state ) {
	var name;

	if ( !state.scopeDepth && node.id ) {
		name = node.id.name;
		if ( shouldExport( name ) && !~state.helpers.indexOf( name ) ) {
			state.helpers.push( name );
		}
	}

	state.scopeDepth += 1;
};
