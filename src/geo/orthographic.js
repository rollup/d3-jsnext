import { d3_geo_projection } from './projection';
import { d3_geo_azimuthal } from './azimuthal';

var d3_geo_orthographic = d3_geo_azimuthal(
  function() { return 1; },
  Math.asin
);

(var d3$geo$orthographic = function() {
  return d3_geo_projection(d3_geo_orthographic);
}).raw = d3_geo_orthographic;

export { d3$geo$orthographic };