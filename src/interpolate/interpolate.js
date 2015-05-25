import { d3_interpolateNumber } from './number';
import { d3_interpolateObject } from './object';
import { d3_interpolateArray } from './array';
import { d3_interpolateRgb } from './rgb';
import { d3_color } from '../color/color';
import { d3_interpolateString } from './string';
import { d3_rgb_names } from '../color/rgb';

var d3$interpolators;
var d3_interpolate;

d3$interpolate = d3_interpolate;

function d3_interpolate(a, b) {
  var i = d3$interpolators.length, f;
  while (--i >= 0 && !(f = d3$interpolators[i](a, b)));
  return f;
}

d3$interpolators = [
  function(a, b) {
    var t = typeof b;
    return (t === "string" ? (d3_rgb_names.has(b) || /^(#|rgb\(|hsl\()/.test(b) ? d3_interpolateRgb : d3_interpolateString)
        : b instanceof d3_color ? d3_interpolateRgb
        : Array.isArray(b) ? d3_interpolateArray
        : t === "object" && isNaN(b) ? d3_interpolateObject
        : d3_interpolateNumber)(a, b);
  }
];

export { d3$interpolators, d3_interpolate };