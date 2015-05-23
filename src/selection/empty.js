import { d3_selectionPrototype } from './selection';

d3_selectionPrototype.empty = function() {
  return !this.node();
};

export {  };