var d3_interpolateRound;

d3$interpolateRound = d3_interpolateRound;

function d3_interpolateRound(a, b) {
  b -= a;
  return function(t) { return Math.round(a + b * t); };
}

export { d3_interpolateRound };