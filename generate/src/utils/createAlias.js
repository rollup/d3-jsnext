export default function createAlias ( keypath ) {
	if ( keypath.slice( 0, 3 ) === 'd3.' ) {
		return keypath.replace( /\./g, '$' ); // TODO handle .apply, .length etc
	}
}
