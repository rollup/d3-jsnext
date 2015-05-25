import { d3_scale_linearTickFormat, d3_scale_linearTicks } from './linear';
import { d3$scale } from './scale';

var d3$scale$identity;

d3$scale$identity = function() {
  return d3_scale_identity([0, 1]);
};

function d3_scale_identity(domain) {

  function identity(x) { return +x; }

  identity.invert = identity;

  identity.domain = identity.range = function(x) {
    if (!arguments.length) return domain;
    domain = x.map(identity);
    return identity;
  };

  identity.ticks = function(m) {
    return d3_scale_linearTicks(domain, m);
  };

  identity.tickFormat = function(m, format) {
    return d3_scale_linearTickFormat(domain, m, format);
  };

  identity.copy = function() {
    return d3_scale_identity(domain);
  };

  return identity;
}

export { d3$scale$identity, d3_scale_identity };