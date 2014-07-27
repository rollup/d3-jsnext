var fs = require( 'graceful-fs' ),
	path = require( 'path' ),
	promo = require( 'promo' ),
	Promise = promo.Promise,
	glob = promo( require( 'glob' ) ),
	mkdirp = promo( require( 'mkdirp' ) ),
	debug = require( '../utils/debug' ),

	readFile = promo( fs.readFile ),

	scan = require( './scan' ),
	transform = require( './transform' ),
	writeTo = require( '../utils/writeTo' ),

	shared = require( './shared.json' ),
	confirm = require( './confirm' ),
	generateCjs = require( './generators/cjs' ),
	generateCjsIndex = require( './generators/cjsIndex' ),

	srcDir = path.join( __dirname, '../../d3/src' ),
	destDir = path.join( __dirname, '../../output' );

module.exports = function () {
	glob( path.join( srcDir, '*/**/*.js' ) ).then( function ( files ) {

		var scanned = [],
			pathsByHelperName,
			pathsByExportName,
			promises,
			scanPromise,
			transformPromise,
			exportPromise;

		// Scan files
		promises = files.map( function ( file ) {
			return readFile( file ).then( toString ).then( function ( src ) {
				scanned.push( scan( src, file.replace( srcDir, '' ) ) );
			});
		});

		scanPromise = Promise.all( promises );

		// first, we need to map the entire dependency graph -
		// in other words, we need to find out which file exports
		// which variable. Assume they all begin `d3_` or `d3.`
		pathsByHelperName = {};
		pathsByExportName = {};

		scanPromise.then( function () {
			// Discover exports and helpers
			scanned.forEach( function ( x ) {
				x.helpers.forEach( function ( helperName ) {
					if ( shared[ helperName ] ) {
						// TODO
					}

					// already exists as something else?
					else if ( pathsByHelperName[ helperName ] && pathsByHelperName[ helperName ] !== x.filepath ) {
						//throw new Error( 'already defined in ' + pathsByHelperName[ helperName ] + ': ' + helperName + ' (' + x.filepath + ')' );
						console.error( 'already defined in ' + pathsByHelperName[ helperName ] + ': ' + helperName + ' (' + x.filepath + ')' );
					}

					else {
						pathsByHelperName[ helperName ] = x.filepath;
					}
				});

				x.exports.forEach( function ( exportName ) {
					if ( shared[ exportName ] ) {
						// TODO
					}

					// already exists as something else?
					else if ( pathsByExportName[ exportName ] && pathsByExportName[ exportName ] !== x.filepath ) {
						//throw new Error( 'already defined in ' + pathsByExportName[ exportName ] + ': ' + exportName + ' (' + x.filepath + ')' );
						console.error( 'already defined in ' + pathsByExportName[ exportName ] + ': ' + exportName + ' (' + x.filepath + ')' );
					}

					else {
						pathsByExportName[ exportName ] = x.filepath;
					}
				});
			});

			// Clean up dependencies
			scanned.forEach( function ( x ) {
				var deps = x.dependencies, i = deps.length, dep, index;
				while ( i-- ) {
					dep = confirm( deps[i], x, pathsByHelperName, pathsByExportName );

					if ( !!shared[ dep ] ) {
						dep = null;
						x.usesShared = true;
					}

					if ( !dep ) {
						deps.splice( i, 1 );
					} else {
						deps[i] = dep;
					}
				}
			});
		}).catch( debug );


		// Then, we transform the source of each file
		transformPromise = scanPromise.then( function () {
			return scanned.map( function ( x ) {
				return transform( x, pathsByHelperName, pathsByExportName ).then( function ( transformed ) {
					return Promise.all([
						writeTo( path.join( destDir + '/es6/d3/_/' + x.filepath ) )( transformed.es6.trim() ),
						writeTo( path.join( destDir + '/cjs/d3/_/' + x.filepath ) )( transformed.cjs.trim() )
					]);
				}).catch( debug );
			});
		});


		// Then, we write files corresponding to the API
		exportPromise = transformPromise.then( function () {
			var exportName, srcPath, modulePath, promises = [];

			promises = Object.keys( pathsByExportName ).map( function ( exportName ) {
				var modulePath, srcPath;

				modulePath = exportName.replace( /\./g, '/' );
				srcPath = pathsByExportName[ exportName ];

				return writeTo( path.join( destDir + '/cjs/' + ( modulePath || 'index' ) + '.js' ) )( generateCjs( exportName, srcPath ) );
			});

			return Promise.all( promises );
		}).catch( debug );


		// Finally, we write files that group APIs
		return exportPromise.then( function () {
			var groups = {}, promises;

			Object.keys( pathsByExportName ).forEach( function ( exportName ) {
				var keys, key, parent;

				keys = exportName.split( '.' );

				if ( key = keys.pop() ) {
					parent = keys.join( '.' );

					if ( !groups[ parent ] ) {
						groups[ parent ] = [];
					}

					groups[ parent ].push( key );
				}
			});

			promises = Object.keys( groups ).map( function ( groupName ) {
				var modulePath = groupName.replace( /\./g, '/' );

				/*if ( groupName === '' ) {
					return writeTo( path.join( __dirname, '../../output/index.js' ) )( generateCjsIndex( groupName, groups[ groupName ] ) );
					return;
				}*/

				return writeTo( path.join( __dirname, '../../output/cjs/' + modulePath + '.js' ) )( generateCjsIndex( groupName.split( '.' ).splice( -1 )[0], groups[ groupName ] ) );
			});

			promises.push(
				writeTo( path.join( __dirname, '../../output/cjs/d3/_/_shared.js' ) )( 'module.exports = {};' )
			);

			return Promise.all( promises );
		}).catch( debug );
	});
};





function toString ( buffer ) {
	return buffer.toString();
}
