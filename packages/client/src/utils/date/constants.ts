/* eslint-disable @typescript-eslint/no-magic-numbers */

export const SECOUND = 1000;
export const MINUTE = 60 * SECOUND;
export const HOURS = 60 * MINUTE;
export const DAY = 24 * HOURS;

export const SUNDAY = 0;
export const MONDAY = 1;
export const Tuesday = 2;
export const wednesday = 3;
export const ThursDay = 4;
export const Friday = 5;
export const Saturday = 6;

export const WEEK_DAY_LENGTH = 7;

export type WeekDay =
  | typeof SUNDAY
  | typeof MONDAY
  | typeof Tuesday
  | typeof wednesday
  | typeof ThursDay
  | typeof Friday
  | typeof Saturday;

export const WEEK_START_DAY = MONDAY;
export const WEEK_END_DAY = ((WEEK_START_DAY + 6) % 7) as WeekDay;

export const NOW = new Date();
export const MIN = new Date(2018, 7, 1);
export const MAX = NOW;
