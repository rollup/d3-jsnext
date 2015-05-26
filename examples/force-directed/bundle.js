(function () { 'use strict';

    var width = 960,
        height = 500;

    var d3$select;
    var d3$selection;

    var d3_document = window.document;

    d3$selection = function() {
      return d3$select(d3_document.documentElement);
    };

    var d3_selectionPrototype = d3$selection.prototype = [];

    var d3_vendorPrefixes = ["webkit", "ms", "moz", "Moz", "o", "O"];

    function d3_vendorSymbol(object, name) {
      if (name in object) return name;
      name = name.charAt(0).toUpperCase() + name.slice(1);
      for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {
        var prefixName = d3_vendorPrefixes[i] + name;
        if (prefixName in object) return prefixName;
      }
    }

    var d3_select = function(s, n) { return n.querySelector(s); },
        d3_selectAll = function(s, n) { return n.querySelectorAll(s); },
        d3_selectMatches = function(n, s) {
          var d3_selectMatcher = n.matches || n[d3_vendorSymbol(n, "matchesSelector")];
          d3_selectMatches = function(n, s) {
            return d3_selectMatcher.call(n, s);
          };
          return d3_selectMatches(n, s);
        };// Prefer Sizzle, if available.

    if (typeof Sizzle === "function") {
      d3_select = function(s, n) { return Sizzle(s, n)[0] || null; };
      d3_selectAll = Sizzle;
      d3_selectMatches = Sizzle.matchesSelector;
    }

    function d3_selection_selector(selector) {
      return typeof selector === "function" ? selector : function() {
        return d3_select(selector, this);
      };
    }

    d3_selectionPrototype.select = function(selector) {
      var subgroups = [],
          subgroup,
          subnode,
          group,
          node;

      selector = d3_selection_selector(selector);

      for (var j = -1, m = this.length; ++j < m;) {
        subgroups.push(subgroup = []);
        subgroup.parentNode = (group = this[j]).parentNode;
        for (var i = -1, n = group.length; ++i < n;) {
          if (node = group[i]) {
            subgroup.push(subnode = selector.call(node, node.__data__, i, j));
            if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
          } else {
            subgroup.push(null);
          }
        }
      }

      return d3_selection(subgroups);
    };

    var d3_arraySlice = [].slice,
        d3_array = function(list) { return d3_arraySlice.call(list); }; // conversion for NodeLists

    function d3_selection_selectorAll(selector) {
      return typeof selector === "function" ? selector : function() {
        return d3_selectAll(selector, this);
      };
    }

    d3_selectionPrototype.selectAll = function(selector) {
      var subgroups = [],
          subgroup,
          node;

      selector = d3_selection_selectorAll(selector);

      for (var j = -1, m = this.length; ++j < m;) {
        for (var group = this[j], i = -1, n = group.length; ++i < n;) {
          if (node = group[i]) {
            subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
            subgroup.parentNode = node;
          }
        }
      }

      return d3_selection(subgroups);
    };

    var d3$ns;

    var d3_nsPrefix = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: "http://www.w3.org/1999/xhtml",
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    };

    d3$ns = {
      prefix: d3_nsPrefix,
      qualify: function(name) {
        var i = name.indexOf(":"),
            prefix = name;
        if (i >= 0) {
          prefix = name.slice(0, i);
          name = name.slice(i + 1);
        }
        return d3_nsPrefix.hasOwnProperty(prefix)
            ? {space: d3_nsPrefix[prefix], local: name}
            : name;
      }
    };

    function d3_selection_attr(name, value) {
      name = d3$ns.qualify(name);

      // For attr(string, null), remove the attribute with the specified name.
      function attrNull() {
        this.removeAttribute(name);
      }
      function attrNullNS() {
        this.removeAttributeNS(name.space, name.local);
      }

      // For attr(string, string), set the attribute with the specified name.
      function attrConstant() {
        this.setAttribute(name, value);
      }
      function attrConstantNS() {
        this.setAttributeNS(name.space, name.local, value);
      }

      // For attr(string, function), evaluate the function for each element, and set
      // or remove the attribute as appropriate.
      function attrFunction() {
        var x = value.apply(this, arguments);
        if (x == null) this.removeAttribute(name);
        else this.setAttribute(name, x);
      }
      function attrFunctionNS() {
        var x = value.apply(this, arguments);
        if (x == null) this.removeAttributeNS(name.space, name.local);
        else this.setAttributeNS(name.space, name.local, x);
      }

      return value == null
          ? (name.local ? attrNullNS : attrNull) : (typeof value === "function"
          ? (name.local ? attrFunctionNS : attrFunction)
          : (name.local ? attrConstantNS : attrConstant));
    }

    d3_selectionPrototype.attr = function(name, value) {
      if (arguments.length < 2) {

        // For attr(string), return the attribute value for the first node.
        if (typeof name === "string") {
          var node = this.node();
          name = d3$ns.qualify(name);
          return name.local
              ? node.getAttributeNS(name.space, name.local)
              : node.getAttribute(name);
        }

        // For attr(object), the object specifies the names and values of the
        // attributes to set or remove. The values may be functions that are
        // evaluated for each element.
        for (value in name) this.each(d3_selection_attr(value, name[value]));
        return this;
      }

      return this.each(d3_selection_attr(name, value));
    };

    function d3_collapse(s) {
      return s.trim().replace(/\s+/g, " ");
    }

    var d3$requote;

    var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

    d3$requote = function(s) {
      return s.replace(d3_requote_re, "\\$&");
    };

    function d3_selection_classedRe(name) {
      return new RegExp("(?:^|\\s+)" + d3$requote(name) + "(?:\\s+|$)", "g");
    }

    function d3_selection_classedName(name) {
      var re = d3_selection_classedRe(name);
      return function(node, value) {
        if (c = node.classList) return value ? c.add(name) : c.remove(name);
        var c = node.getAttribute("class") || "";
        if (value) {
          re.lastIndex = 0;
          if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name));
        } else {
          node.setAttribute("class", d3_collapse(c.replace(re, " ")));
        }
      };
    }

    function d3_selection_classes(name) {
      return (name + "").trim().split(/^|\s+/);
    }// Multiple class names are allowed (e.g., "foo bar").

    function d3_selection_classed(name, value) {
      name = d3_selection_classes(name).map(d3_selection_classedName);
      var n = name.length;

      function classedConstant() {
        var i = -1;
        while (++i < n) name[i](this, value);
      }

      // When the value is a function, the function is still evaluated only once per
      // element even if there are multiple class names.
      function classedFunction() {
        var i = -1, x = value.apply(this, arguments);
        while (++i < n) name[i](this, x);
      }

      return typeof value === "function"
          ? classedFunction
          : classedConstant;
    }

    d3_selectionPrototype.classed = function(name, value) {
      if (arguments.length < 2) {

        // For classed(string), return true only if the first node has the specified
        // class or classes. Note that even if the browser supports DOMTokenList, it
        // probably doesn't support it on SVG elements (which can be animated).
        if (typeof name === "string") {
          var node = this.node(),
              n = (name = d3_selection_classes(name)).length,
              i = -1;
          if (value = node.classList) {
            while (++i < n) if (!value.contains(name[i])) return false;
          } else {
            value = node.getAttribute("class");
            while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
          }
          return true;
        }

        // For classed(object), the object specifies the names of classes to add or
        // remove. The values may be functions that are evaluated for each element.
        for (value in name) this.each(d3_selection_classed(value, name[value]));
        return this;
      }

      // Otherwise, both a name and a value are specified, and are handled as below.
      return this.each(d3_selection_classed(name, value));
    };

    function d3_selection_style(name, value, priority) {

      // For style(name, null) or style(name, null, priority), remove the style
      // property with the specified name. The priority is ignored.
      function styleNull() {
        this.style.removeProperty(name);
      }

      // For style(name, string) or style(name, string, priority), set the style
      // property with the specified name, using the specified priority.
      function styleConstant() {
        this.style.setProperty(name, value, priority);
      }

      // For style(name, function) or style(name, function, priority), evaluate the
      // function for each element, and set or remove the style property as
      // appropriate. When setting, use the specified priority.
      function styleFunction() {
        var x = value.apply(this, arguments);
        if (x == null) this.style.removeProperty(name);
        else this.style.setProperty(name, x, priority);
      }

      return value == null
          ? styleNull : (typeof value === "function"
          ? styleFunction : styleConstant);
    }

    function d3_window(node) {
      return node
          && ((node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
            || (node.document && node) // node is a Window
            || node.defaultView); // node is a Document
    }

    d3_selectionPrototype.style = function(name, value, priority) {
      var n = arguments.length;
      if (n < 3) {

        // For style(object) or style(object, string), the object specifies the
        // names and values of the attributes to set or remove. The values may be
        // functions that are evaluated for each element. The optional string
        // specifies the priority.
        if (typeof name !== "string") {
          if (n < 2) value = "";
          for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
          return this;
        }

        // For style(string), return the computed style value for the first node.
        if (n < 2) {
          var node = this.node();
          return d3_window(node).getComputedStyle(node, null).getPropertyValue(name);
        }

        // For style(string, string) or style(string, function), use the default
        // priority. The priority is ignored for style(string, null).
        priority = "";
      }

      // Otherwise, a name, value and priority are specified, and handled as below.
      return this.each(d3_selection_style(name, value, priority));
    };

    function d3_selection_property(name, value) {

      // For property(name, null), remove the property with the specified name.
      function propertyNull() {
        delete this[name];
      }

      // For property(name, string), set the property with the specified name.
      function propertyConstant() {
        this[name] = value;
      }

      // For property(name, function), evaluate the function for each element, and
      // set or remove the property as appropriate.
      function propertyFunction() {
        var x = value.apply(this, arguments);
        if (x == null) delete this[name];
        else this[name] = x;
      }

      return value == null
          ? propertyNull : (typeof value === "function"
          ? propertyFunction : propertyConstant);
    }

    d3_selectionPrototype.property = function(name, value) {
      if (arguments.length < 2) {

        // For property(string), return the property value for the first node.
        if (typeof name === "string") return this.node()[name];

        // For property(object), the object specifies the names and values of the
        // properties to set or remove. The values may be functions that are
        // evaluated for each element.
        for (value in name) this.each(d3_selection_property(value, name[value]));
        return this;
      }

      // Otherwise, both a name and a value are specified, and are handled as below.
      return this.each(d3_selection_property(name, value));
    };

    d3_selectionPrototype.text = function(value) {
      return arguments.length
          ? this.each(typeof value === "function"
          ? function() { var v = value.apply(this, arguments); this.textContent = v == null ? "" : v; } : value == null
          ? function() { this.textContent = ""; }
          : function() { this.textContent = value; })
          : this.node().textContent;
    };

    d3_selectionPrototype.html = function(value) {
      return arguments.length
          ? this.each(typeof value === "function"
          ? function() { var v = value.apply(this, arguments); this.innerHTML = v == null ? "" : v; } : value == null
          ? function() { this.innerHTML = ""; }
          : function() { this.innerHTML = value; })
          : this.node().innerHTML;
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
          : (name = d3$ns.qualify(name)).local ? createNS
          : create;
    }

    d3_selectionPrototype.append = function(name) {
      name = d3_selection_creator(name);
      return this.select(function() {
        return this.appendChild(name.apply(this, arguments));
      });
    };

    d3_selectionPrototype.insert = function(name, before) {
      name = d3_selection_creator(name);
      before = d3_selection_selector(before);
      return this.select(function() {
        return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
      });
    };

    function d3_selectionRemove() {
      var parent = this.parentNode;
      if (parent) parent.removeChild(this);
    }// TODO remove(selector)?
    // TODO remove(node)?
    // TODO remove(function)?

    d3_selectionPrototype.remove = function() {
      return this.each(d3_selectionRemove);
    };

    var d3_selection_enterPrototype = [];

    d3_selection_enterPrototype.append = d3_selectionPrototype.append;
    d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
    d3_selection_enterPrototype.node = d3_selectionPrototype.node;
    d3_selection_enterPrototype.call = d3_selectionPrototype.call;
    d3_selection_enterPrototype.size = d3_selectionPrototype.size;

    d3_selection_enterPrototype.select = function(selector) {
      var subgroups = [],
          subgroup,
          subnode,
          upgroup,
          group,
          node;

      for (var j = -1, m = this.length; ++j < m;) {
        upgroup = (group = this[j]).update;
        subgroups.push(subgroup = []);
        subgroup.parentNode = group.parentNode;
        for (var i = -1, n = group.length; ++i < n;) {
          if (node = group[i]) {
            subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
            subnode.__data__ = node.__data__;
          } else {
            subgroup.push(null);
          }
        }
      }

      return d3_selection(subgroups);
    };

    function d3_selection_enterInsertBefore(enter) {
      var i0, j0;
      return function(d, i, j) {
        var group = enter[j].update,
            n = group.length,
            node;
        if (j != j0) j0 = j, i0 = 0;
        if (i >= i0) i0 = i + 1;
        while (!(node = group[i0]) && ++i0 < n);
        return node;
      };
    }


    d3_selection_enterPrototype.insert = function(name, before) {
      if (arguments.length < 2) before = d3_selection_enterInsertBefore(this);
      return d3_selectionPrototype.insert.call(this, name, before);
    };

    var d3_subclass = {}.__proto__?

    // Until ECMAScript supports array subclassing, prototype injection works well.
    function(object, prototype) {
      object.__proto__ = prototype;
    }:

    // And if your browser doesn't support __proto__, we'll use direct extension.
    function(object, prototype) {
      for (var property in prototype) object[property] = prototype[property];
    };

    function d3_selection_enter(selection) {
      d3_subclass(selection, d3_selection_enterPrototype);
      return selection;
    }

    function d3_selection_dataNode(data) {
      return {__data__: data};
    }

    function d3_Map() {
      this._ = Object.create(null);
    }

    var d3_map_proto = "__proto__",
        d3_map_zero = "\0";

    function d3_map_unescape(key) {
      return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
    }

    function d3_map_empty() {
      for (var key in this._) return false;
      return true;
    }

    function d3_map_size() {
      var size = 0;
      for (var key in this._) ++size;
      return size;
    }

    function d3_map_keys() {
      var keys = [];
      for (var key in this._) keys.push(d3_map_unescape(key));
      return keys;
    }

    function d3_map_escape(key) {
      return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
    }

    function d3_map_remove(key) {
      return (key = d3_map_escape(key)) in this._ && delete this._[key];
    }

    function d3_map_has(key) {
      return d3_map_escape(key) in this._;
    }

    function d3_class(ctor, properties) {
      for (var key in properties) {
        Object.defineProperty(ctor.prototype, key, {
          value: properties[key],
          enumerable: false
        });
      }
    }

    d3_class(d3_Map, {
      has: d3_map_has,
      get: function(key) {
        return this._[d3_map_escape(key)];
      },
      set: function(key, value) {
        return this._[d3_map_escape(key)] = value;
      },
      remove: d3_map_remove,
      keys: d3_map_keys,
      values: function() {
        var values = [];
        for (var key in this._) values.push(this._[key]);
        return values;
      },
      entries: function() {
        var entries = [];
        for (var key in this._) entries.push({key: d3_map_unescape(key), value: this._[key]});
        return entries;
      },
      size: d3_map_size,
      empty: d3_map_empty,
      forEach: function(f) {
        for (var key in this._) f.call(this, d3_map_unescape(key), this._[key]);
      }
    });

    d3_selectionPrototype.data = function(value, key) {
      var i = -1,
          n = this.length,
          group,
          node;

      // If no value is specified, return the first value.
      if (!arguments.length) {
        value = new Array(n = (group = this[0]).length);
        while (++i < n) {
          if (node = group[i]) {
            value[i] = node.__data__;
          }
        }
        return value;
      }

      function bind(group, groupData) {
        var i,
            n = group.length,
            m = groupData.length,
            n0 = Math.min(n, m),
            updateNodes = new Array(m),
            enterNodes = new Array(m),
            exitNodes = new Array(n),
            node,
            nodeData;

        if (key) {
          var nodeByKeyValue = new d3_Map,
              keyValues = new Array(n),
              keyValue;

          for (i = -1; ++i < n;) {
            if (nodeByKeyValue.has(keyValue = key.call(node = group[i], node.__data__, i))) {
              exitNodes[i] = node; // duplicate selection key
            } else {
              nodeByKeyValue.set(keyValue, node);
            }
            keyValues[i] = keyValue;
          }

          for (i = -1; ++i < m;) {
            if (!(node = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i], i)))) {
              enterNodes[i] = d3_selection_dataNode(nodeData);
            } else if (node !== true) { // no duplicate data key
              updateNodes[i] = node;
              node.__data__ = nodeData;
            }
            nodeByKeyValue.set(keyValue, true);
          }

          for (i = -1; ++i < n;) {
            if (nodeByKeyValue.get(keyValues[i]) !== true) {
              exitNodes[i] = group[i];
            }
          }
        } else {
          for (i = -1; ++i < n0;) {
            node = group[i];
            nodeData = groupData[i];
            if (node) {
              node.__data__ = nodeData;
              updateNodes[i] = node;
            } else {
              enterNodes[i] = d3_selection_dataNode(nodeData);
            }
          }
          for (; i < m; ++i) {
            enterNodes[i] = d3_selection_dataNode(groupData[i]);
          }
          for (; i < n; ++i) {
            exitNodes[i] = group[i];
          }
        }

        enterNodes.update
            = updateNodes;

        enterNodes.parentNode
            = updateNodes.parentNode
            = exitNodes.parentNode
            = group.parentNode;

        enter.push(enterNodes);
        update.push(updateNodes);
        exit.push(exitNodes);
      }

      var enter = d3_selection_enter([]),
          update = d3_selection([]),
          exit = d3_selection([]);

      if (typeof value === "function") {
        while (++i < n) {
          bind(group = this[i], value.call(group, group.parentNode.__data__, i));
        }
      } else {
        while (++i < n) {
          bind(group = this[i], value);
        }
      }

      update.enter = function() { return enter; };
      update.exit = function() { return exit; };
      return update;
    };

    d3_selectionPrototype.datum = function(value) {
      return arguments.length
          ? this.property("__data__", value)
          : this.property("__data__");
    };

    function d3_selection_filter(selector) {
      return function() {
        return d3_selectMatches(this, selector);
      };
    }

    d3_selectionPrototype.filter = function(filter) {
      var subgroups = [],
          subgroup,
          group,
          node;

      if (typeof filter !== "function") filter = d3_selection_filter(filter);

      for (var j = 0, m = this.length; j < m; j++) {
        subgroups.push(subgroup = []);
        subgroup.parentNode = (group = this[j]).parentNode;
        for (var i = 0, n = group.length; i < n; i++) {
          if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
            subgroup.push(node);
          }
        }
      }

      return d3_selection(subgroups);
    };

    d3_selectionPrototype.order = function() {
      for (var j = -1, m = this.length; ++j < m;) {
        for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
          if (node = group[i]) {
            if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
            next = node;
          }
        }
      }
      return this;
    };

    function d3_ascending(a, b) {
      return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    }

    function d3_selection_sortComparator(comparator) {
      if (!arguments.length) comparator = d3_ascending;
      return function(a, b) {
        return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
      };
    }

    d3_selectionPrototype.sort = function(comparator) {
      comparator = d3_selection_sortComparator.apply(this, arguments);
      for (var j = -1, m = this.length; ++j < m;) this[j].sort(comparator);
      return this.order();
    };

    function d3_noop() {}

    function d3_selection_onListener(listener, argumentz) {
      return function(e) {
        var o = window.d3_event; // Events can be reentrant (e.g., focus).
        window.d3_event = e;
        argumentz[0] = this.__data__;
        try {
          listener.apply(this, argumentz);
        } finally {
          window.d3_event = o;
        }
      };
    }

    function d3_selection_onFilter(listener, argumentz) {
      var l = d3_selection_onListener(listener, argumentz);
      return function(e) {
        var target = this, related = e.relatedTarget;
        if (!related || (related !== target && !(related.compareDocumentPosition(target) & 8))) {
          l.call(target, e);
        }
      };
    }

    var d3$map;

    d3$map = function(object, f) {
      var map = new d3_Map;
      if (object instanceof d3_Map) {
        object.forEach(function(key, value) { map.set(key, value); });
      } else if (Array.isArray(object)) {
        var i = -1,
            n = object.length,
            o;
        if (arguments.length === 1) while (++i < n) map.set(i, object[i]);
        else while (++i < n) map.set(f.call(object, o = object[i], i), o);
      } else {
        for (var key in object) map.set(key, object[key]);
      }
      return map;
    };

    var d3_selection_onFilters = d3$map({
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    });

    function d3_selection_on(type, listener, capture) {
      var name = "__on" + type,
          i = type.indexOf("."),
          wrap = d3_selection_onListener;

      if (i > 0) type = type.slice(0, i);
      var filter = d3_selection_onFilters.get(type);
      if (filter) type = filter, wrap = d3_selection_onFilter;

      function onRemove() {
        var l = this[name];
        if (l) {
          this.removeEventListener(type, l, l.$);
          delete this[name];
        }
      }

      function onAdd() {
        var l = wrap(listener, d3_array(arguments));
        onRemove.call(this);
        this.addEventListener(type, this[name] = l, l.$ = capture);
        l._ = listener;
      }

      function removeAll() {
        var re = new RegExp("^__on([^.]+)" + d3$requote(type) + "$"),
            match;
        for (var name in this) {
          if (match = name.match(re)) {
            var l = this[name];
            this.removeEventListener(match[1], l, l.$);
            delete this[name];
          }
        }
      }

      return i
          ? listener ? onAdd : onRemove
          : listener ? d3_noop : removeAll;
    }

    d3_selectionPrototype.on = function(type, listener, capture) {
      var n = arguments.length;
      if (n < 3) {

        // For on(object) or on(object, boolean), the object specifies the event
        // types and listeners to add or remove. The optional boolean specifies
        // whether the listener captures events.
        if (typeof type !== "string") {
          if (n < 2) listener = false;
          for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
          return this;
        }

        // For on(string), return the listener for the first node.
        if (n < 2) return (n = this.node()["__on" + type]) && n._;

        // For on(string, function), use the default capture.
        capture = false;
      }

      // Otherwise, a type, listener and capture are specified, and handled as below.
      return this.each(d3_selection_on(type, listener, capture));
    };

    function d3_selection_each(groups, callback) {
      for (var j = 0, m = groups.length; j < m; j++) {
        for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
          if (node = group[i]) callback(node, i, j);
        }
      }
      return groups;
    }

    d3_selectionPrototype.each = function(callback) {
      return d3_selection_each(this, function(node, i, j) {
        callback.call(node, node.__data__, i, j);
      });
    };

    d3_selectionPrototype.call = function(callback) {
      var args = d3_array(arguments);
      callback.apply(args[0] = this, args);
      return this;
    };

    d3_selectionPrototype.empty = function() {
      return !this.node();
    };

    d3_selectionPrototype.node = function() {
      for (var j = 0, m = this.length; j < m; j++) {
        for (var group = this[j], i = 0, n = group.length; i < n; i++) {
          var node = group[i];
          if (node) return node;
        }
      }
      return null;
    };

    d3_selectionPrototype.size = function() {
      var n = 0;
      d3_selection_each(this, function() { ++n; });
      return n;
    };

    function d3_selection(groups) {
      d3_subclass(groups, d3_selectionPrototype);
      return groups;
    }

    function d3_documentElement(node) {
      return node
          && (node.ownerDocument // node is a Node
          || node.document // node is a Window
          || node).documentElement; // node is a Document
    }// TODO fast singleton implementation?


    d3$select = function(node) {
      var group;
      if (typeof node === "string") {
        group = [d3_select(node, d3_document)];
        group.parentNode = d3_document.documentElement;
      } else {
        group = [node];
        group.parentNode = d3_documentElement(node);
      }
      return d3_selection([group]);
    };

    var d3$scale$category20;

    function d3_hsl_rgb(h, s, l) {
      var m1,
          m2;

      /* Some simple corrections for h, s and l. */
      h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
      s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
      l = l < 0 ? 0 : l > 1 ? 1 : l;

      /* From FvD 13.37, CSS Color Module Level 3 */
      m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
      m1 = 2 * l - m2;

      function v(h) {
        if (h > 360) h -= 360;
        else if (h < 0) h += 360;
        if (h < 60) return m1 + (m2 - m1) * h / 60;
        if (h < 180) return m2;
        if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
        return m1;
      }

      function vv(h) {
        return Math.round(v(h) * 255);
      }

      return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
    }

    var d3_rgb_names = d3$map({
      aliceblue: 0xf0f8ff,
      antiquewhite: 0xfaebd7,
      aqua: 0x00ffff,
      aquamarine: 0x7fffd4,
      azure: 0xf0ffff,
      beige: 0xf5f5dc,
      bisque: 0xffe4c4,
      black: 0x000000,
      blanchedalmond: 0xffebcd,
      blue: 0x0000ff,
      blueviolet: 0x8a2be2,
      brown: 0xa52a2a,
      burlywood: 0xdeb887,
      cadetblue: 0x5f9ea0,
      chartreuse: 0x7fff00,
      chocolate: 0xd2691e,
      coral: 0xff7f50,
      cornflowerblue: 0x6495ed,
      cornsilk: 0xfff8dc,
      crimson: 0xdc143c,
      cyan: 0x00ffff,
      darkblue: 0x00008b,
      darkcyan: 0x008b8b,
      darkgoldenrod: 0xb8860b,
      darkgray: 0xa9a9a9,
      darkgreen: 0x006400,
      darkgrey: 0xa9a9a9,
      darkkhaki: 0xbdb76b,
      darkmagenta: 0x8b008b,
      darkolivegreen: 0x556b2f,
      darkorange: 0xff8c00,
      darkorchid: 0x9932cc,
      darkred: 0x8b0000,
      darksalmon: 0xe9967a,
      darkseagreen: 0x8fbc8f,
      darkslateblue: 0x483d8b,
      darkslategray: 0x2f4f4f,
      darkslategrey: 0x2f4f4f,
      darkturquoise: 0x00ced1,
      darkviolet: 0x9400d3,
      deeppink: 0xff1493,
      deepskyblue: 0x00bfff,
      dimgray: 0x696969,
      dimgrey: 0x696969,
      dodgerblue: 0x1e90ff,
      firebrick: 0xb22222,
      floralwhite: 0xfffaf0,
      forestgreen: 0x228b22,
      fuchsia: 0xff00ff,
      gainsboro: 0xdcdcdc,
      ghostwhite: 0xf8f8ff,
      gold: 0xffd700,
      goldenrod: 0xdaa520,
      gray: 0x808080,
      green: 0x008000,
      greenyellow: 0xadff2f,
      grey: 0x808080,
      honeydew: 0xf0fff0,
      hotpink: 0xff69b4,
      indianred: 0xcd5c5c,
      indigo: 0x4b0082,
      ivory: 0xfffff0,
      khaki: 0xf0e68c,
      lavender: 0xe6e6fa,
      lavenderblush: 0xfff0f5,
      lawngreen: 0x7cfc00,
      lemonchiffon: 0xfffacd,
      lightblue: 0xadd8e6,
      lightcoral: 0xf08080,
      lightcyan: 0xe0ffff,
      lightgoldenrodyellow: 0xfafad2,
      lightgray: 0xd3d3d3,
      lightgreen: 0x90ee90,
      lightgrey: 0xd3d3d3,
      lightpink: 0xffb6c1,
      lightsalmon: 0xffa07a,
      lightseagreen: 0x20b2aa,
      lightskyblue: 0x87cefa,
      lightslategray: 0x778899,
      lightslategrey: 0x778899,
      lightsteelblue: 0xb0c4de,
      lightyellow: 0xffffe0,
      lime: 0x00ff00,
      limegreen: 0x32cd32,
      linen: 0xfaf0e6,
      magenta: 0xff00ff,
      maroon: 0x800000,
      mediumaquamarine: 0x66cdaa,
      mediumblue: 0x0000cd,
      mediumorchid: 0xba55d3,
      mediumpurple: 0x9370db,
      mediumseagreen: 0x3cb371,
      mediumslateblue: 0x7b68ee,
      mediumspringgreen: 0x00fa9a,
      mediumturquoise: 0x48d1cc,
      mediumvioletred: 0xc71585,
      midnightblue: 0x191970,
      mintcream: 0xf5fffa,
      mistyrose: 0xffe4e1,
      moccasin: 0xffe4b5,
      navajowhite: 0xffdead,
      navy: 0x000080,
      oldlace: 0xfdf5e6,
      olive: 0x808000,
      olivedrab: 0x6b8e23,
      orange: 0xffa500,
      orangered: 0xff4500,
      orchid: 0xda70d6,
      palegoldenrod: 0xeee8aa,
      palegreen: 0x98fb98,
      paleturquoise: 0xafeeee,
      palevioletred: 0xdb7093,
      papayawhip: 0xffefd5,
      peachpuff: 0xffdab9,
      peru: 0xcd853f,
      pink: 0xffc0cb,
      plum: 0xdda0dd,
      powderblue: 0xb0e0e6,
      purple: 0x800080,
      rebeccapurple: 0x663399,
      red: 0xff0000,
      rosybrown: 0xbc8f8f,
      royalblue: 0x4169e1,
      saddlebrown: 0x8b4513,
      salmon: 0xfa8072,
      sandybrown: 0xf4a460,
      seagreen: 0x2e8b57,
      seashell: 0xfff5ee,
      sienna: 0xa0522d,
      silver: 0xc0c0c0,
      skyblue: 0x87ceeb,
      slateblue: 0x6a5acd,
      slategray: 0x708090,
      slategrey: 0x708090,
      snow: 0xfffafa,
      springgreen: 0x00ff7f,
      steelblue: 0x4682b4,
      tan: 0xd2b48c,
      teal: 0x008080,
      thistle: 0xd8bfd8,
      tomato: 0xff6347,
      turquoise: 0x40e0d0,
      violet: 0xee82ee,
      wheat: 0xf5deb3,
      white: 0xffffff,
      whitesmoke: 0xf5f5f5,
      yellow: 0xffff00,
      yellowgreen: 0x9acd32
    });

    function d3_rgb_parseNumber(c) { // either integer or percentage
      var f = parseFloat(c);
      return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
    }

    function d3_rgb_parse(format, rgb, hsl) {
      var r = 0, // red channel; int in [0, 255]
          g = 0, // green channel; int in [0, 255]
          b = 0, // blue channel; int in [0, 255]
          m1, // CSS color specification match
          m2, // CSS color specification type (e.g., rgb)
          color;

      /* Handle hsl, rgb. */
      m1 = /([a-z]+)\((.*)\)/i.exec(format);
      if (m1) {
        m2 = m1[2].split(",");
        switch (m1[1]) {
          case "hsl": {
            return hsl(
              parseFloat(m2[0]), // degrees
              parseFloat(m2[1]) / 100, // percentage
              parseFloat(m2[2]) / 100 // percentage
            );
          }
          case "rgb": {
            return rgb(
              d3_rgb_parseNumber(m2[0]),
              d3_rgb_parseNumber(m2[1]),
              d3_rgb_parseNumber(m2[2])
            );
          }
        }
      }

      /* Named colors. */
      if (color = d3_rgb_names.get(format.toLowerCase())) {
        return rgb(color.r, color.g, color.b);
      }

      /* Hexadecimal colors: #rgb and #rrggbb. */
      if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.slice(1), 16))) {
        if (format.length === 4) {
          r = (color & 0xf00) >> 4; r = (r >> 4) | r;
          g = (color & 0xf0); g = (g >> 4) | g;
          b = (color & 0xf); b = (b << 4) | b;
        } else if (format.length === 7) {
          r = (color & 0xff0000) >> 16;
          g = (color & 0xff00) >> 8;
          b = (color & 0xff);
        }
      }

      return rgb(r, g, b);
    }

    function d3_rgb(r, g, b) {
      return this instanceof d3_rgb ? void (this.r = ~~r, this.g = ~~g, this.b = ~~b)
          : arguments.length < 2 ? (r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b)
          : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb))
          : new d3_rgb(r, g, b);
    }

    function d3_color() {}

    d3_color.prototype.toString = function() {
      return this.rgb() + "";
    };

    var d3_rgbPrototype = d3_rgb.prototype = new d3_color;

    d3_rgbPrototype.brighter = function(k) {
      k = Math.pow(0.7, arguments.length ? k : 1);
      var r = this.r,
          g = this.g,
          b = this.b,
          i = 30;
      if (!r && !g && !b) return new d3_rgb(i, i, i);
      if (r && r < i) r = i;
      if (g && g < i) g = i;
      if (b && b < i) b = i;
      return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));
    };

    d3_rgbPrototype.darker = function(k) {
      k = Math.pow(0.7, arguments.length ? k : 1);
      return new d3_rgb(k * this.r, k * this.g, k * this.b);
    };

    function d3_hsl(h, s, l) {
      return this instanceof d3_hsl ? void (this.h = +h, this.s = +s, this.l = +l)
          : arguments.length < 2 ? (h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l)
          : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl))
          : new d3_hsl(h, s, l);
    }

    var d3_hslPrototype = d3_hsl.prototype = new d3_color;

    d3_hslPrototype.brighter = function(k) {
      k = Math.pow(0.7, arguments.length ? k : 1);
      return new d3_hsl(this.h, this.s, this.l / k);
    };

    d3_hslPrototype.darker = function(k) {
      k = Math.pow(0.7, arguments.length ? k : 1);
      return new d3_hsl(this.h, this.s, k * this.l);
    };

    d3_hslPrototype.rgb = function() {
      return d3_hsl_rgb(this.h, this.s, this.l);
    };

    function d3_rgb_hsl(r, g, b) {
      var min = Math.min(r /= 255, g /= 255, b /= 255),
          max = Math.max(r, g, b),
          d = max - min,
          h,
          s,
          l = (max + min) / 2;
      if (d) {
        s = l < .5 ? d / (max + min) : d / (2 - max - min);
        if (r == max) h = (g - b) / d + (g < b ? 6 : 0);
        else if (g == max) h = (b - r) / d + 2;
        else h = (r - g) / d + 4;
        h *= 60;
      } else {
        h = NaN;
        s = l > 0 && l < 1 ? 0 : h;
      }
      return new d3_hsl(h, s, l);
    }

    d3_rgbPrototype.hsl = function() {
      return d3_rgb_hsl(this.r, this.g, this.b);
    };

    function d3_rgb_hex(v) {
      return v < 0x10
          ? "0" + Math.max(0, v).toString(16)
          : Math.min(255, v).toString(16);
    }

    d3_rgbPrototype.toString = function() {
      return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
    };

    function d3_rgbNumber(value) {
      return new d3_rgb(value >> 16, value >> 8 & 0xff, value & 0xff);
    }

    function d3_rgbString(value) {
      return d3_rgbNumber(value) + "";
    }

    var d3_category20 = [
      0x1f77b4, 0xaec7e8,
      0xff7f0e, 0xffbb78,
      0x2ca02c, 0x98df8a,
      0xd62728, 0xff9896,
      0x9467bd, 0xc5b0d5,
      0x8c564b, 0xc49c94,
      0xe377c2, 0xf7b6d2,
      0x7f7f7f, 0xc7c7c7,
      0xbcbd22, 0xdbdb8d,
      0x17becf, 0x9edae5
    ].map(d3_rgbString);

    var d3$scale$ordinal;

    function d3_scaleExtent(domain) {
      var start = domain[0], stop = domain[domain.length - 1];
      return start < stop ? [start, stop] : [stop, start];
    }

    var d3$range;

    var abs = Math.abs;

    function d3_range_integerScale(x) {
      var k = 1;
      while (x * k % 1) k *= 10;
      return k;
    }

    d3$range = function(start, stop, step) {
      if (arguments.length < 3) {
        step = 1;
        if (arguments.length < 2) {
          stop = start;
          start = 0;
        }
      }
      if ((stop - start) / step === Infinity) throw new Error("infinite range");
      var range = [],
           k = d3_range_integerScale(abs(step)),
           i = -1,
           j;
      start *= k, stop *= k, step *= k;
      if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k);
      else while ((j = start + step * ++i) < stop) range.push(j / k);
      return range;
    };

    function d3_scale_ordinal(domain, ranger) {
      var index,
          range,
          rangeBand;

      function scale(x) {
        return range[((index.get(x) || (ranger.t === "range" ? index.set(x, domain.push(x)) : NaN)) - 1) % range.length];
      }

      function steps(start, step) {
        return d3$range(domain.length).map(function(i) { return start + step * i; });
      }

      scale.domain = function(x) {
        if (!arguments.length) return domain;
        domain = [];
        index = new d3_Map;
        var i = -1, n = x.length, xi;
        while (++i < n) if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
        return scale[ranger.t].apply(scale, ranger.a);
      };

      scale.range = function(x) {
        if (!arguments.length) return range;
        range = x;
        rangeBand = 0;
        ranger = {t: "range", a: arguments};
        return scale;
      };

      scale.rangePoints = function(x, padding) {
        if (arguments.length < 2) padding = 0;
        var start = x[0],
            stop = x[1],
            step = domain.length < 2 ? (start = (start + stop) / 2, 0) : (stop - start) / (domain.length - 1 + padding);
        range = steps(start + step * padding / 2, step);
        rangeBand = 0;
        ranger = {t: "rangePoints", a: arguments};
        return scale;
      };

      scale.rangeRoundPoints = function(x, padding) {
        if (arguments.length < 2) padding = 0;
        var start = x[0],
            stop = x[1],
            step = domain.length < 2 ? (start = stop = Math.round((start + stop) / 2), 0) : (stop - start) / (domain.length - 1 + padding) | 0; // bitwise floor for symmetry
        range = steps(start + Math.round(step * padding / 2 + (stop - start - (domain.length - 1 + padding) * step) / 2), step);
        rangeBand = 0;
        ranger = {t: "rangeRoundPoints", a: arguments};
        return scale;
      };

      scale.rangeBands = function(x, padding, outerPadding) {
        if (arguments.length < 2) padding = 0;
        if (arguments.length < 3) outerPadding = padding;
        var reverse = x[1] < x[0],
            start = x[reverse - 0],
            stop = x[1 - reverse],
            step = (stop - start) / (domain.length - padding + 2 * outerPadding);
        range = steps(start + step * outerPadding, step);
        if (reverse) range.reverse();
        rangeBand = step * (1 - padding);
        ranger = {t: "rangeBands", a: arguments};
        return scale;
      };

      scale.rangeRoundBands = function(x, padding, outerPadding) {
        if (arguments.length < 2) padding = 0;
        if (arguments.length < 3) outerPadding = padding;
        var reverse = x[1] < x[0],
            start = x[reverse - 0],
            stop = x[1 - reverse],
            step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
        range = steps(start + Math.round((stop - start - (domain.length - padding) * step) / 2), step);
        if (reverse) range.reverse();
        rangeBand = Math.round(step * (1 - padding));
        ranger = {t: "rangeRoundBands", a: arguments};
        return scale;
      };

      scale.rangeBand = function() {
        return rangeBand;
      };

      scale.rangeExtent = function() {
        return d3_scaleExtent(ranger.a[0]);
      };

      scale.copy = function() {
        return d3_scale_ordinal(domain, ranger);
      };

      return scale.domain(domain);
    }

    d3$scale$ordinal = function() {
      return d3_scale_ordinal([], {t: "range", a: [[]]});
    };

    d3$scale$category20 = function() {
      return d3$scale$ordinal().range(d3_category20);
    };

    var color = d3$scale$category20();

    var d3$layout$force;

    var d3$rebind;// Method is assumed to be a standard D3 getter-setter:
    // If passed with no arguments, gets the value.
    // If passed with arguments, sets the value and returns the target.

    function d3_rebind(target, source, method) {
      return function() {
        var value = method.apply(source, arguments);
        return value === source ? target : value;
      };
    }// Copies a variable number of methods from source to target.

    d3$rebind = function(target, source) {
      var i = 1, n = arguments.length, method;
      while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
      return target;
    };

    function d3_layout_forceMouseout(d) {
      d.fixed &= ~4; // unset bit 3
    }

    function d3_layout_forceMouseover(d) {
      d.fixed |= 4; // set bit 3
      d.px = d.x, d.py = d.y; // set velocity to zero
    }

    function d3_layout_forceDragend(d) {
      d.fixed &= ~6; // unset bits 2 and 3
    }// The fixed property has three bits:
    // Bit 1 can be set externally (e.g., d.fixed = true) and show persist.
    // Bit 2 stores the dragging state, from mousedown to mouseup.
    // Bit 3 stores the hover state, from mouseover to mouseout.
    // Dragend is a special case: it also clears the hover state.

    function d3_layout_forceDragstart(d) {
      d.fixed |= 2; // set bit 2
    }

    function d3_identity(d) {
      return d;
    }

    var d3$behavior$drag;

    function d3_eventPreventDefault() {
      window.d3_event.preventDefault();
    }

    var d3_event_dragSelect,
        d3_event_dragId = 0;

    function d3_event_dragSuppress(node) {
      var name = ".dragsuppress-" + ++d3_event_dragId,
          click = "click" + name,
          w = d3$select(d3_window(node))
              .on("touchmove" + name, d3_eventPreventDefault)
              .on("dragstart" + name, d3_eventPreventDefault)
              .on("selectstart" + name, d3_eventPreventDefault);

      if (d3_event_dragSelect == null) {
        d3_event_dragSelect = "onselectstart" in node ? false
            : d3_vendorSymbol(node.style, "userSelect");
      }

      if (d3_event_dragSelect) {
        var style = d3_documentElement(node).style,
            select = style[d3_event_dragSelect];
        style[d3_event_dragSelect] = "none";
      }

      return function(suppressClick) {
        w.on(name, null);
        if (d3_event_dragSelect) style[d3_event_dragSelect] = select;
        if (suppressClick) { // suppress the next click, but only if it’s immediate
          var off = function() { w.on(click, null); };
          w.on(click, function() { d3_eventPreventDefault(); off(); }, true);
          setTimeout(off, 0);
        }
      };
    }

    var d3$touch;// https://bugs.webkit.org/show_bug.cgi?id=44083

    var d3_mouse_bug44083 = window.navigator && /WebKit/.test(window.navigator.userAgent) ? -1 : 0;

    function d3_mousePoint(container, e) {
      if (e.changedTouches) e = e.changedTouches[0];
      var svg = container.ownerSVGElement || container;
      if (svg.createSVGPoint) {
        var point = svg.createSVGPoint();
        if (d3_mouse_bug44083 < 0) {
          var window = d3_window(container);
          if (window.scrollX || window.scrollY) {
            svg = d3$select("body").append("svg").style({
              position: "absolute",
              top: 0,
              left: 0,
              margin: 0,
              padding: 0,
              border: "none"
            }, "important");
            var ctm = svg[0][0].getScreenCTM();
            d3_mouse_bug44083 = !(ctm.f || ctm.e);
            svg.remove();
          }
        }
        if (d3_mouse_bug44083) point.x = e.pageX, point.y = e.pageY;
        else point.x = e.clientX, point.y = e.clientY;
        point = point.matrixTransform(container.getScreenCTM().inverse());
        return [point.x, point.y];
      }
      var rect = container.getBoundingClientRect();
      return [e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop];
    }

    function d3_eventSource() {
      var e = window.d3_event, s;
      while (s = e.sourceEvent) e = s;
      return e;
    }

    d3$touch = function(container, touches, identifier) {
      if (arguments.length < 3) identifier = touches, touches = d3_eventSource().changedTouches;
      if (touches) for (var i = 0, n = touches.length, touch; i < n; ++i) {
        if ((touch = touches[i]).identifier === identifier) {
          return d3_mousePoint(container, touch);
        }
      }
    };// While it is possible to receive a touchstart event with more than one changed
    // touch, the event is only shared by touches on the same target; for new
    // touches targetting different elements, multiple touchstart events are
    // received even when the touches start simultaneously. Since multiple touches
    // cannot move the same target to different locations concurrently without
    // tearing the fabric of spacetime, we allow the first touch to win.

    function d3_behavior_dragTouchId() {
      return window.d3_event.changedTouches[0].identifier;
    }

    var d3$mouse;

    d3$mouse = function(container) {
      return d3_mousePoint(container, d3_eventSource());
    };

    function d3_dispatch_event(dispatch) {
      var listeners = [],
          listenerByName = new d3_Map;

      function event() {
        var z = listeners, // defensive reference
            i = -1,
            n = z.length,
            l;
        while (++i < n) if (l = z[i].on) l.apply(this, arguments);
        return dispatch;
      }

      event.on = function(name, listener) {
        var l = listenerByName.get(name),
            i;

        // return the current listener, if any
        if (arguments.length < 2) return l && l.on;

        // remove the old listener, if any (with copy-on-write)
        if (l) {
          l.on = null;
          listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
          listenerByName.remove(name);
        }

        // add the new listener, if any
        if (listener) listeners.push(listenerByName.set(name, {on: listener}));

        return dispatch;
      };

      return event;
    }

    function d3_dispatch() {}

    d3_dispatch.prototype.on = function(type, listener) {
      var i = type.indexOf("."),
          name = "";

      // Extract optional namespace, e.g., "click.foo"
      if (i >= 0) {
        name = type.slice(i + 1);
        type = type.slice(0, i);
      }

      if (type) return arguments.length < 2
          ? this[type].on(name)
          : this[type].on(name, listener);

      if (arguments.length === 2) {
        if (listener == null) for (type in this) {
          if (this.hasOwnProperty(type)) this[type].on(name, null);
        }
        return this;
      }
    };// Like d3.dispatch, but for custom events abstracting native UI events. These
    // events have a target component (such as a brush), a target element (such as
    // the svg:g element containing the brush) and the standard arguments `d` (the
    // target element's data) and `i` (the selection index of the target element).

    function d3_eventDispatch(target) {
      var dispatch = new d3_dispatch,
          i = 0,
          n = arguments.length;

      while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);

      // Creates a dispatch context for the specified `thiz` (typically, the target
      // DOM element that received the source event) and `argumentz` (typically, the
      // data `d` and index `i` of the target element). The returned function can be
      // used to dispatch an event to any registered listeners; the function takes a
      // single argument as input, being the event to dispatch. The event must have
      // a "type" attribute which corresponds to a type registered in the
      // constructor. This context will automatically populate the "sourceEvent" and
      // "target" attributes of the event, as well as setting the `d3.event` global
      // for the duration of the notification.
      dispatch.of = function(thiz, argumentz) {
        return function(e1) {
          try {
            var e0 =
            e1.sourceEvent = window.d3_event;
            e1.target = target;
            window.d3_event = e1;
            dispatch[e1.type].apply(thiz, argumentz);
          } finally {
            window.d3_event = e0;
          }
        };
      };

      return dispatch;
    }

    d3$behavior$drag = function() {
      var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"),
          origin = null,
          mousedown = dragstart(d3_noop, d3$mouse, d3_window, "mousemove", "mouseup"),
          touchstart = dragstart(d3_behavior_dragTouchId, d3$touch, d3_identity, "touchmove", "touchend");

      function drag() {
        this.on("mousedown.drag", mousedown)
            .on("touchstart.drag", touchstart);
      }

      function dragstart(id, position, subject, move, end) {
        return function() {
          var that = this,
              target = window.d3_event.target,
              parent = that.parentNode,
              dispatch = event.of(that, arguments),
              dragged = 0,
              dragId = id(),
              dragName = ".drag" + (dragId == null ? "" : "-" + dragId),
              dragOffset,
              dragSubject = d3$select(subject(target)).on(move + dragName, moved).on(end + dragName, ended),
              dragRestore = d3_event_dragSuppress(target),
              position0 = position(parent, dragId);

          if (origin) {
            dragOffset = origin.apply(that, arguments);
            dragOffset = [dragOffset.x - position0[0], dragOffset.y - position0[1]];
          } else {
            dragOffset = [0, 0];
          }

          dispatch({type: "dragstart"});

          function moved() {
            var position1 = position(parent, dragId), dx, dy;
            if (!position1) return; // this touch didn’t move

            dx = position1[0] - position0[0];
            dy = position1[1] - position0[1];
            dragged |= dx | dy;
            position0 = position1;

            dispatch({
              type: "drag",
              x: position1[0] + dragOffset[0],
              y: position1[1] + dragOffset[1],
              dx: dx,
              dy: dy
            });
          }

          function ended() {
            if (!position(parent, dragId)) return; // this touch didn’t end
            dragSubject.on(move + dragName, null).on(end + dragName, null);
            dragRestore(dragged && window.d3_event.target === target);
            dispatch({type: "dragend"});
          }
        };
      }

      drag.origin = function(x) {
        if (!arguments.length) return origin;
        origin = x;
        return drag;
      };

      return d3$rebind(drag, event, "on");
    };

    var d3$timer;

    var d3_timer_queueHead,
        d3_timer_queueTail,
        d3_timer_interval, // is an interval (or frame) active?
        d3_timer_timeout, // is a timeout active?
        d3_timer_active, // active timer object
        d3_timer_frame = window[d3_vendorSymbol(window, "requestAnimationFrame")] || function(callback) { setTimeout(callback, 17); };// Flush after callbacks to avoid concurrent queue modification.
    // Returns the time of the earliest active timer, post-sweep.

    function d3_timer_sweep() {
      var t0,
          t1 = d3_timer_queueHead,
          time = Infinity;
      while (t1) {
        if (t1.f) {
          t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
        } else {
          if (t1.t < time) time = t1.t;
          t1 = (t0 = t1).n;
        }
      }
      d3_timer_queueTail = t0;
      return time;
    }

    function d3_timer_mark() {
      var now = Date.now();
      d3_timer_active = d3_timer_queueHead;
      while (d3_timer_active) {
        if (now >= d3_timer_active.t) d3_timer_active.f = d3_timer_active.c(now - d3_timer_active.t);
        d3_timer_active = d3_timer_active.n;
      }
      return now;
    }

    function d3_timer_step() {
      var now = d3_timer_mark(),
          delay = d3_timer_sweep() - now;
      if (delay > 24) {
        if (isFinite(delay)) {
          clearTimeout(d3_timer_timeout);
          d3_timer_timeout = setTimeout(d3_timer_step, delay);
        }
        d3_timer_interval = 0;
      } else {
        d3_timer_interval = 1;
        d3_timer_frame(d3_timer_step);
      }
    }// The timer will continue to fire until callback returns true.

    d3$timer = function(callback, delay, then) {
      var n = arguments.length;
      if (n < 2) delay = 0;
      if (n < 3) then = Date.now();

      // Add the callback to the tail of the queue.
      var time = then + delay, timer = {c: callback, t: time, f: false, n: null};
      if (d3_timer_queueTail) d3_timer_queueTail.n = timer;
      else d3_timer_queueHead = timer;
      d3_timer_queueTail = timer;

      // Start animatin'!
      if (!d3_timer_interval) {
        d3_timer_timeout = clearTimeout(d3_timer_timeout);
        d3_timer_interval = 1;
        d3_timer_frame(d3_timer_step);
      }
    };

    var d3$geom$quadtree;

    function d3_geom_quadtreeFind(root, x, y, x0, y0, x3, y3) {
      var minDistance2 = Infinity,
          closestPoint;

      (function find(node, x1, y1, x2, y2) {

        // stop searching if this cell can’t contain a closer node
        if (x1 > x3 || y1 > y3 || x2 < x0 || y2 < y0) return;

        // visit this point
        if (point = node.point) {
          var point,
              dx = x - node.x,
              dy = y - node.y,
              distance2 = dx * dx + dy * dy;
          if (distance2 < minDistance2) {
            var distance = Math.sqrt(minDistance2 = distance2);
            x0 = x - distance, y0 = y - distance;
            x3 = x + distance, y3 = y + distance;
            closestPoint = point;
          }
        }

        // bisect the current node
        var children = node.nodes,
            xm = (x1 + x2) * .5,
            ym = (y1 + y2) * .5,
            right = x >= xm,
            below = y >= ym;

        // visit closest cell first
        for (var i = below << 1 | right, j = i + 4; i < j; ++i) {
          if (node = children[i & 3]) switch (i & 3) {
            case 0: find(node, x1, y1, xm, ym); break;
            case 1: find(node, xm, y1, x2, ym); break;
            case 2: find(node, x1, ym, xm, y2); break;
            case 3: find(node, xm, ym, x2, y2); break;
          }
        }
      })(root, x0, y0, x3, y3);

      return closestPoint;
    }

    function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
      if (!f(node, x1, y1, x2, y2)) {
        var sx = (x1 + x2) * .5,
            sy = (y1 + y2) * .5,
            children = node.nodes;
        if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
        if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
        if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
        if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
      }
    }

    function d3_geom_quadtreeNode() {
      return {
        leaf: true,
        nodes: [],
        point: null,
        x: null,
        y: null
      };
    }

    function d3_functor(v) {
      return typeof v === "function" ? v : function() { return v; };
    }

    function d3_geom_quadtreeCompatY(d) { return d.y; }

    function d3_geom_quadtreeCompatX(d) { return d.x; }

    function d3_geom_pointY(d) {
      return d[1];
    }

    function d3_geom_pointX(d) {
      return d[0];
    }

    d3$geom$quadtree = function(points, x1, y1, x2, y2) {
      var x = d3_geom_pointX,
          y = d3_geom_pointY,
          compat;

      // For backwards-compatibility.
      if (compat = arguments.length) {
        x = d3_geom_quadtreeCompatX;
        y = d3_geom_quadtreeCompatY;
        if (compat === 3) {
          y2 = y1;
          x2 = x1;
          y1 = x1 = 0;
        }
        return quadtree(points);
      }

      function quadtree(data) {
        var d,
            fx = d3_functor(x),
            fy = d3_functor(y),
            xs,
            ys,
            i,
            n,
            x1_,
            y1_,
            x2_,
            y2_;

        if (x1 != null) {
          x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
        } else {
          // Compute bounds, and cache points temporarily.
          x2_ = y2_ = -(x1_ = y1_ = Infinity);
          xs = [], ys = [];
          n = data.length;
          if (compat) for (i = 0; i < n; ++i) {
            d = data[i];
            if (d.x < x1_) x1_ = d.x;
            if (d.y < y1_) y1_ = d.y;
            if (d.x > x2_) x2_ = d.x;
            if (d.y > y2_) y2_ = d.y;
            xs.push(d.x);
            ys.push(d.y);
          } else for (i = 0; i < n; ++i) {
            var x_ = +fx(d = data[i], i),
                y_ = +fy(d, i);
            if (x_ < x1_) x1_ = x_;
            if (y_ < y1_) y1_ = y_;
            if (x_ > x2_) x2_ = x_;
            if (y_ > y2_) y2_ = y_;
            xs.push(x_);
            ys.push(y_);
          }
        }

        // Squarify the bounds.
        var dx = x2_ - x1_,
            dy = y2_ - y1_;
        if (dx > dy) y2_ = y1_ + dx;
        else x2_ = x1_ + dy;

        // Recursively inserts the specified point p at the node n or one of its
        // descendants. The bounds are defined by [x1, x2] and [y1, y2].
        function insert(n, d, x, y, x1, y1, x2, y2) {
          if (isNaN(x) || isNaN(y)) return; // ignore invalid points
          if (n.leaf) {
            var nx = n.x,
                ny = n.y;
            if (nx != null) {
              // If the point at this leaf node is at the same position as the new
              // point we are adding, we leave the point associated with the
              // internal node while adding the new point to a child node. This
              // avoids infinite recursion.
              if ((abs(nx - x) + abs(ny - y)) < .01) {
                insertChild(n, d, x, y, x1, y1, x2, y2);
              } else {
                var nPoint = n.point;
                n.x = n.y = n.point = null;
                insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
                insertChild(n, d, x, y, x1, y1, x2, y2);
              }
            } else {
              n.x = x, n.y = y, n.point = d;
            }
          } else {
            insertChild(n, d, x, y, x1, y1, x2, y2);
          }
        }

        // Recursively inserts the specified point [x, y] into a descendant of node
        // n. The bounds are defined by [x1, x2] and [y1, y2].
        function insertChild(n, d, x, y, x1, y1, x2, y2) {
          // Compute the split point, and the quadrant in which to insert p.
          var xm = (x1 + x2) * .5,
              ym = (y1 + y2) * .5,
              right = x >= xm,
              below = y >= ym,
              i = below << 1 | right;

          // Recursively insert into the child node.
          n.leaf = false;
          n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());

          // Update the bounds as we recurse.
          if (right) x1 = xm; else x2 = xm;
          if (below) y1 = ym; else y2 = ym;
          insert(n, d, x, y, x1, y1, x2, y2);
        }

        // Create the root node.
        var root = d3_geom_quadtreeNode();

        root.add = function(d) {
          insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
        };

        root.visit = function(f) {
          d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
        };

        // Find the closest point to the specified point.
        // TODO allow the initial search extent to be specified?
        // TODO allow the initial minimum distance to be specified?
        // TODO allow searching below any node?
        root.find = function(point) {
          return d3_geom_quadtreeFind(root, point[0], point[1], x1_, y1_, x2_, y2_);
        };

        // Insert all points.
        i = -1;
        if (x1 == null) {
          while (++i < n) {
            insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
          }
          --i; // index of last insertion
        } else data.forEach(root.add);

        // Discard captured fields.
        xs = ys = data = d = null;

        return root;
      }

      quadtree.x = function(_) {
        return arguments.length ? (x = _, quadtree) : x;
      };

      quadtree.y = function(_) {
        return arguments.length ? (y = _, quadtree) : y;
      };

      quadtree.extent = function(_) {
        if (!arguments.length) return x1 == null ? null : [[x1, y1], [x2, y2]];
        if (_ == null) x1 = y1 = x2 = y2 = null;
        else x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], y2 = +_[1][1];
        return quadtree;
      };

      quadtree.size = function(_) {
        if (!arguments.length) return x1 == null ? null : [x2 - x1, y2 - y1];
        if (_ == null) x1 = y1 = x2 = y2 = null;
        else x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
        return quadtree;
      };

      return quadtree;
    };

    function d3_layout_forceAccumulate(quad, alpha, charges) {
      var cx = 0,
          cy = 0;
      quad.charge = 0;
      if (!quad.leaf) {
        var nodes = quad.nodes,
            n = nodes.length,
            i = -1,
            c;
        while (++i < n) {
          c = nodes[i];
          if (c == null) continue;
          d3_layout_forceAccumulate(c, alpha, charges);
          quad.charge += c.charge;
          cx += c.charge * c.cx;
          cy += c.charge * c.cy;
        }
      }
      if (quad.point) {
        // jitter internal nodes that are coincident
        if (!quad.leaf) {
          quad.point.x += Math.random() - .5;
          quad.point.y += Math.random() - .5;
        }
        var k = alpha * charges[quad.point.index];
        quad.charge += quad.pointCharge = k;
        cx += k * quad.point.x;
        cy += k * quad.point.y;
      }
      quad.cx = cx / quad.charge;
      quad.cy = cy / quad.charge;
    }

    var d3_layout_forceLinkDistance = 20,
        d3_layout_forceLinkStrength = 1,
        d3_layout_forceChargeDistance2 = Infinity;

    var d3$dispatch;

    d3$dispatch = function() {
      var dispatch = new d3_dispatch,
          i = -1,
          n = arguments.length;
      while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
      return dispatch;
    };// A rudimentary force layout using Gauss-Seidel.

    d3$layout$force = function() {
      var force = {},
          event = d3$dispatch("start", "tick", "end"),
          size = [1, 1],
          drag,
          alpha,
          friction = .9,
          linkDistance = d3_layout_forceLinkDistance,
          linkStrength = d3_layout_forceLinkStrength,
          charge = -30,
          chargeDistance2 = d3_layout_forceChargeDistance2,
          gravity = .1,
          theta2 = .64,
          nodes = [],
          links = [],
          distances,
          strengths,
          charges;

      function repulse(node) {
        return function(quad, x1, _, x2) {
          if (quad.point !== node) {
            var dx = quad.cx - node.x,
                dy = quad.cy - node.y,
                dw = x2 - x1,
                dn = dx * dx + dy * dy;

            /* Barnes-Hut criterion. */
            if (dw * dw / theta2 < dn) {
              if (dn < chargeDistance2) {
                var k = quad.charge / dn;
                node.px -= dx * k;
                node.py -= dy * k;
              }
              return true;
            }

            if (quad.point && dn && dn < chargeDistance2) {
              var k = quad.pointCharge / dn;
              node.px -= dx * k;
              node.py -= dy * k;
            }
          }
          return !quad.charge;
        };
      }

      force.tick = function() {
        // simulated annealing, basically
        if ((alpha *= .99) < .005) {
          event.end({type: "end", alpha: alpha = 0});
          return true;
        }

        var n = nodes.length,
            m = links.length,
            q,
            i, // current index
            o, // current object
            s, // current source
            t, // current target
            l, // current distance
            k, // current force
            x, // x-distance
            y; // y-distance

        // gauss-seidel relaxation for links
        for (i = 0; i < m; ++i) {
          o = links[i];
          s = o.source;
          t = o.target;
          x = t.x - s.x;
          y = t.y - s.y;
          if (l = (x * x + y * y)) {
            l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
            x *= l;
            y *= l;
            t.x -= x * (k = s.weight / (t.weight + s.weight));
            t.y -= y * k;
            s.x += x * (k = 1 - k);
            s.y += y * k;
          }
        }

        // apply gravity forces
        if (k = alpha * gravity) {
          x = size[0] / 2;
          y = size[1] / 2;
          i = -1; if (k) while (++i < n) {
            o = nodes[i];
            o.x += (x - o.x) * k;
            o.y += (y - o.y) * k;
          }
        }

        // compute quadtree center of mass and apply charge forces
        if (charge) {
          d3_layout_forceAccumulate(q = d3$geom$quadtree(nodes), alpha, charges);
          i = -1; while (++i < n) {
            if (!(o = nodes[i]).fixed) {
              q.visit(repulse(o));
            }
          }
        }

        // position verlet integration
        i = -1; while (++i < n) {
          o = nodes[i];
          if (o.fixed) {
            o.x = o.px;
            o.y = o.py;
          } else {
            o.x -= (o.px - (o.px = o.x)) * friction;
            o.y -= (o.py - (o.py = o.y)) * friction;
          }
        }

        event.tick({type: "tick", alpha: alpha});
      };

      force.nodes = function(x) {
        if (!arguments.length) return nodes;
        nodes = x;
        return force;
      };

      force.links = function(x) {
        if (!arguments.length) return links;
        links = x;
        return force;
      };

      force.size = function(x) {
        if (!arguments.length) return size;
        size = x;
        return force;
      };

      force.linkDistance = function(x) {
        if (!arguments.length) return linkDistance;
        linkDistance = typeof x === "function" ? x : +x;
        return force;
      };

      // For backwards-compatibility.
      force.distance = force.linkDistance;

      force.linkStrength = function(x) {
        if (!arguments.length) return linkStrength;
        linkStrength = typeof x === "function" ? x : +x;
        return force;
      };

      force.friction = function(x) {
        if (!arguments.length) return friction;
        friction = +x;
        return force;
      };

      force.charge = function(x) {
        if (!arguments.length) return charge;
        charge = typeof x === "function" ? x : +x;
        return force;
      };

      force.chargeDistance = function(x) {
        if (!arguments.length) return Math.sqrt(chargeDistance2);
        chargeDistance2 = x * x;
        return force;
      };

      force.gravity = function(x) {
        if (!arguments.length) return gravity;
        gravity = +x;
        return force;
      };

      force.theta = function(x) {
        if (!arguments.length) return Math.sqrt(theta2);
        theta2 = x * x;
        return force;
      };

      force.alpha = function(x) {
        if (!arguments.length) return alpha;

        x = +x;
        if (alpha) { // if we're already running
          if (x > 0) alpha = x; // we might keep it hot
          else alpha = 0; // or, next tick will dispatch "end"
        } else if (x > 0) { // otherwise, fire it up!
          event.start({type: "start", alpha: alpha = x});
          d3$timer(force.tick);
        }

        return force;
      };

      force.start = function() {
        var i,
            n = nodes.length,
            m = links.length,
            w = size[0],
            h = size[1],
            neighbors,
            o;

        for (i = 0; i < n; ++i) {
          (o = nodes[i]).index = i;
          o.weight = 0;
        }

        for (i = 0; i < m; ++i) {
          o = links[i];
          if (typeof o.source == "number") o.source = nodes[o.source];
          if (typeof o.target == "number") o.target = nodes[o.target];
          ++o.source.weight;
          ++o.target.weight;
        }

        for (i = 0; i < n; ++i) {
          o = nodes[i];
          if (isNaN(o.x)) o.x = position("x", w);
          if (isNaN(o.y)) o.y = position("y", h);
          if (isNaN(o.px)) o.px = o.x;
          if (isNaN(o.py)) o.py = o.y;
        }

        distances = [];
        if (typeof linkDistance === "function") for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i);
        else for (i = 0; i < m; ++i) distances[i] = linkDistance;

        strengths = [];
        if (typeof linkStrength === "function") for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i);
        else for (i = 0; i < m; ++i) strengths[i] = linkStrength;

        charges = [];
        if (typeof charge === "function") for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i);
        else for (i = 0; i < n; ++i) charges[i] = charge;

        // inherit node position from first neighbor with defined position
        // or if no such neighbors, initialize node position randomly
        // initialize neighbors lazily to avoid overhead when not needed
        function position(dimension, size) {
          if (!neighbors) {
            neighbors = new Array(n);
            for (j = 0; j < n; ++j) {
              neighbors[j] = [];
            }
            for (j = 0; j < m; ++j) {
              var o = links[j];
              neighbors[o.source.index].push(o.target);
              neighbors[o.target.index].push(o.source);
            }
          }
          var candidates = neighbors[i],
              j = -1,
              l = candidates.length,
              x;
          while (++j < l) if (!isNaN(x = candidates[j][dimension])) return x;
          return Math.random() * size;
        }

        return force.resume();
      };

      force.resume = function() {
        return force.alpha(.1);
      };

      force.stop = function() {
        return force.alpha(0);
      };

      // use `node.call(force.drag)` to make nodes draggable
      force.drag = function() {
        if (!drag) drag = d3$behavior$drag()
            .origin(d3_identity)
            .on("dragstart.force", d3_layout_forceDragstart)
            .on("drag.force", dragmove)
            .on("dragend.force", d3_layout_forceDragend);

        if (!arguments.length) return drag;

        this.on("mouseover.force", d3_layout_forceMouseover)
            .on("mouseout.force", d3_layout_forceMouseout)
            .call(drag);
      };

      function dragmove(d) {
        d.px = window.d3_event.x, d.py = window.d3_event.y;
        force.resume(); // restart annealing
      }

      return d3$rebind(force, event, "on");
    };

    var forceLayout = d3$layout$force()
        .charge(-120)
        .linkDistance(30)
        .size([width, height]);

    var graph = {
      "nodes":[
        {"name":"Myriel","group":1},
        {"name":"Napoleon","group":1},
        {"name":"Mlle.Baptistine","group":1},
        {"name":"Mme.Magloire","group":1},
        {"name":"CountessdeLo","group":1},
        {"name":"Geborand","group":1},
        {"name":"Champtercier","group":1},
        {"name":"Cravatte","group":1},
        {"name":"Count","group":1},
        {"name":"OldMan","group":1},
        {"name":"Labarre","group":2},
        {"name":"Valjean","group":2},
        {"name":"Marguerite","group":3},
        {"name":"Mme.deR","group":2},
        {"name":"Isabeau","group":2},
        {"name":"Gervais","group":2},
        {"name":"Tholomyes","group":3},
        {"name":"Listolier","group":3},
        {"name":"Fameuil","group":3},
        {"name":"Blacheville","group":3},
        {"name":"Favourite","group":3},
        {"name":"Dahlia","group":3},
        {"name":"Zephine","group":3},
        {"name":"Fantine","group":3},
        {"name":"Mme.Thenardier","group":4},
        {"name":"Thenardier","group":4},
        {"name":"Cosette","group":5},
        {"name":"Javert","group":4},
        {"name":"Fauchelevent","group":0},
        {"name":"Bamatabois","group":2},
        {"name":"Perpetue","group":3},
        {"name":"Simplice","group":2},
        {"name":"Scaufflaire","group":2},
        {"name":"Woman1","group":2},
        {"name":"Judge","group":2},
        {"name":"Champmathieu","group":2},
        {"name":"Brevet","group":2},
        {"name":"Chenildieu","group":2},
        {"name":"Cochepaille","group":2},
        {"name":"Pontmercy","group":4},
        {"name":"Boulatruelle","group":6},
        {"name":"Eponine","group":4},
        {"name":"Anzelma","group":4},
        {"name":"Woman2","group":5},
        {"name":"MotherInnocent","group":0},
        {"name":"Gribier","group":0},
        {"name":"Jondrette","group":7},
        {"name":"Mme.Burgon","group":7},
        {"name":"Gavroche","group":8},
        {"name":"Gillenormand","group":5},
        {"name":"Magnon","group":5},
        {"name":"Mlle.Gillenormand","group":5},
        {"name":"Mme.Pontmercy","group":5},
        {"name":"Mlle.Vaubois","group":5},
        {"name":"Lt.Gillenormand","group":5},
        {"name":"Marius","group":8},
        {"name":"BaronessT","group":5},
        {"name":"Mabeuf","group":8},
        {"name":"Enjolras","group":8},
        {"name":"Combeferre","group":8},
        {"name":"Prouvaire","group":8},
        {"name":"Feuilly","group":8},
        {"name":"Courfeyrac","group":8},
        {"name":"Bahorel","group":8},
        {"name":"Bossuet","group":8},
        {"name":"Joly","group":8},
        {"name":"Grantaire","group":8},
        {"name":"MotherPlutarch","group":9},
        {"name":"Gueulemer","group":4},
        {"name":"Babet","group":4},
        {"name":"Claquesous","group":4},
        {"name":"Montparnasse","group":4},
        {"name":"Toussaint","group":5},
        {"name":"Child1","group":10},
        {"name":"Child2","group":10},
        {"name":"Brujon","group":4},
        {"name":"Mme.Hucheloup","group":8}
      ],
      "links":[
        {"source":1,"target":0,"value":1},
        {"source":2,"target":0,"value":8},
        {"source":3,"target":0,"value":10},
        {"source":3,"target":2,"value":6},
        {"source":4,"target":0,"value":1},
        {"source":5,"target":0,"value":1},
        {"source":6,"target":0,"value":1},
        {"source":7,"target":0,"value":1},
        {"source":8,"target":0,"value":2},
        {"source":9,"target":0,"value":1},
        {"source":11,"target":10,"value":1},
        {"source":11,"target":3,"value":3},
        {"source":11,"target":2,"value":3},
        {"source":11,"target":0,"value":5},
        {"source":12,"target":11,"value":1},
        {"source":13,"target":11,"value":1},
        {"source":14,"target":11,"value":1},
        {"source":15,"target":11,"value":1},
        {"source":17,"target":16,"value":4},
        {"source":18,"target":16,"value":4},
        {"source":18,"target":17,"value":4},
        {"source":19,"target":16,"value":4},
        {"source":19,"target":17,"value":4},
        {"source":19,"target":18,"value":4},
        {"source":20,"target":16,"value":3},
        {"source":20,"target":17,"value":3},
        {"source":20,"target":18,"value":3},
        {"source":20,"target":19,"value":4},
        {"source":21,"target":16,"value":3},
        {"source":21,"target":17,"value":3},
        {"source":21,"target":18,"value":3},
        {"source":21,"target":19,"value":3},
        {"source":21,"target":20,"value":5},
        {"source":22,"target":16,"value":3},
        {"source":22,"target":17,"value":3},
        {"source":22,"target":18,"value":3},
        {"source":22,"target":19,"value":3},
        {"source":22,"target":20,"value":4},
        {"source":22,"target":21,"value":4},
        {"source":23,"target":16,"value":3},
        {"source":23,"target":17,"value":3},
        {"source":23,"target":18,"value":3},
        {"source":23,"target":19,"value":3},
        {"source":23,"target":20,"value":4},
        {"source":23,"target":21,"value":4},
        {"source":23,"target":22,"value":4},
        {"source":23,"target":12,"value":2},
        {"source":23,"target":11,"value":9},
        {"source":24,"target":23,"value":2},
        {"source":24,"target":11,"value":7},
        {"source":25,"target":24,"value":13},
        {"source":25,"target":23,"value":1},
        {"source":25,"target":11,"value":12},
        {"source":26,"target":24,"value":4},
        {"source":26,"target":11,"value":31},
        {"source":26,"target":16,"value":1},
        {"source":26,"target":25,"value":1},
        {"source":27,"target":11,"value":17},
        {"source":27,"target":23,"value":5},
        {"source":27,"target":25,"value":5},
        {"source":27,"target":24,"value":1},
        {"source":27,"target":26,"value":1},
        {"source":28,"target":11,"value":8},
        {"source":28,"target":27,"value":1},
        {"source":29,"target":23,"value":1},
        {"source":29,"target":27,"value":1},
        {"source":29,"target":11,"value":2},
        {"source":30,"target":23,"value":1},
        {"source":31,"target":30,"value":2},
        {"source":31,"target":11,"value":3},
        {"source":31,"target":23,"value":2},
        {"source":31,"target":27,"value":1},
        {"source":32,"target":11,"value":1},
        {"source":33,"target":11,"value":2},
        {"source":33,"target":27,"value":1},
        {"source":34,"target":11,"value":3},
        {"source":34,"target":29,"value":2},
        {"source":35,"target":11,"value":3},
        {"source":35,"target":34,"value":3},
        {"source":35,"target":29,"value":2},
        {"source":36,"target":34,"value":2},
        {"source":36,"target":35,"value":2},
        {"source":36,"target":11,"value":2},
        {"source":36,"target":29,"value":1},
        {"source":37,"target":34,"value":2},
        {"source":37,"target":35,"value":2},
        {"source":37,"target":36,"value":2},
        {"source":37,"target":11,"value":2},
        {"source":37,"target":29,"value":1},
        {"source":38,"target":34,"value":2},
        {"source":38,"target":35,"value":2},
        {"source":38,"target":36,"value":2},
        {"source":38,"target":37,"value":2},
        {"source":38,"target":11,"value":2},
        {"source":38,"target":29,"value":1},
        {"source":39,"target":25,"value":1},
        {"source":40,"target":25,"value":1},
        {"source":41,"target":24,"value":2},
        {"source":41,"target":25,"value":3},
        {"source":42,"target":41,"value":2},
        {"source":42,"target":25,"value":2},
        {"source":42,"target":24,"value":1},
        {"source":43,"target":11,"value":3},
        {"source":43,"target":26,"value":1},
        {"source":43,"target":27,"value":1},
        {"source":44,"target":28,"value":3},
        {"source":44,"target":11,"value":1},
        {"source":45,"target":28,"value":2},
        {"source":47,"target":46,"value":1},
        {"source":48,"target":47,"value":2},
        {"source":48,"target":25,"value":1},
        {"source":48,"target":27,"value":1},
        {"source":48,"target":11,"value":1},
        {"source":49,"target":26,"value":3},
        {"source":49,"target":11,"value":2},
        {"source":50,"target":49,"value":1},
        {"source":50,"target":24,"value":1},
        {"source":51,"target":49,"value":9},
        {"source":51,"target":26,"value":2},
        {"source":51,"target":11,"value":2},
        {"source":52,"target":51,"value":1},
        {"source":52,"target":39,"value":1},
        {"source":53,"target":51,"value":1},
        {"source":54,"target":51,"value":2},
        {"source":54,"target":49,"value":1},
        {"source":54,"target":26,"value":1},
        {"source":55,"target":51,"value":6},
        {"source":55,"target":49,"value":12},
        {"source":55,"target":39,"value":1},
        {"source":55,"target":54,"value":1},
        {"source":55,"target":26,"value":21},
        {"source":55,"target":11,"value":19},
        {"source":55,"target":16,"value":1},
        {"source":55,"target":25,"value":2},
        {"source":55,"target":41,"value":5},
        {"source":55,"target":48,"value":4},
        {"source":56,"target":49,"value":1},
        {"source":56,"target":55,"value":1},
        {"source":57,"target":55,"value":1},
        {"source":57,"target":41,"value":1},
        {"source":57,"target":48,"value":1},
        {"source":58,"target":55,"value":7},
        {"source":58,"target":48,"value":7},
        {"source":58,"target":27,"value":6},
        {"source":58,"target":57,"value":1},
        {"source":58,"target":11,"value":4},
        {"source":59,"target":58,"value":15},
        {"source":59,"target":55,"value":5},
        {"source":59,"target":48,"value":6},
        {"source":59,"target":57,"value":2},
        {"source":60,"target":48,"value":1},
        {"source":60,"target":58,"value":4},
        {"source":60,"target":59,"value":2},
        {"source":61,"target":48,"value":2},
        {"source":61,"target":58,"value":6},
        {"source":61,"target":60,"value":2},
        {"source":61,"target":59,"value":5},
        {"source":61,"target":57,"value":1},
        {"source":61,"target":55,"value":1},
        {"source":62,"target":55,"value":9},
        {"source":62,"target":58,"value":17},
        {"source":62,"target":59,"value":13},
        {"source":62,"target":48,"value":7},
        {"source":62,"target":57,"value":2},
        {"source":62,"target":41,"value":1},
        {"source":62,"target":61,"value":6},
        {"source":62,"target":60,"value":3},
        {"source":63,"target":59,"value":5},
        {"source":63,"target":48,"value":5},
        {"source":63,"target":62,"value":6},
        {"source":63,"target":57,"value":2},
        {"source":63,"target":58,"value":4},
        {"source":63,"target":61,"value":3},
        {"source":63,"target":60,"value":2},
        {"source":63,"target":55,"value":1},
        {"source":64,"target":55,"value":5},
        {"source":64,"target":62,"value":12},
        {"source":64,"target":48,"value":5},
        {"source":64,"target":63,"value":4},
        {"source":64,"target":58,"value":10},
        {"source":64,"target":61,"value":6},
        {"source":64,"target":60,"value":2},
        {"source":64,"target":59,"value":9},
        {"source":64,"target":57,"value":1},
        {"source":64,"target":11,"value":1},
        {"source":65,"target":63,"value":5},
        {"source":65,"target":64,"value":7},
        {"source":65,"target":48,"value":3},
        {"source":65,"target":62,"value":5},
        {"source":65,"target":58,"value":5},
        {"source":65,"target":61,"value":5},
        {"source":65,"target":60,"value":2},
        {"source":65,"target":59,"value":5},
        {"source":65,"target":57,"value":1},
        {"source":65,"target":55,"value":2},
        {"source":66,"target":64,"value":3},
        {"source":66,"target":58,"value":3},
        {"source":66,"target":59,"value":1},
        {"source":66,"target":62,"value":2},
        {"source":66,"target":65,"value":2},
        {"source":66,"target":48,"value":1},
        {"source":66,"target":63,"value":1},
        {"source":66,"target":61,"value":1},
        {"source":66,"target":60,"value":1},
        {"source":67,"target":57,"value":3},
        {"source":68,"target":25,"value":5},
        {"source":68,"target":11,"value":1},
        {"source":68,"target":24,"value":1},
        {"source":68,"target":27,"value":1},
        {"source":68,"target":48,"value":1},
        {"source":68,"target":41,"value":1},
        {"source":69,"target":25,"value":6},
        {"source":69,"target":68,"value":6},
        {"source":69,"target":11,"value":1},
        {"source":69,"target":24,"value":1},
        {"source":69,"target":27,"value":2},
        {"source":69,"target":48,"value":1},
        {"source":69,"target":41,"value":1},
        {"source":70,"target":25,"value":4},
        {"source":70,"target":69,"value":4},
        {"source":70,"target":68,"value":4},
        {"source":70,"target":11,"value":1},
        {"source":70,"target":24,"value":1},
        {"source":70,"target":27,"value":1},
        {"source":70,"target":41,"value":1},
        {"source":70,"target":58,"value":1},
        {"source":71,"target":27,"value":1},
        {"source":71,"target":69,"value":2},
        {"source":71,"target":68,"value":2},
        {"source":71,"target":70,"value":2},
        {"source":71,"target":11,"value":1},
        {"source":71,"target":48,"value":1},
        {"source":71,"target":41,"value":1},
        {"source":71,"target":25,"value":1},
        {"source":72,"target":26,"value":2},
        {"source":72,"target":27,"value":1},
        {"source":72,"target":11,"value":1},
        {"source":73,"target":48,"value":2},
        {"source":74,"target":48,"value":2},
        {"source":74,"target":73,"value":3},
        {"source":75,"target":69,"value":3},
        {"source":75,"target":68,"value":3},
        {"source":75,"target":25,"value":3},
        {"source":75,"target":48,"value":1},
        {"source":75,"target":41,"value":1},
        {"source":75,"target":70,"value":1},
        {"source":75,"target":71,"value":1},
        {"source":76,"target":64,"value":1},
        {"source":76,"target":65,"value":1},
        {"source":76,"target":66,"value":1},
        {"source":76,"target":63,"value":1},
        {"source":76,"target":62,"value":1},
        {"source":76,"target":48,"value":1},
        {"source":76,"target":58,"value":1}
      ]
    }

    var svg = d3$select("body").append("svg")
        .attr("width", width)
        .attr("height", height);

    forceLayout
      .nodes(graph.nodes)
      .links(graph.links)
      .start();

    var link = svg.selectAll(".link")
      .data(graph.links)
    .enter().append("line")
      .attr("class", "link")
      .style("stroke-width", function(d) { return Math.sqrt(d.value); });

    var node = svg.selectAll(".node")
      .data(graph.nodes)
    .enter().append("circle")
      .attr("class", "node")
      .attr("r", 5)
      .style("fill", function(d) { return color(d.group); })
      .call(forceLayout.drag);

    node.append("title")
      .text(function(d) { return d.name; });

    forceLayout.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
    });

})();