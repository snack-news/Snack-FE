import { endOfMonth } from 'date-fns';

import { endOfWeek } from './endOfWeek';

export const endOfWeekOrMonth = (date: Date) => {
  const endDateOfWeek = endOfWeek(date);
  const endDateOfMonth = endOfMonth(date);

  const isInMonth = endDateOfWeek.getMonth() === endDateOfMonth.getMonth();

  return isInMonth ? endDateOfWeek : endDateOfMonth;
};
