import { d3_geo_projection } from './projection';
import { d3_identity } from '../core/identity';
import { d3_geo_azimuthal } from './azimuthal';
import { d3$geo } from './geo';

var d3$geo$azimuthalEquidistant;

var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(
  function(cosλcosφ) { var c = Math.acos(cosλcosφ); return c && c / Math.sin(c); },
  d3_identity
);

(d3$geo$azimuthalEquidistant = function() {
  return d3_geo_projection(d3_geo_azimuthalEquidistant);
}).raw = d3_geo_azimuthalEquidistant;

export { d3$geo$azimuthalEquidistant, d3_geo_azimuthalEquidistant };