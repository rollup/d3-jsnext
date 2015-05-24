import { d3_xhrType } from './xhr';

var d3$xml;

d3$xml = d3_xhrType(function(request) {
  return request.responseXML;
});

export { d3$xml };