# d3-jsnext

**[Slides from the Hacks/Hackers NYC talk are here.](https://docs.google.com/presentation/d/1c1ufewQA4RtcQiV1vz1tZGDeA-7yHsrzoxOQiFcBLhY/edit#slide=id.p) (They may not make a great deal of sense without context.)**

Hello! This project is *in no way* ready for public consumption yet - I don't yet even know if it will be possible. I'm just storing it here.

But here's what it's going to be: a modular ES6 version of D3, suitable for use with a futuristic module bundler like [rollup](https://github.com/rollup/rollup).

## Why?

Because most D3 projects only use a tiny fraction of D3's code. It has so much stuff in there - data manipulation, DOM stuff, AJAX, string interpolators, etc, etc... that you just don't need if you only want to (for example) generate a map projection function.

You can build D3 yourself, only including the bits that you need, but... can you really be bothered? And when you decide you want to use another D3 function that isn't in the build, do you waste time rebuilding it, or waste time implementing the function yourself?

Now:

```js
define( function ( require ) {
  var d3 = require( 'd3' );
  var projection = d3.geo.albers();

  // ...
});
```

The future:

```js
import { albers } from 'd3';
var projection = albers();

// ...
```

This is way better, because when you bundle your app, you don't include all the unused gubbins.

TODO before and after comparisons...


## Setting up

```
# Clone this repo and install dependencies
git clone https://github.com/rich-harris/d3-jsnext
cd d3-jsnext
npm i

# Clone d3
git clone https://github.com/mbostock/d3.git

# Install d3's dependencies
cd d3
npm i
```

## Running the code transformation

`cd` into the `d3-jsnext` folder if you're not there already.

```
npm run build
```

This will generate transformed tests and source code in the `test` and `src` folders respectively.

## Running the tests

```
npm test
```

If you have [vows](http://vowsjs.org/) installed globally you can run a subset of the tests - see the vows documentation for details.


## License etc

MIT licensed, yada yada. Oh and I'm [@Rich_Harris](http://twitter.com) on Twitter.
