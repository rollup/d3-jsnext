module.exports = function ( node, parent, scanned ) {
	scanned.definedInScope( node.id.name );
};
