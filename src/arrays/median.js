import { d3_ascending } from './ascending';
import { d3_number, d3_numeric } from '../math/number';
import { d3$quantile } from './quantile';

var d3$median;

d3$median = function(array, f) {
  var numbers = [],
      n = array.length,
      a,
      i = -1;
  if (arguments.length === 1) {
    while (++i < n) if (d3_numeric(a = d3_number(array[i]))) numbers.push(a);
  } else {
    while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) numbers.push(a);
  }
  if (numbers.length) return d3$quantile(numbers.sort(d3_ascending), .5);
};

export { d3$median };