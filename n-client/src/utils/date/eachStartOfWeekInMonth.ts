import { addDays } from 'date-fns';

import { startOfWeekOrMonth } from './startOfWeekOrMonth';
import { MIN, MAX } from './constants';

// TODO 년단위로 불러오는 함수를 이용한 성능 최적화 작업 필요
export const eachStartOfWeekOrMonth = () => {
  const dateList: Date[] = [];

  let i = 0;
  for (
    let date = startOfWeekOrMonth(MIN);
    date.getTime() <= MAX.getTime() && i < 10;
    date = startOfWeekOrMonth(addDays(date, 1))
  ) {
    dateList.push(date);
    i++;
  }

  return dateList;
};
