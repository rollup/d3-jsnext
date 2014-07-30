var relative = require( '../../../utils/relative' );

module.exports = function () {
	var result = '', filepath = this.filepath;

	if ( this.importDeclarations.length ) {
		result += this.importDeclarations.map( function ( group ) {
			var relativePath = relative( filepath, group.path );

			return group.dependencies.map( function ( dep ) {
				// dep may be an exposed function, e.g. `d3.quantile` - we need
				// to turn those into `d3$quantile`
				dep = dep.replace( /\./g, '$' );

				return 'var ' + dep + ' = require( \'' + relativePath.replace( '.js', '' ) + '\' ).' + dep + ';';
			}).join( '\n' );
		}).join( '\n' ) + '\n';
	}

	if ( this.shared.length ) {
		result += this.shared.map( function ( group ) {
			return 'var ' + group.name + ' = require( \'' + relative( filepath, group.path ).replace( '.js', '' ) + '\' );';
		}).join( '\n' ) + '\n';
	}

	if ( this.safeExports.length ) {
		result += this.safeExports.map( function ( exportName ) {
			return 'var ' + exportName + ';';
		}).join( '\n' ) + '\n';
	}

	result += '\n' + this.src.replace( /(d3\.[\w\.]+)/g, function ( match, $1 ) {
		return match.replace( $1, $1.replace( /\./g, '$' ) );
	}) + '\n\n';

	if ( this.helpers.length ) {
		result += this.helpers.map( function ( helperName ) {
			return 'exports.' + helperName + ' = ' + helperName + ';';
		}).join( '\n' ) + '\n';
	}

	if ( this.safeExports.length ) {
		result += this.safeExports.map( function ( exportName ) {
			return 'exports.' + exportName + ' = ' + exportName + ';';
		}).join( '\n' ) + '\n';
	}

	return result;
};
