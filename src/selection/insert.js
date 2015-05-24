import { d3_selection_selector } from './select';
import { d3_selection_creator } from './append';
import { d3_selectionPrototype } from './selection';

var undefined;

d3_selectionPrototype.insert = function(name, before) {
  name = d3_selection_creator(name);
  before = d3_selection_selector(before);
  return this.select(function() {
    return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
  });
};

export {  };