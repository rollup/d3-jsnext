var escodegen = require( 'escodegen' );

module.exports = function ( pathsByHelperName, pathsByExportName ) {
	var filepath = this.filepath,
		src,
		srcPath,
		dependencyGroups = {},
		importDeclarations = [];

	this.dependencies.forEach( function ( dep ) {
		var srcPath = pathsByHelperName[ dep ] || pathsByExportName[ dep ];

		if ( srcPath === filepath ) {
			return; // d'oh!
		}

		if ( !dependencyGroups[ srcPath ] ) {
			dependencyGroups[ srcPath ] = [];
		}

		dependencyGroups[ srcPath ].push( dep );
	});

	for ( srcPath in dependencyGroups ) {
		if ( dependencyGroups.hasOwnProperty( srcPath ) ) {
			importDeclarations.push({
				path: srcPath,
				dependencies: dependencyGroups[ srcPath ]
			});
		}
	}

	// todo fix apply context inside the AST
	this.src = escodegen.generate( this.ast ).replace( /\.apply\(\s*d3/g, '.apply(null' );
	this.importDeclarations = importDeclarations;
	this.safeExports = this.exports.map( function ( exportName ) {
		return exportName.replace( /\./g, '$' );
	});
};
