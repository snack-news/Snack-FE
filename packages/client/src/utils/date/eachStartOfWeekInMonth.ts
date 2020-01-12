import { addDays, startOfDay } from 'date-fns';

import { MIN, MAX } from './constants';
import { startOfWeekOrMonth } from './startOfWeekOrMonth';
import { endOfWeekOrMonth } from './endOfWeekOrMonth';

// TODO 년단위로 불러오는 함수를 이용한 성능 최적화 작업 필요
export const eachStartOfWeekOrMonth = () => {
  const dateList: Date[] = [];

  for (
    let date = startOfWeekOrMonth(MIN);
    date.getTime() <= MAX.getTime();
    date = startOfDay(addDays(endOfWeekOrMonth(date), 1))
  ) {
    dateList.push(date);
  }

  return dateList;
};
