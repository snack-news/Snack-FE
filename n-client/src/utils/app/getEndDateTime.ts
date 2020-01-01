import { getNextWeekDay } from '~nclient/utils/date';
import { START_WEEK_DAY } from '~nclient/constants/app';

export const getEndDateTime = (date: Date): Date => {
  const nextStartDateTime = getNextWeekDay(date, START_WEEK_DAY, true);
  const endDateTime = new Date(
    new Date(
      nextStartDateTime.getFullYear(),
      nextStartDateTime.getMonth(),
      nextStartDateTime.getDate()
    ).getTime() - 1
  );

  return endDateTime;
};
