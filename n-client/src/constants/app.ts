/* eslint-disable @typescript-eslint/no-magic-numbers */

import { MONDAY, WeekDay } from '~nclient/utils/date';

export const START_WEEK_DAY = MONDAY;
export const END_WEEK_DAY = ((START_WEEK_DAY + 6) % 7) as WeekDay;
