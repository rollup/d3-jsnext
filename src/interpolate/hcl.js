import { d3_hcl_lab } from '../color/hcl';

function d3_interpolateHcl(a, b) {
  a = d3_hcl(a);
  b = d3_hcl(b);
  var ah = a.h,
      ac = a.c,
      al = a.l,
      bh = b.h - ah,
      bc = b.c - ac,
      bl = b.l - al;
  if (isNaN(bc)) bc = 0, ac = isNaN(ac) ? b.c : ac;
  if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah;
  else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360; // shortest path
  return function(t) {
    return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
  };
}

export { d3_interpolateHcl };