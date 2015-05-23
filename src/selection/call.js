import { d3_array } from '../core/array';
import { d3_selectionPrototype } from './selection';

d3_selectionPrototype.call = function(callback) {
  var args = d3_array(arguments);
  callback.apply(args[0] = this, args);
  return this;
};

export {  };