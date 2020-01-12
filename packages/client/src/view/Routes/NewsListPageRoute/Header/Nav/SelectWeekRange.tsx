import React, { FC } from 'react';
import { useHistory } from 'react-router';

import { useWeeks } from './useWeeks';

import { DrawerSelector } from '~src/view/components/DrawerSelector';

interface IProps {
  currentValue: string;
}

export const SelectWeekRange: FC<IProps> = ({ currentValue }) => {
  const weeks = useWeeks();
  // const [week, setWeek] = useState(value || weeks[0].value);
  const history = useHistory();

  return (
    <DrawerSelector
      options={weeks}
      selectedValue={currentValue}
      onClickOption={({ value: newValue }) => {
        if (newValue !== currentValue) {
          history.push(`/newslist/week/${newValue}`);
        }
      }}
      title="조회할 주 선택"
    />
  );
};
