import dateFnsFormatOrg from 'date-fns/format';
import getWeekOfMonthOrg from 'date-fns/getWeekOfMonth';
import memoize from 'lodash/memoize';

const WW_MAX_LENGTH = 2;

/**
 * 참고: https://date-fns.org/v2.6.0/docs/format
 *
 * 추가 사항
 * week of month
 * W: 1 2 3 4 (주)
 * WW: 01 02 03 04 (주)
 * @param param0
 */
export const format: dateFns['format'] = memoize((date, formatStr, options) =>
  dateFnsFormat(date, formatWeekOfMonth(date, formatStr, options), options)
);

const formatWeekOfMonth: dateFns['format'] = memoize(
  (date, formatStr, options) =>
    formatStr.replace(/W{1,2}/g, match => {
      const w = getWeekOfMonth(date, options);
      return match === 'WW' ? `${w}`.padStart(WW_MAX_LENGTH, '0') : `${w}`;
    })
);

const dateFnsFormat = memoize(dateFnsFormatOrg);

const getWeekOfMonth = memoize(getWeekOfMonthOrg);
