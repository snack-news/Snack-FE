import { useMemo } from 'react';

import { Option } from './Option';

export const useSelectedOption = ({ options, value }: { options: Option[]; value?: string }) => {
  const selectedOption = useMemo(() => {
    const newOption = options.find(o => o.value === value);
    return newOption;
  }, [options, value]);

  return selectedOption;
};
