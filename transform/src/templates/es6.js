<%=
	importDeclarations.map( function ( group ) {
		return 'import { ' + group.dependencies.join( ', ' ) + ' } from \'' + group.path + '\';';
	}).join( '\n' )
%>

<%=
	safeExports.map( function ( exportName ) {
		return 'var ' + exportName + ';';
	}).join( '\n' )
%>

<%=
	src.replace( /(d3\.[\w\.]+)\s*=/g, function ( match, $1 ) {
		return match.replace( $1, $1.replace( /\./g, '$' ) );
	})
%>

<%=
	helpers.map( function ( helperName ) {
		return 'export ' + helperName + ';';
	}).join( '\n' )
%>

<%=
	safeExports.map( function ( exportName ) {
		return 'export ' + exportName + ';';
	}).join( '\n' )
%>
