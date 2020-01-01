import { addDays } from 'date-fns';

import { WeekDay, WEEK_DAY_LENGTH } from './constants';

// TODO includeFirstDateOfMonth 로직의 분리가 필요.

export const getPreWeekDay = (
  date: Date,
  nextWeekDay: WeekDay,
  includeFirstDateOfMonth?: boolean
): Date => {
  const weekDay = date.getDay();

  let nextDate;
  if (weekDay === nextWeekDay) {
    nextDate = addDays(date, -WEEK_DAY_LENGTH);
  } else {
    const diff = (-WEEK_DAY_LENGTH + nextWeekDay - weekDay) % WEEK_DAY_LENGTH;

    nextDate = addDays(date, diff);
  }

  if (includeFirstDateOfMonth && date.getMonth() !== nextDate.getMonth()) {
    nextDate = new Date(date.getFullYear(), date.getMonth(), 1);
  }

  return nextDate;
};
