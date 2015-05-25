import { d3$zip } from './zip';

var d3$transpose;

d3$transpose = function(matrix) {
  return d3$zip.apply(d3, matrix);
};

export { d3$transpose };