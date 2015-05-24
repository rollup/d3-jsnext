import { d3_rgb_hex } from '../color/rgb';

function d3_interpolateRgb(a, b) {
  a = d3_rgb(a);
  b = d3_rgb(b);
  var ar = a.r,
      ag = a.g,
      ab = a.b,
      br = b.r - ar,
      bg = b.g - ag,
      bb = b.b - ab;
  return function(t) {
    return "#"
        + d3_rgb_hex(Math.round(ar + br * t))
        + d3_rgb_hex(Math.round(ag + bg * t))
        + d3_rgb_hex(Math.round(ab + bb * t));
  };
}

export { d3_interpolateRgb };