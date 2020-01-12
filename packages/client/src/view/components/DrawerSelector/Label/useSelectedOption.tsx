import { useMemo } from 'react';

import { IOption } from '../IOption';

export const useSelectedOption = ({
  options,
  selectedValue,
}: {
  options: IOption[];
  selectedValue?: string;
}) => useMemo(() => options.find(({ value }) => selectedValue === value), [options, selectedValue]);
