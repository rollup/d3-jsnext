import { d3_geo_projection } from './projection';
import { d3_geo_azimuthal } from './azimuthal';

var d3$geo$azimuthalEqualArea;

var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(
  function(cosλcosφ) { return Math.sqrt(2 / (1 + cosλcosφ)); },
  function(ρ) { return 2 * Math.asin(ρ / 2); }
);

(d3$geo$azimuthalEqualArea = function() {
  return d3_geo_projection(d3_geo_azimuthalEqualArea);
}).raw = d3_geo_azimuthalEqualArea;

export { d3$geo$azimuthalEqualArea, d3_geo_azimuthalEqualArea };