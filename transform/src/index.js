var fs = require( 'graceful-fs' ),
	path = require( 'path' ),
	promo = require( 'promo' ),
	Promise = promo.Promise,
	glob = promo( require( 'glob' ) ),
	mkdirp = promo( require( 'mkdirp' ) ),
	debug = require( '../utils/debug' ),

	readFile = promo( fs.readFile ),

	ModuleScanner = require( './ModuleScanner' ),
	ExportGenerator = require( './generators/ExportGenerator' ),
	writeTo = require( '../utils/writeTo' ),

	shared = require( './shared.json' ),
	groupByIdentifier = require( './groupByIdentifier' ),
	confirm = require( './confirm' ),
	generateCjsIndex = require( './generators/cjsIndex' ),
	relative = require( '../utils/relative' ),

	srcDir = path.join( __dirname, '../../d3/src' ),
	destDir = path.join( __dirname, '../../output' );

module.exports = function () {
	glob( path.join( srcDir, ( require('./TEST') ? '*/$test.js' : '*/**/*.js' ) ) ).then( function ( files ) {

		var scanners = [],
			pathsByHelperName,
			pathsByExportName,
			promises,
			scanPromise,
			transformPromise,
			exportPromise;

		// Scan files - parse them, and extract metadata
		promises = files.map( function ( file ) {
			return readFile( file ).then( toString ).then( function ( src ) {
				scanners.push( new ModuleScanner( src, file.replace( srcDir, '' ) ) );
			});
		});

		scanPromise = Promise.all( promises );

		// First, we need to map the entire dependency graph -
		// in other words, we need to find out which file exports
		// which variable. Assume they all begin `d3_` or `d3.`
		pathsByHelperName = {};
		pathsByExportName = {};

		scanPromise.then( function () {
			// Discover exports and helpers
			scanners.forEach( function ( x ) {
				x.helpers.forEach( function ( helperName ) {
					// already exists as something else?
					if ( pathsByHelperName[ helperName ] && pathsByHelperName[ helperName ] !== x.filepath ) {
						console.error( 'already defined in ' + pathsByHelperName[ helperName ] + ': ' + helperName + ' (' + x.filepath + ')' );
					}

					else {
						pathsByHelperName[ helperName ] = x.filepath;
					}
				});

				x.exports.forEach( function ( exportName ) {
					// already exists as something else?
					if ( pathsByExportName[ exportName ] && pathsByExportName[ exportName ] !== x.filepath ) {
						console.error( 'already defined in ' + pathsByExportName[ exportName ] + ': ' + exportName + ' (' + x.filepath + ')' );
					}

					else {
						pathsByExportName[ exportName ] = x.filepath;
					}
				});
			});

			scanners.forEach( function ( x ) {
				x.postprocess( pathsByHelperName, pathsByExportName );
			});
		}).catch( debug );


		// Then, we write files
		transformPromise = scanPromise.then( function () {
			var promises = [];

			// Internal modules (e.g. d3_ascending)
			scanners.forEach( function ( x ) {
				promises.push(
					writeTo( path.join( destDir + '/amd/d3/_/' + x.filepath ) )( x.amd().trim() ),
					writeTo( path.join( destDir + '/cjs/d3/_/' + x.filepath ) )( x.cjs().trim() )
				);
			});

			// Exports (e.g. d3.ascending)
			Object.keys( pathsByExportName ).forEach( function ( exportName ) {
				var generator = new ExportGenerator( exportName, pathsByExportName[ exportName ] );

				promises.push(
					writeTo( path.join( destDir, generator.path( 'amd' ) ) )( generator.amd() ),
					writeTo( path.join( destDir, generator.path( 'cjs' ) ) )( generator.cjs() )
				);
			});

			// Shared properties (e.g. d3.event, TRIG.π)
			Object.keys( groupByIdentifier ).forEach( function ( name ) {
				var group, modulePath, destPath, relativePath;

				if ( /^d3\.[\w\.]+$/.test( name ) ) {
					group = groupByIdentifier[ name ];
					modulePath = name.replace( /\./g, '/' );
					destPath = path.join( destDir, 'cjs/' + modulePath + '.js' );
					relativePath = relative( modulePath, 'd3/_' + group.path.replace( '.js', '' ) );

					promises.push(
						writeTo( destPath )( 'module.exports = require( \'' + relativePath + '\' ).' + name.replace( /\./g, '$' ) + ';' )
					);
				}
			});

			// d3.version
			promises.push(
				writeTo( path.join( destDir, 'cjs/d3/version.js' ) )( 'module.exports = \'' + require( '../../d3/package.json' ).version + '\';' )
			);

			// index files (e.g. d3.behavior - not a method, just groups behavior.drag and behavior.zoom)
			var groups = {};

			Object.keys( pathsByExportName ).forEach( addExport );

			Object.keys( groupByIdentifier ).filter( function ( name ) {
				return /^d3\.[\w\.]+$/.test( name );
			}).forEach( addExport );

			function addExport ( exportName ) {
				var keys, key, parent;

				keys = exportName.split( '.' );

				if ( key = keys.pop() ) {
					parent = keys.join( '.' );

					if ( !groups[ parent ] ) {
						groups[ parent ] = [];
					}

					groups[ parent ].push( key );
				}
			}

			promises = Object.keys( groups ).map( function ( groupName ) {
				var modulePath = groupName.replace( /\./g, '/' );

				return writeTo( path.join( __dirname, '../../output/cjs/' + modulePath + '.js' ) )( generateCjsIndex( groupName.split( '.' ).splice( -1 )[0], groups[ groupName ] ) );
			});

			Object.keys( shared ).forEach( function ( groupName ) {
				var group = shared[ groupName ];
				promises.push(
					writeTo( path.join( __dirname, '../../output/cjs/d3/_' + group.path ) )( 'module.exports = {};' )
				);
			});

			return Promise.all( promises );
		}).catch( debug );

		return transformPromise;
	});
};

function toString ( buffer ) {
	return buffer.toString();
}
