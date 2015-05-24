import { d3_selection_each } from '../selection/each';
import { d3_transitionPrototype } from './transition';

var undefined;

d3_transitionPrototype.delay = function(value) {
  var id = this.id, ns = this.namespace;
  if (arguments.length < 1) return this.node()[ns][id].delay;
  return d3_selection_each(this, typeof value === "function"
      ? function(node, i, j) { node[ns][id].delay = +value.call(node, node.__data__, i, j); }
      : (value = +value, function(node) { node[ns][id].delay = value; }));
};

export {  };