import { d3_ascending } from '../arrays/ascending';
import { d3_numeric, d3_number } from '../math/number';
import { d3$bisect } from '../arrays/bisect';
import { d3$quantile } from '../arrays/quantile';
import { d3$scale } from './scale';

var d3$scale$quantile;

d3$scale$quantile = function() {
  return d3_scale_quantile([], []);
};

function d3_scale_quantile(domain, range) {
  var thresholds;

  function rescale() {
    var k = 0,
        q = range.length;
    thresholds = [];
    while (++k < q) thresholds[k - 1] = d3$quantile(domain, k / q);
    return scale;
  }

  function scale(x) {
    if (!isNaN(x = +x)) return range[d3$bisect(thresholds, x)];
  }

  scale.domain = function(x) {
    if (!arguments.length) return domain;
    domain = x.map(d3_number).filter(d3_numeric).sort(d3_ascending);
    return rescale();
  };

  scale.range = function(x) {
    if (!arguments.length) return range;
    range = x;
    return rescale();
  };

  scale.quantiles = function() {
    return thresholds;
  };

  scale.invertExtent = function(y) {
    y = range.indexOf(y);
    return y < 0 ? [NaN, NaN] : [
      y > 0 ? thresholds[y - 1] : domain[0],
      y < thresholds.length ? thresholds[y] : domain[domain.length - 1]
    ];
  };

  scale.copy = function() {
    return d3_scale_quantile(domain, range); // copy on write!
  };

  return rescale();
}

export { d3$scale$quantile, d3_scale_quantile };