import { startOfWeek as dateFnsStartOfWeek } from 'date-fns';

import { WEEK_START_DAY } from './constants';

export const startOfWeek = (date: Date) =>
  dateFnsStartOfWeek(date, { weekStartsOn: WEEK_START_DAY });
