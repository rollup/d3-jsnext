import { d3_selectionPrototype } from './selection';

var undefined;

d3_selectionPrototype.empty = function() {
  return !this.node();
};

export {  };