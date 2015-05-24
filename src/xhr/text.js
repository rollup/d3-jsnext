import { d3_xhrType } from './xhr';

var d3$text;

d3$text = d3_xhrType(function(request) {
  return request.responseText;
});

export { d3$text };