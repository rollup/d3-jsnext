# modular-d3

**[Slides from the Hacks/Hackers NYC talk are here.](https://docs.google.com/presentation/d/1c1ufewQA4RtcQiV1vz1tZGDeA-7yHsrzoxOQiFcBLhY/edit#slide=id.p) (They may not make a great deal of sense without context.)**

Hello! This project is *in no way* ready for public consumption yet - I don't yet even know if it will be possible. I'm just storing it here.

But here's what it's going to be: a suite of micro functions with all of D3's functionality, generated with esprima.

## Why?

Because most D3 projects only use a tiny fraction of D3's code. It has so much stuff in there - data manipulation, DOM stuff, AJAX, string interpolators, etc, etc... that you just don't need if you only want to (for example) generate a map projection function.

You can build D3 yourself, only including the bits that you need, but... can you really be bothered? And when you decide you want to use another D3 function that isn't in the build, do you waste time rebuilding it, or waste time implementing the function yourself?

Now:

```js
define( function ( require ) {
  var d3 = require( 'd3' ),
      projection = d3.geo.albers();

  // ...
});
```

The future:

```js
define( function ( require ) {
  var albers = require( 'd3/geo/albers' ),
      projection = albers();

  // ...
});
```

This is way better because you automatically only load the code you need, and when you build your project with the RequireJS optimiser, everything else is discarded. (And yes, this should work with browserify too...)


## Setting up

```
# Clone this repo and install dependencies
git clone https://github.com/rich-harris/modular-d3
cd modular-d3
npm i

# Clone d3
git clone https://github.com/mbostock/d3.git

# Install d3's dependencies
cd d3
npm i
```

## Running the code transformation

`cd` into the `modular-d3` folder if you're not there already.

```
node transform
```

This will generate transformed tests and source code - they will go in the `output` folder.

## Running the tests

Before you can run the tests you need to install `vows` globally:

```
npm i -g vows
```

Then, `cd` into the `output` folder and run the `vows` command to run all tests.

```
cd output
vows
```

You can also run a subset of tests - consult the [vows documentation](http://vowsjs.org/) for details.


## License etc

MIT licensed, yada yada. Oh and I'm [@Rich_Harris](http://twitter.com) on Twitter.
