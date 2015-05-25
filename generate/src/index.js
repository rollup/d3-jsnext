import { lsrSync, readFileSync, rimrafSync, writeFileSync } from 'sander';
import { basename, dirname, join, relative, resolve } from 'path';

import Module from './Module';
import createAlias from './utils/createAlias';
import isExport from './utils/isExport';

const srcDir = resolve( __dirname, '../../d3/src' );
const destDir = resolve( __dirname, '../../src' );

function getExportName ( name ) {
	// TODO
	return name;
}

export default function () {
	rimrafSync( destDir );

	// TODO use a glob pattern instead?
	const blacklisted = {
		'd3.js': true,
		'start.js': true,
		'end.js': true
	};

	const files = lsrSync( srcDir ).filter( file => {
		// skip d3.js, start.js, end.js
		if ( dirname( file ) === '.' ) return false;

		// skip index.js files
		if ( basename( file ) === 'index.js' ) return false;

		return true;
	});
	//const files = lsrSync( srcDir ).filter( file => file.slice( 0, 6 ) === 'arrays' );

	// Scan files - parse them, and extract metadata
	let modules = files.map( file => {
		return new Module( join( srcDir, file ) );
	});

	// First, we need to map the entire dependency graph -
	// in other words, we need to find out which file exports
	// which variable. Assume they all begin `d3_` or `d3.`
	let pathByExportName = {};
	let exportNamesByPath = {};

	let pathByInternalName = {};
	let internalNamesByPath = {};

	let internalNameByExportName = {};
	let exportNameByInternalName = {};

	// First, remove any modules that were already imported into another
	// (i.e. selection prototype stuff)
	let included = {};
	modules.forEach( module => {
		Object.keys( module.included ).forEach( path => included[ path ] = true );
	});

	let i = modules.length;
	while ( i-- ) {
		if ( included[ modules[i].file ] ) {
			modules.splice( i, 1 );
		}
	}

	// Then create a map of which module exports what
	modules.forEach( module => {
		exportNamesByPath[ module.file ] = [];
		internalNamesByPath[ module.file ] = [];

		Object.keys( module.exports ).forEach( name => {
			if ( !!pathByExportName[ name ] ) {
				console.log( 'already exported %s: %s (in %s)', name, pathByExportName[ name ], module.file );
			}

			pathByExportName[ name ] = module.file;
			exportNamesByPath[ module.file ].push( name );
		});

		module.definitions.forEach( name => {
			pathByInternalName[ name ] = module.file;
			internalNamesByPath[ module.file ].push( name );
		});

		Object.keys( module.internalNameByExportName ).forEach( exportName => {
			const internalName = module.internalNameByExportName[ exportName ];

			internalNameByExportName[ exportName ] = internalName;
			exportNameByInternalName[ internalName ] = exportName;
		});
	});

	modules.forEach( module => {
		const rendered = module.render({
			pathByExportName,
			exportNamesByPath,
			pathByInternalName,
			internalNamesByPath,
			internalNameByExportName,
			exportNameByInternalName
		});

		writeFileSync( module.file.replace( srcDir, destDir ), rendered );
	});

	// d3.version. TODO rig this up
	const version = require( '../../d3/package.json' ).version;
	writeFileSync( destDir, 'version.js', `export default '${version}';` );

	// index file
	const indexBlock = [];

	Object.keys( exportNamesByPath ).map( path => {
		const names = exportNamesByPath[ path ]
			.filter( isExport )
			.map( createAlias );

		if ( names.length ) {
			const relativePath = `./${relative( srcDir, path )}`;
			const exports = names.map( name => `${name} as ${name.substring( 3 )}` );

			const declaration = exports.length > 3 ?
				`export {\n  ${exports.join(',\n  ')}\n}` :
				`export { ${exports.join(', ')} }`;

			indexBlock.push( `${declaration} from '${relativePath}';` );
		}
	});

	writeFileSync( destDir, 'index.js', indexBlock.join( '\n' ) );
}
