var promo = require( 'promo' ),
	Promise = promo.Promise,
	fs = require( 'graceful-fs' ),
	path = require( 'path' ),
	readFile = promo( fs.readFile ),
	_ = require( 'lodash' ),
	debug = require( '../utils/debug' ),
	relative = require( '../utils/relative' ),

	templates = {};

var templatePromise = Promise.all(
	[ 'es6', 'cjs' ].map( function ( type ) {
		return readFile( path.join( __dirname, 'templates/' + type + '.js' ) )
			.then( toString )
			.then( function ( template ) {
				templates[ type ] = _.template( template );
			});
	})
).catch( debug );

module.exports = function ( x, pathsByHelperName ) {
	return templatePromise.then( function () {
		var src,
			srcPath,
			dependencyGroups = {},
			importDeclarations = [],
			imports = '', exports = '', data, result;

		x.dependencies.forEach( function ( dep ) {
			var srcPath = pathsByHelperName[ dep ];

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

		if ( importDeclarations.length ) {
			imports = importDeclarations.join( '\n' ) + '\n\n';
		}

		if ( x.helpers.length ) {
			exports = '\n\n' + x.helpers.map( function ( helperName ) {
				return 'export ' + helperName + ';';
			}).join( '\n' );
		}

		// Remove smash import declarations
		src = x.src.replace( /^import.+/gm, '' );

		data = {
			importDeclarations: importDeclarations,
			src: src,
			helpers: x.helpers,
			exports: x.exports,
			safeExports: x.exports.map( function ( exportName ) {
				return exportName.replace( /\./g, '$' );
			}),
			filepath: x.filepath,
			relative: relative
		};

		result = {
			es6: templates.es6( data ),
			cjs: templates.cjs( data )
		};

		return result;
	});
}

function toString ( buffer ) {
	return buffer.toString();
}
