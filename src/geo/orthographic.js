import { d3_geo_projection } from './projection';
import { d3_geo_azimuthal } from './azimuthal';
import { d3$geo } from './geo';

var d3$geo$orthographic;

var d3_geo_orthographic = d3_geo_azimuthal(
  function() { return 1; },
  Math.asin
);

(d3$geo$orthographic = function() {
  return d3_geo_projection(d3_geo_orthographic);
}).raw = d3_geo_orthographic;

export { d3$geo$orthographic, d3_geo_orthographic };