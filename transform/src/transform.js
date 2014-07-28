var promo = require( 'promo' ),
	Promise = promo.Promise,
	fs = require( 'graceful-fs' ),
	path = require( 'path' ),
	readFile = promo( fs.readFile ),
	_ = require( 'lodash' ),
	debug = require( '../utils/debug' ),
	relative = require( '../utils/relative' ),

	confirm = require( './confirm' ),

	templates = {};

//var sharedPattern = new RegExp( '\\b(?:' + Object.keys( shared ).map( function ( key ) { return key.replace( /\./g, '\\.' ); }).join( '|' ) + ')\\b' );

var templatePromise = Promise.all(
	[ 'es6', 'cjs' ].map( function ( type ) {
		return readFile( path.join( __dirname, 'templates/' + type + '.js' ) )
			.then( toString )
			.then( function ( template ) {
				templates[ type ] = _.template( template );
			});
	})
).catch( debug );

module.exports = function ( x, pathsByHelperName, pathsByExportName ) {
	return templatePromise.then( function () {
		var src,
			srcPath,
			dependencyGroups = {},
			importDeclarations = [],
			imports = '', exports = '', data, result;

		x.dependencies.forEach( function ( dep ) {
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

		if ( importDeclarations.length ) {
			imports = importDeclarations.join( '\n' ) + '\n\n';
		}

		if ( x.helpers.length ) {
			exports = '\n\n' + x.helpers.map( function ( helperName ) {
				return 'export ' + helperName + ';';
			}).join( '\n' );
		}


		// TODO apply these changes to the AST
		src = x.src
			// Replace references to values that are
			// shared between modules
			/*.replace( sharedPattern, function ( match ) {
				return 'shared.' + shared[ match ];
			})*/

			.replace( /d3\.[\w\.]+/g, function ( exportName ) {
				var confirmed = confirm( exportName, x, pathsByHelperName, pathsByExportName );

				if ( !confirmed ) {
					console.log( 'wut? ' + exportName );
					return exportName;
				}

				return confirmed.replace( /\./g, '$' ) + exportName.substring( confirmed.length );
			})

			.replace( /apply\(\s*d3/g, 'apply(null' );

		data = {
			importDeclarations: importDeclarations,
			src: src,
			helpers: x.helpers,
			exports: x.exports,
			safeExports: x.exports.map( function ( exportName ) {
				var confirmed = confirm( exportName, x, pathsByHelperName, pathsByExportName );
				return confirmed.replace( /\./g, '$' ) + exportName.substring( confirmed.length );
			}),
			filepath: x.filepath,
			relative: relative,
			shared: x.shared
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
