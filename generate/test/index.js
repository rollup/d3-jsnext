import { copydirSync, lsrSync, readFileSync, rimrafSync, writeFileSync } from 'sander';
import { join } from 'path';
import transformTest from './transformTest';

const srcDir = join( __dirname, '../../d3/test' );
const destDir = join( __dirname, '../../test' );

export default function () {
	rimrafSync( destDir );

	var files = lsrSync( srcDir );

	// transform and copy test files
	files.forEach( file => {
		var test = readFileSync( srcDir, file ).toString();
		var transformed = transformTest( test );
		writeFileSync( destDir, file, transformed );
	});

	copydirSync( __dirname, 'root' ).to( destDir );
	copydirSync( srcDir, 'data' ).to( destDir, 'data' );
}
