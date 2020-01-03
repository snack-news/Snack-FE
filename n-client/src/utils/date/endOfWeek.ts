import { endOfWeek as dateFnsEndOfWeek } from 'date-fns';

import { WEEK_START_DAY } from './constants';

export const endOfWeek = (date: Date) => dateFnsEndOfWeek(date, { weekStartsOn: WEEK_START_DAY });
