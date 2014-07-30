var escodegen = require( 'escodegen' );

module.exports = function ( pathsByHelperName, pathsByExportName ) {
	var src,
		srcPath,
		dependencyGroups = {},
		importDeclarations = [];

	this.dependencies.forEach( function ( dep ) {
		var srcPath = pathsByHelperName[ dep ] || pathsByExportName[ dep ];

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

	this.src = escodegen.generate( this.ast );
	this.importDeclarations = importDeclarations;
	this.safeExports = this.exports.map( function ( exportName ) {
		return exportName.replace( /\./g, '$' );
	});
};
