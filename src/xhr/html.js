import { d3_document } from '../core/document';
import { d3_xhr } from './xhr';

var d3$html = function(url, callback) {
  return d3_xhr(url, "text/html", d3_html, callback);
};

function d3_html(request) {
  var range = d3_document.createRange();
  range.selectNode(d3_document.body);
  return range.createContextualFragment(request.responseText);
}

export { d3$html };