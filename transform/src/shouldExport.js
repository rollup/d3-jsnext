var unprefixedExports = [
	'abs'
];

module.exports = function ( name ) {
	var shouldExport = /^d3_/.test( name ) || /^d3\./.test( name ) || !!~unprefixedExports.indexOf( name );
	return shouldExport;
};
