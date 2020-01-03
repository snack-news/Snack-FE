import React, { FC } from 'react';
import { useHistory } from 'react-router';

import { useWeeks } from './useWeeks';

import { DrawerSelector } from '~nclient/view/components/DrawerSelector';

interface IProps {
  value?: string;
}

export const SelectWeekRange: FC<IProps> = ({ value }) => {
  const weeks = useWeeks();
  const currentValue = value || weeks[0].value;
  // const [week, setWeek] = useState(value || weeks[0].value);
  const history = useHistory();

  return (
    <DrawerSelector
      options={weeks}
      value={currentValue}
      onClickOption={({ value: newValue }) => {
        if (newValue !== currentValue) {
          history.push(`/newslist/week/${newValue}`);
        }
      }}
      header="조회할 주 선택"
      labelStyle={{
        padding: '0px 20px',
        height: '100%',
      }}
    />
  );
};
