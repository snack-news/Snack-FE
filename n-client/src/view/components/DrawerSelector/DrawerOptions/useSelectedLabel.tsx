import { useMemo } from 'react';
import { oc } from 'ts-optchain';

import { useSelectedOption } from './useSelectedOption';
import { IOption } from '../IOption';

export const useSelectedLabel = ({
  options,
  selectedValue,
}: {
  options: IOption[];
  selectedValue?: string;
}) => {
  const selectedOption = useSelectedOption({ options, selectedValue });
  const selectedLabel = useMemo(() => oc(selectedOption).label('선택된 값이 없습니다'), [
    selectedOption,
  ]);

  return selectedLabel;
};
