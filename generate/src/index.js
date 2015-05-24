import { lsrSync, readFileSync, rimrafSync, writeFileSync } from 'sander';
import { basename, dirname, join } from 'path';

import Module from './Module';
import createAlias from './utils/createAlias';

const srcDir = join( __dirname, '../../d3/src' );
const destDir = join( __dirname, '../../src' );

function isExport ( name ) {
	return name.slice( 0, 3 ) === 'd3.';
}

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
	const modules = files.map( file => {
		const src = readFileSync( srcDir, file ).toString();
		return new Module( src, file );
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

	modules.forEach( module => {
		exportNamesByPath[ module.file ] = [];
		internalNamesByPath[ module.file ] = [];

		module.exports.forEach( name => {
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

		writeFileSync( destDir, module.file, rendered );
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
			const relativePath = `./${path.slice( 0, -3 )}`;
			const exports = names.map( name => `${name} as ${name.substring( 3 )}` );

			indexBlock.push( `export { ${exports.join(', ')} } from '${relativePath}';` );
		}
	});

	writeFileSync( destDir, 'index.js', indexBlock.join( '\n' ) );
}
