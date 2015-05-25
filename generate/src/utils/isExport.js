const blacklisted = {
	prototype: true
};

export default function isExport ( keypath ) {
	if ( !keypath ) return;
	if ( keypath === 'd3.event' ) return;

	const keys = keypath.split( '.' );

	if ( keys.length === 1 ) return;
	if ( keys[0] !== 'd3' ) return;
	if ( blacklisted[ keys.pop() ] ) return;

	return true;
}
