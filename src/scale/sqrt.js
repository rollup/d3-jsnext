import { d3$scale$pow } from './pow';
import { d3$scale } from './scale';

var d3$scale$sqrt;

d3$scale$sqrt = function() {
  return d3$scale$pow().exponent(.5);
};

export { d3$scale$sqrt };