import { DAY } from './constants';

export const getNextWeekDay = (startDate: Date, targetWeekDay: number): Date => {
  const currentWeekDay = startDate.getDay();
  const diff =
    targetWeekDay >= currentWeekDay
      ? targetWeekDay - currentWeekDay
      : 7 + targetWeekDay - currentWeekDay;

  return new Date(startDate.getTime() + DAY * diff);
};
