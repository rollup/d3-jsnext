var d3_functor;

function d3_functor(v) {
  return typeof v === "function" ? v : function() { return v; };
}

d3$functor = d3_functor;

export { d3_functor };