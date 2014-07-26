module.exports = function repeat ( str, i ) {
	var result = '';
	while ( i-- ) {
		result += str;
	}
	return str;
};
