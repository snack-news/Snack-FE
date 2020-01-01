import { addDays } from 'date-fns';

const DAY_LENGTH = 7;

export const getNextWeekDay = (date: Date, nextWeekDay: number): Date => {
  const weekDay = date.getDay();

  const diff = (DAY_LENGTH + nextWeekDay - weekDay) % DAY_LENGTH;

  return addDays(date, diff);
};
