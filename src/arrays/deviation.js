var d3$deviation;

d3$deviation = function() {
  var v = d3$variance$apply(this, arguments);
  return v ? Math.sqrt(v) : v;
};

export { d3$deviation };