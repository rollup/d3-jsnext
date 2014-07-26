// Replace placeholders in an AST with the specified nodes

var estraverse;

estraverse = require( 'estraverse' );

module.exports = function ( hostAst, map ) {

	hostAst = clone( hostAst );

	estraverse.replace( hostAst, {
		enter: function ( node ) {
			if ( node.type === 'ExpressionStatement' && node.expression && node.expression.type === 'Literal' ) {
				value = node.expression.value;
				return map[ value ] || node;
			}
		}
	});

	return hostAst;
};


// don't want to muck with the original templates... quick and
// dirty clone 
function clone ( obj ) {
	return JSON.parse( JSON.stringify( obj ) );
}