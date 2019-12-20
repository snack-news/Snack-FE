import { useMemo } from 'react';

import { Option } from '~nclient/view/components/DrawerSelector';
import { format, dateToString, getNextStartDateTime, getEndDateTime } from '~nclient/utils/date';

export const useWeeks = () => {
  const weeks = useMemo(getWeekOfMonthList, []);
  return weeks;
};

const getWeekOfMonthList = () => {
  const MIN = new Date(2018, 7, 1).getTime();
  const MAX = new Date().getTime();

  const weekOfMonthList: Option[] = [];

  for (
    let startDateTime = MIN;
    startDateTime <= MAX;
    startDateTime = getNextStartDateTime(startDateTime)
  )
    weekOfMonthList.push(createWeekRange(startDateTime, getEndDateTime(startDateTime)));

  return weekOfMonthList;
};

const createWeekRange = (startDateTime: Date | number, endDateTime: Date | number): Option => {
  const value = JSON.stringify({
    startDateTime: dateToString(startDateTime),
    endDateTime: dateToString(endDateTime),
  });

  return {
    value,
    optionLabel: format(startDateTime, 'yyyy년 MM월 WW주'),
    label: format(startDateTime, 'MM월 WW주'),
  };
};
