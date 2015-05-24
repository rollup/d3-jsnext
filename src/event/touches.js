import { d3_mousePoint } from './mouse';
import { d3_array } from '../core/array';
import { d3_eventSource } from './event';

var d3$touches;
var undefined;

d3$touches = function(container, touches) {
  if (arguments.length < 2) touches = d3_eventSource().touches;
  return touches ? d3_array(touches).map(function(touch) {
    var point = d3_mousePoint(container, touch);
    point.identifier = touch.identifier;
    return point;
  }) : [];
};

export { d3$touches };