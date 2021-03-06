import { halfπ } from '../math/trigonometry';
import { d3_svg_line, d3$svg$line } from './line';
import { d3$svg } from './svg';

var d3$svg$line$radial;

d3$svg$line$radial = function() {
  var line = d3_svg_line(d3_svg_lineRadial);
  line.radius = line.x, delete line.x;
  line.angle = line.y, delete line.y;
  return line;
};

function d3_svg_lineRadial(points) {
  var point,
      i = -1,
      n = points.length,
      r,
      a;
  while (++i < n) {
    point = points[i];
    r = point[0];
    a = point[1] - halfπ;
    point[0] = r * Math.cos(a);
    point[1] = r * Math.sin(a);
  }
  return points;
}

export { d3$svg$line$radial, d3_svg_lineRadial };