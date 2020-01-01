import { WeekDay } from './constants';
import { getNextWeekDay } from './getNextWeekDay';

// TODO includeFirstDateOfMonth 로직의 분리가 필요.

/**
 * `min`부터 `max`까지 `Date`들 중에서 `weekDay`과 일치하는 요일을 필터링한 리스트를 리턴한다.
 * `includeFirstDateOfMonth`값이 `true`인 경우 n월 1일을 무조건 포함하여 리턴한다.
 *
 * @param min 리턴되는 date 리스트의 최소값
 * @param max 리턴되는 date 리스트의 최대값
 * @param weekDay 필터링될 요일
 * @param includeFirstDateOfMonth n월 1일 포함 여부
 */
export const getDateListOfWeekDay = (
  min: Date,
  max: Date,
  weekDay: WeekDay,
  includeFirstDateOfMonth: boolean
) => {
  const dateList: Date[] = [];

  for (
    let date = getNextWeekDay(min, weekDay, includeFirstDateOfMonth);
    date.getTime() <= max.getTime();
    date = getNextWeekDay(date, weekDay, includeFirstDateOfMonth)
  ) {
    dateList.push(date);
  }

  return dateList;
};
