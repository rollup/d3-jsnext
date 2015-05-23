import { d3_selection_each } from '../selection/each';
import { d3_transitionPrototype } from './transition';

d3_transitionPrototype.ease = function(value) {
  var id = this.id, ns = this.namespace;
  if (arguments.length < 1) return this.node()[ns][id].ease;
  if (typeof value !== "function") value = d3$ease$apply(d3, arguments);
  return d3_selection_each(this, function(node) { node[ns][id].ease = value; });
};

export {  };