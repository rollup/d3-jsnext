// @deprecated; use d3.geom.voronoi triangles instead.
var d3$geom$delaunay = function(vertices) {
  return d3.geom.voronoi().triangles(vertices);
};

export { d3$geom$delaunay };