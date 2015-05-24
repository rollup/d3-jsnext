import { d3_geo_projection } from './projection';

var undefined;
var d3$geo$equirectangular;

function d3_geo_equirectangular(λ, φ) {
  return [λ, φ];
}

(d3$geo$equirectangular = function() {
  return d3_geo_projection(d3_geo_equirectangular);
}).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;

export { d3$geo$equirectangular, d3_geo_equirectangular };