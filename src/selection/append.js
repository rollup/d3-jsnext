import { d3_selectionPrototype } from './selection';

var undefined;

d3_selectionPrototype.append = function(name) {
  name = d3_selection_creator(name);
  return this.select(function() {
    return this.appendChild(name.apply(this, arguments));
  });
};

function d3_selection_creator(name) {

  function create() {
    var document = this.ownerDocument,
        namespace = this.namespaceURI;
    return namespace
        ? document.createElementNS(namespace, name)
        : document.createElement(name);
  }

  function createNS() {
    return this.ownerDocument.createElementNS(name.space, name.local);
  }

  return typeof name === "function" ? name
      : (name = d3$ns$qualify(name)).local ? createNS
      : create;
}

export { d3_selection_creator };