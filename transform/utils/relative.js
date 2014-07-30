module.exports = function relative ( from, to ) {
	var fromKeys, toKeys, prefix;



	try {
		fromKeys = from.split( '/' );
		toKeys = ( to || '' ).split( '/' );
	} catch ( err ) {
		console.log( 'failed with from', from );
		console.log( 'to', to );
		throw err;
	}

	fromKeys.pop();

	// remove identical parent folders - to go from '/foo/bar'
	// to '/foo/baz', we don't need to do '../foo/baz'
	while ( fromKeys[0] === toKeys[0] ) {
		fromKeys.shift();
		toKeys.shift();
	}

	if ( !fromKeys.length ) {
		prefix = './';
	} else {
		prefix = repeat( '../', fromKeys.length );
	}

	return prefix + toKeys.join( '/' );
};

function repeat ( str, i ) {
	var result = '';
	while ( i-- ) {
		result += str;
	}
	return result;
}
