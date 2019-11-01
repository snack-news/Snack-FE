import dateFns from 'date-fns';

/**
 * 참고: https://date-fns.org/v2.6.0/docs/format
 *
 * 추가 사항
 * week of month
 * W: 1 2 3 4 (주)
 * WW: 01 02 03 04 (주)
 * @param param0
 */
export const format: dateFns['format'] = (date, format, options) => {
  const d = dateFns.toDate(date);
  d;
  dateFns.format;
};
