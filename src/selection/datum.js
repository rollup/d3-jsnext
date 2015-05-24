import { d3_selectionPrototype } from './selection';

var undefined;

d3_selectionPrototype.datum = function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.property("__data__");
};

export {  };