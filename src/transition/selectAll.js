import { d3_transition, d3_transitionNode, d3_transitionPrototype } from './transition';
import { d3_selection_selectorAll } from '../selection/selectAll';

var undefined;

d3_transitionPrototype.selectAll = function(selector) {
  var id = this.id,
      ns = this.namespace,
      subgroups = [],
      subgroup,
      subnodes,
      node,
      subnode,
      transition;

  selector = d3_selection_selectorAll(selector);

  for (var j = -1, m = this.length; ++j < m;) {
    for (var group = this[j], i = -1, n = group.length; ++i < n;) {
      if (node = group[i]) {
        transition = node[ns][id];
        subnodes = selector.call(node, node.__data__, i, j);
        subgroups.push(subgroup = []);
        for (var k = -1, o = subnodes.length; ++k < o;) {
          if (subnode = subnodes[k]) d3_transitionNode(subnode, k, ns, id, transition);
          subgroup.push(subnode);
        }
      }
    }
  }

  return d3_transition(subgroups, ns, id);
};

export {  };