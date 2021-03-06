import { d3_xhr } from './xhr';

var d3$json;

d3$json = function(url, callback) {
  return d3_xhr(url, "application/json", d3_json, callback);
};

function d3_json(request) {
  return JSON.parse(request.responseText);
}

export { d3$json, d3_json };