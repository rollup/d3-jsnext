import { d3_geo_projection } from './projection';

function d3_geo_equirectangular(λ, φ) {
  return [λ, φ];
}

(var d3$geo$equirectangular = function() {
  return d3_geo_projection(d3_geo_equirectangular);
}).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;

export { d3$geo$equirectangular };