import { format } from 'date-fns';

import { GetParams } from './api/types';
import { NewsFilter, NewsFilterWithWeek, NewsFilterOptions, DateRange, WeeklyDateRange } from './types';

export const parseNewsFIlterToGetParams = (newsFilter: NewsFilter): GetParams => ({
  ...parseDateRange(newsFilter),
  ...parseNewsFIlterOptions(newsFilter),
});

export const parseNewsFIlterWithWeekToGetParams = (newsFilter: NewsFilterWithWeek): GetParams => ({
  ...parseWeekDateRange(newsFilter),
  ...parseNewsFIlterOptions(newsFilter),
});

const parseNewsFIlterOptions = (newsFilterOptions: NewsFilterOptions): Omit<GetParams, 'startDateTime' | 'endDateTime'> => ({
  ...(newsFilterOptions.categoryId ? { categoryId: newsFilterOptions.categoryId.join(',') } : {}),
  ...(newsFilterOptions.topicIds ? { topicIds: newsFilterOptions.topicIds.join(',') } : {}),
  ...(newsFilterOptions.tagIds ? { tagIds: newsFilterOptions.tagIds.join(',') } : {}),
});

const parseDateRange = ({ startDateTime, endDateTime }: DateRange): Pick<GetParams, 'startDateTime' | 'endDateTime'> => ({
  startDateTime: dateToString(startDateTime),
  endDateTime: dateToString(endDateTime),
});

const parseWeekDateRange = (weeklyDateRange: WeeklyDateRange): Pick<GetParams, 'startDateTime' | 'endDateTime'> => {
  const endDateTime = getLastDateOfWeek(weeklyDateRange);
  const startDateTime = getFirstDateOfWeek(endDateTime);

  return parseDateRange({
    startDateTime,
    endDateTime,
  });
};

const getLastDateOfWeek = ({ year, month, weekNth }: WeeklyDateRange): Date => {
  const fixedMonth = month - 1;
  const firstWeekLength = 7 - (new Date(year, fixedMonth, 1).getDay() || 7) - 1;

  let lastDateOfWeek = new Date(year, fixedMonth, firstWeekLength + 7 * (weekNth - 1));
  if (lastDateOfWeek.getFullYear() !== year || lastDateOfWeek.getMonth() !== month) {
    lastDateOfWeek = new Date(year, fixedMonth + 1, 0);
  }

  return lastDateOfWeek;
};

const getFirstDateOfWeek = (target: Date): Date => {
  let firstDateOfWeek = new Date(target.getTime() - 1000 * 60 * 60 * 24 * 6);
  if (firstDateOfWeek.getFullYear() !== target.getFullYear() || firstDateOfWeek.getMonth() !== target.getMonth()) {
    firstDateOfWeek = new Date(target.getFullYear(), target.getMonth(), 1);
  }

  return firstDateOfWeek;
};

const dateToString = (date: Date) => format(date, 'YYYY-MM-DD[T]hh:mm');
