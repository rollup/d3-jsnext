import { d3_time_scale, d3_time_scaleLocalMethods } from './scale';
import { d3_time } from './time';
import { d3_true } from '../core/true';
import { d3_time_formatUtc } from './format-utc';

var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m) {
  return [m[0].utc, m[1]];
});

var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([
  [".%L", function(d) { return d.getUTCMilliseconds(); }],
  [":%S", function(d) { return d.getUTCSeconds(); }],
  ["%I:%M", function(d) { return d.getUTCMinutes(); }],
  ["%I %p", function(d) { return d.getUTCHours(); }],
  ["%a %d", function(d) { return d.getUTCDay() && d.getUTCDate() != 1; }],
  ["%b %d", function(d) { return d.getUTCDate() != 1; }],
  ["%B", function(d) { return d.getUTCMonth(); }],
  ["%Y", d3_true]
]);

d3_time_scaleUtcMethods.year = d3_time.year.utc;

d3_time.scale.utc = function() {
  return d3_time_scale(d3$scale$linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
};

export {  };