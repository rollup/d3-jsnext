export default function ( src ) {
	return `require( 'babel/register' );\n\n` +
		src.replace( /require\(\s*['"]\.\.\/\.\.\/['"]\s*\)/, 'require("../d3")');
}
