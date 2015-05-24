import { d3_lab_rgb } from '../color/lab';

function d3_interpolateLab(a, b) {
  a = d3_lab(a);
  b = d3_lab(b);
  var al = a.l,
      aa = a.a,
      ab = a.b,
      bl = b.l - al,
      ba = b.a - aa,
      bb = b.b - ab;
  return function(t) {
    return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
  };
}

export { d3_interpolateLab, d3_interpolateLab };