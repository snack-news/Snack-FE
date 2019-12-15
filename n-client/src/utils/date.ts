import { getWeekOfMonth, format as dateFnsFormat } from 'date-fns';

export const SECOUND = 1000;
export const MINUTE = 60 * SECOUND;
export const HOURS = 60 * MINUTE;
export const DAY = 24 * HOURS;

export const SUNDAY = 0;
export const MONDAY = 1;
export const Tuesday = 2;
export const wednesday = 3;
export const ThursDay = 4;
export const Friday = 5;
export const Saturday = 6;

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
  formatStr.replace(/W{1,2}/g, match => {
    const w = getWeekOfMonth(date, options);
    return match === 'WW' ? `${w}`.padStart(2, '0') : `${w}`;
  });

export const getNextWeekDay = (startDate: Date, targetWeekDay: number): Date => {
  const currentWeekDay = startDate.getDay();
  const diff =
    targetWeekDay >= currentWeekDay
      ? targetWeekDay - currentWeekDay
      : 7 + targetWeekDay - currentWeekDay;

  return new Date(startDate.getTime() + DAY * diff);
};

export const getLastDateOfMonth = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0);
