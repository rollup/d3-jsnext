function d3_functor(v) {
  return typeof v === "function" ? v : function() { return v; };
}



export { d3_functor, d3_functor };