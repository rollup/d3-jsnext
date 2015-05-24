var undefined;

function d3_color() {}

d3_color.prototype.toString = function() {
  return this.rgb() + "";
};

export { d3_color };