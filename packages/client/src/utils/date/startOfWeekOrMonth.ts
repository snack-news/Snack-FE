import { startOfMonth } from 'date-fns';

import { startOfWeek } from './startOfWeek';

export const startOfWeekOrMonth = (date: Date) => {
  const startDateOfWeek = startOfWeek(date);
  const startDateOfMonth = startOfMonth(date);

  const isInMonth = startDateOfWeek.getMonth() === startDateOfMonth.getMonth();

  return isInMonth ? startDateOfWeek : startDateOfMonth;
};
