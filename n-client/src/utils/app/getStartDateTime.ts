import { START_WEEK_DAY } from '~nclient/constants/app';
import { getPreWeekDay } from '~nclient/utils/date';

export const getStartDateTime = (date: Date): Date =>
  getPreWeekDay(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    START_WEEK_DAY,
    true
  );
