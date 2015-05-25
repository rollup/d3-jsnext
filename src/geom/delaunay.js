import { d3$geom$voronoi } from './voronoi';
import { d3$geom } from './geom';

var d3$geom$delaunay;

// @deprecated; use d3.geom.voronoi triangles instead.
d3$geom$delaunay = function(vertices) {
  return d3$geom$voronoi().triangles(vertices);
};

export { d3$geom$delaunay };