import { d3_locale_timeFormat } from './time-format';
import { d3_locale_numberFormat } from './number-format';

var d3$locale;

d3$locale = function(locale) {
  return {
    numberFormat: d3_locale_numberFormat(locale),
    timeFormat: d3_locale_timeFormat(locale)
  };
};

export { d3$locale };