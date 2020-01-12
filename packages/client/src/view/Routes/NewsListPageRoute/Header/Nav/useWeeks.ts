import { useMemo } from 'react';

import { IOption } from '~src/view/components/DrawerSelector/IOption';
import { eachStartOfWeekOrMonth } from '~src/utils/date/eachStartOfWeekInMonth';
import { dateToString } from '~src/utils/date/dateToString';

export const useWeeks = () => {
  const weeks = useMemo(
    () =>
      eachStartOfWeekOrMonth()
        .reverse()
        .map(createWeekRange),
    []
  );
  return weeks;
};

const createWeekRange = (date: Date): IOption => ({
  value: `${date.getTime()}`,
  optionLabel: dateToString(date, 'UI'),
  label: dateToString(date, 'UI_SHORT'),
});
