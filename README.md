# d3-jsnext

**[Slides from the Hacks/Hackers NYC talk are here.](https://docs.google.com/presentation/d/1c1ufewQA4RtcQiV1vz1tZGDeA-7yHsrzoxOQiFcBLhY/edit#slide=id.p) (They may not make a great deal of sense without context.)**

## What is this?

[d3](http://d3js.org/), ported to ES6 modules.

## Why?

Because most d3 projects only use a tiny fraction of d3's code. It has so much stuff in there - data manipulation, DOM stuff, AJAX, string interpolators, etc, etc... that you just don't need if you only want to (for example) generate a map projection function.

You can build d3 yourself, only including the bits that you need, but... can you really be bothered? And when you decide you want to use another d3 function that isn't in the build, do you waste time rebuilding it, or waste time implementing the function yourself?

ES6 modules allow you to selectively import the bits of a library that you actually need.

```js
// Instead of this...
var d3 = require( 'd3' );
var projection = d3.geo.albers();

// ...write this:
import { albers } from 'd3';
var projection = albers();
```

## How does it work?

ES6 modules were designed from the ground for [static analysis](http://en.wikipedia.org/wiki/Static_program_analysis), which lets us determine which bits of a library you're using. (With CommonJS (i.e. node/browserify) and AMD modules, that just isn't possible.)

But you have to use the right tools. [rollup](https://github.com/rollup/rollup) is an ES6 module bundle that's smart enough to only include the right bits of code.


## Does it really make that much difference?

Yes! Minified and gzipped, d3 weighs around **53kb**. An adaptation of the [Voronoi Tesselation example](http://bl.ocks.org/mbostock/4060366) - you can see it [here](https://github.com/rollup/d3-jsnext/tree/master/examples/voronoi) - weighs just **8kb**, including the example code itself. Depending on which of d3's functions you're actually using, the savings can be even more dramatic.


## How do I use it?

Check out the [examples](https://github.com/rollup/d3-jsnext/tree/master/examples) folder to see how to use d3-jsnext. You need to have a build step which takes your source code and bundles it up, but it can be as simple as typing a single command into your terminal. In theory, any ES6-aware module bundler will work, but for best results use [rollup](https://github.com/rollup/rollup).


## Table of import names

With regular d3, functions live in *namespaces*, like `d3.geom.voronoi`. ES6 modules don't work like that - instead, you import from a single namespace:

```js
import { voronoi } from 'd3';
var layout = voronoi()...
```

In most cases, the import name is just the last part of the name as it was before. In a few cases (e.g `d3.svg.line.radial` and `d3.svg.diagonal.radial`) that introduces conflicts, so refer to the following table:

| old                         | new                  |
|-----------------------------|----------------------|
| d3.ascending                | ascending            |
| d3.bisector                 | bisector             |
| d3.bisect                   | bisect               |
| d3.bisectRight              | bisectRight          |
| d3.bisectLeft               | bisectLeft           |
| d3.descending               | descending           |
| d3.deviation                | deviation            |
| d3.entries                  | entries              |
| d3.extent                   | extent               |
| d3.keys                     | keys                 |
| d3.map                      | map                  |
| d3.max                      | max                  |
| d3.mean                     | mean                 |
| d3.median                   | median               |
| d3.merge                    | merge                |
| d3.min                      | min                  |
| d3.nest                     | nest                 |
| d3.pairs                    | pairs                |
| d3.permute                  | permute              |
| d3.quantile                 | quantile             |
| d3.range                    | range                |
| d3.set                      | set                  |
| d3.shuffle                  | shuffle              |
| d3.sum                      | sum                  |
| d3.transpose                | transpose            |
| d3.values                   | values               |
| d3.variance                 | variance             |
| d3.zip                      | zip                  |
| d3.behavior                 | behavior             |
| d3.behavior.drag            | drag                 |
| d3.behavior.zoom            | zoom                 |
| d3.color                    | color                |
| d3.hcl                      | hcl                  |
| d3.hsl                      | hsl                  |
| d3.lab                      | lab                  |
| d3.rgb                      | rgb                  |
| d3.functor                  | functor              |
| d3.ns                       | ns                   |
| d3.rebind                   | rebind               |
| d3.csv                      | csv                  |
| d3.dsv                      | dsv                  |
| d3.tsv                      | tsv                  |
| d3.dispatch                 | dispatch             |
| d3.mouse                    | mouse                |
| d3.timer.flush              | flush                |
| d3.timer                    | timer                |
| d3.touch                    | touch                |
| d3.touches                  | touches              |
| d3.format                   | format               |
| d3.formatPrefix             | formatPrefix         |
| d3.requote                  | requote              |
| d3.round                    | round                |
| d3.geo.albersUsa            | albersUsa            |
| d3.geo.albers               | albers               |
| d3.geo.area                 | geo_area             |
| d3.geo.azimuthalEqualArea   | azimuthalEqualArea   |
| d3.geo.azimuthalEquidistant | azimuthalEquidistant |
| d3.geo.bounds               | bounds               |
| d3.geo.centroid             | centroid             |
| d3.geo.circle               | circle               |
| d3.geo.clipExtent           | clipExtent           |
| d3.geo.conicConformal       | conicConformal       |
| d3.geo.conicEqualArea       | conicEqualArea       |
| d3.geo.conicEquidistant     | conicEquidistant     |
| d3.geo.distance             | distance             |
| d3.geo.equirectangular      | equirectangular      |
| d3.geo                      | geo                  |
| d3.geo.gnomonic             | gnomonic             |
| d3.geo.graticule            | graticule            |
| d3.geo.greatArc             | greatArc             |
| d3.geo.interpolate          | geo_interpolate      |
| d3.geo.length               | length               |
| d3.geo.mercator             | mercator             |
| d3.geo.orthographic         | orthographic         |
| d3.geo.path                 | path                 |
| d3.geo.projectionMutator    | projectionMutator    |
| d3.geo.projection           | projection           |
| d3.geo.rotation             | rotation             |
| d3.geo.stereographic        | stereographic        |
| d3.geo.stream               | stream               |
| d3.geo.transform            | geo_transform        |
| d3.geo.transverseMercator   | transverseMercator   |
| d3.geom.delaunay            | delaunay             |
| d3.geom                     | geom                 |
| d3.geom.hull                | hull                 |
| d3.geom.polygon             | polygon              |
| d3.geom.quadtree            | quadtree             |
| d3.geom.voronoi             | voronoi              |
| d3.interpolateArray         | interpolateArray     |
| d3.ease                     | ease                 |
| d3.interpolateHcl           | interpolateHcl       |
| d3.interpolateHsl           | interpolateHsl       |
| d3.interpolators            | interpolators        |
| d3.interpolate              | interpolate          |
| d3.interpolateLab           | interpolateLab       |
| d3.interpolateNumber        | interpolateNumber    |
| d3.interpolateObject        | interpolateObject    |
| d3.interpolateRgb           | interpolateRgb       |
| d3.interpolateRound         | interpolateRound     |
| d3.interpolateString        | interpolateString    |
| d3.interpolateTransform     | interpolateTransform |
| d3.interpolateZoom          | interpolateZoom      |
| d3.layout.bundle            | bundle               |
| d3.layout.chord             | layout_chord         |
| d3.layout.cluster           | cluster              |
| d3.layout.force             | force                |
| d3.layout.hierarchy         | hierarchy            |
| d3.layout.histogram         | histogram            |
| d3.layout                   | layout               |
| d3.layout.pack              | pack                 |
| d3.layout.partition         | partition            |
| d3.layout.pie               | pie                  |
| d3.layout.stack             | stack                |
| d3.layout.tree              | tree                 |
| d3.layout.treemap           | treemap              |
| d3.locale.ca_ES             | ca_ES                |
| d3.locale.de_DE             | de_DE                |
| d3.locale.en_GB             | en_GB                |
| d3.locale.es_ES             | es_ES                |
| d3.locale.fi_FI             | fi_FI                |
| d3.locale.fr_FR             | fr_FR                |
| d3.locale.he_IL             | he_IL                |
| d3.locale                   | locale               |
| d3.locale.mk_MK             | mk_MK                |
| d3.locale.nl_NL             | nl_NL                |
| d3.locale.pt_BR             | pt_BR                |
| d3.locale.ru_RU             | ru_RU                |
| d3.locale.zh_CN             | zh_CN                |
| d3.random                   | random               |
| d3.transform                | transform            |
| d3.scale.category20c        | category20c          |
| d3.scale.category20b        | category20b          |
| d3.scale.category20         | category20           |
| d3.scale.category10         | category10           |
| d3.scale.identity           | identity             |
| d3.scale.linear             | linear               |
| d3.scale.log                | log                  |
| d3.scale.ordinal            | ordinal              |
| d3.scale.pow                | pow                  |
| d3.scale.quantile           | scale_quantile       |
| d3.scale.quantize           | quantize             |
| d3.scale                    | scale                |
| d3.scale.sqrt               | sqrt                 |
| d3.scale.threshold          | threshold            |
| d3.selectAll                | selectAll            |
| d3.select                   | select               |
| d3.selection.enter          | enter                |
| d3.selection                | selection            |
| d3.svg.arc                  | arc                  |
| d3.svg.area.radial          | area_radial          |
| d3.svg.area                 | svg_area             |
| d3.svg.axis                 | axis                 |
| d3.svg.brush                | brush                |
| d3.svg.chord                | svg_chord            |
| d3.svg.diagonal.radial      | diagonal_radial      |
| d3.svg.diagonal             | diagonal             |
| d3.svg.line.radial          | line_radial          |
| d3.svg.line                 | line                 |
| d3.svg                      | svg                  |
| d3.svg.symbolTypes          | symbolTypes          |
| d3.svg.symbol               | symbol               |
| d3.time                     | time                 |
| d3.transition               | transition           |
| d3.html                     | html                 |
| d3.json                     | json                 |
| d3.text                     | text                 |
| d3.xhr                      | xhr                  |
| d3.xml                      | xml                  |
|-----------------------------|----------------------|


## Building and testing

First, you need a local copy of d3's source code, plus its devDependencies:

```bash
npm run update-d3
```

## Generating the ES6 modules and tests

```
npm run build
```

This will generate transformed tests and source code in the `test` and `src` folders respectively.

## Running the tests

Err... the tests don't *quite* work yet. In progress! (It's tricky, because the test suite makes a number of perfectly justifiable assumptions that no longer hold.)


## License etc

MIT licensed, yada yada. Oh and I'm [@Rich_Harris](http://twitter.com) on Twitter.
