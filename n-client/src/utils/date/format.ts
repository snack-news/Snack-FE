import { getWeekOfMonth, format as dateFnsFormat } from 'date-fns';

/**
 * 참고: https://date-fns.org/v2.6.0/docs/format
 *
 * 추가 사항
 * week of month
 * W: 1 2 3 4 (주)
 * WW: 01 02 03 04 (주)
 * @param param0
 */
export const format: dateFns['format'] = (date, formatStr, options) =>
  dateFnsFormat(date, formatWeekOfMonth(date, formatStr, options), options);

const formatWeekOfMonth: dateFns['format'] = (date, formatStr, options) =>
  formatStr.replace(/W{1,}/g, match => {
    const weekOfMonth = getWeekOfMonth(date, options);
    return `${weekOfMonth}`.padStart(match.length, '0');
  });
