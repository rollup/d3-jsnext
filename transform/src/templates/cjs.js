<%=
	importDeclarations.map( function ( group ) {
		var relativePath = relative( filepath, group.path );

		return group.dependencies.map( function ( dep ) {
			// dep may be an exposed function, e.g. `d3.quantile` - we need
			// to turn those into `d3$quantile`
			dep = dep.replace( /\./g, '$' );

			return 'var ' + dep + ' = require( \'' + relativePath.replace( '.js', '' ) + '\' ).' + dep + ';';
		}).join( '\n' );
	}).join( '\n' )
%>

<%=
	safeExports.map( function ( exportName ) {
		return 'var ' + exportName + ';';
	}).join( '\n' )
%>

<%=
	src.replace( /(d3\.[\w\.]+)/g, function ( match, $1 ) {
		return match.replace( $1, $1.replace( /\./g, '$' ) );
	})
%>

<%=
	helpers.map( function ( helperName ) {
		return 'exports.' + helperName + ' = ' + helperName + ';';
	}).join( '\n' )
%>
<%=
	safeExports.map( function ( exportName ) {
		return 'exports.' + exportName + ' = ' + exportName + ';';
	}).join( '\n' )
%>
