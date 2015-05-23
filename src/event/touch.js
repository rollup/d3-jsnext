import { d3_mousePoint } from './mouse';
import { d3_eventSource } from './event';

var d3$touch = function(container, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = d3_eventSource().changedTouches;
  if (touches) for (var i = 0, n = touches.length, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return d3_mousePoint(container, touch);
    }
  }
};

export { d3$touch };