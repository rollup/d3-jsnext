import { mouse, range, select, voronoi } from '../../src/index';

var width = 960,
    height = 500;

var vertices = range(100).map(function(d) {
  return [Math.random() * width, Math.random() * height];
});

var layout = voronoi()
    .clipExtent([[0, 0], [width, height]]);

var svg = select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .on("mousemove", function() { vertices[0] = mouse(this); redraw(); });

var path = svg.append("g").selectAll("path");

svg.selectAll("circle")
    .data(vertices.slice(1))
  .enter().append("circle")
    .attr("transform", function(d) { return "translate(" + d + ")"; })
    .attr("r", 1.5);

redraw();

function redraw() {
  path = path
      .data(layout(vertices), polygon);

  path.exit().remove();

  path.enter().append("path")
      .attr("class", function(d, i) { return "q" + (i % 9) + "-9"; })
      .attr("d", polygon);

  path.order();
}

function polygon(d) {
  return "M" + d.join("L") + "Z";
}
