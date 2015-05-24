process.env.TZ = "America/Los_Angeles";

import jsdom from 'jsdom';
import vm from 'vm';
import path from 'path';

import './XMLHttpRequest';

export default function load ( ...files ) {
    let expression = 'd3';
    let sandbox = { console, Date };

    files = files.map( file => `../src/${file}` );

    console.log( 'loading', files );

    function topic() {
        var callback = this.callback, modulePath, code, result;

        modulePath = '../cjs/' + expression.replace( /\./g, '/' );

        try {
            result = requireAbsolute( path.resolve( __dirname, modulePath ) );
            callback( null, result );
        } catch ( err ) {
            callback( err );
        }
    }

    topic.expression = function(_) {
        expression = _;
        return topic;
    };

    topic.sandbox = function(_) {
        console.log( 'setting sandbox', _ );
        sandbox = _;
        return topic;
    };

    topic.document = function(_) {
        /*var document = jsdom.jsdom("<html><head></head><body></body></html>");

        // Monkey-patch createRange support to JSDOM.
        document.createRange = function() {
            return {
                selectNode: function() {},
                createContextualFragment: jsdom.jsdom
            };
        };

        sandbox = {
            console: console,
            XMLHttpRequest: XMLHttpRequest,
            document: document,
            window: document.createWindow(),
            setTimeout: setTimeout,
            clearTimeout: clearTimeout,
            Date: Date // so we can override Date.now in tests, and use deepEqual
        };*/

        return topic;
    };

    return topic;
};

process.on("uncaughtException", function(e) {
  //console.trace(e.stack);
  throw e;
});
