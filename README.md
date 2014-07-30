# modular-d3

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

After cloning this repo and `cd`'ing into it, you need to set up d3 itself:

```
# Clone the repo
git clone https://github.com/mbostock/d3.git

# Install its dependencies
( cd d3; npm i )
```

## Coming soon

MIT licensed, yada yada. Oh and I'm [@Rich_Harris](http://twitter.com) on Twitter.
