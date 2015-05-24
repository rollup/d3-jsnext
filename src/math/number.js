function d3_number(x) {
  return x === null ? NaN : +x;
}

function d3_numeric(x) {
  return !isNaN(x);
}

export { d3_numeric, d3_number };