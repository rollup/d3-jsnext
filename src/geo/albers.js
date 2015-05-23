// ESRI:102003
var d3$geo$albers = function() {
  return d3.geo.conicEqualArea()
      .rotate([96, 0])
      .center([-.6, 38.7])
      .parallels([29.5, 45.5])
      .scale(1070);
};

export { d3$geo$albers };