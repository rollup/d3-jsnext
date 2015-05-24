import { d3_selection_each } from './each';
import { d3_selectionPrototype } from './selection';

var undefined;

d3_selectionPrototype.size = function() {
  var n = 0;
  d3_selection_each(this, function() { ++n; });
  return n;
};

export {  };