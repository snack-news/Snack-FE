import React, { FC } from 'react';

import { Option } from './Option';
import { IOption } from '../../IOption';

interface IProps {
  onClickOption?: (option: IOption) => void;
  options: IOption[];
  selectedValue?: string;
}

export const Options: FC<IProps> = ({ onClickOption, options, selectedValue }) => (
  <>
    {options.map(option => (
      <Option
        key={option.value}
        onClick={() => onClickOption && onClickOption(option)}
        selected={selectedValue === option.value}
      >
        {option.optionLabel}
      </Option>
    ))}
  </>
);
