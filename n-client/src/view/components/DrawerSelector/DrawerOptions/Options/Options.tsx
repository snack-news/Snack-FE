import React from 'react';
import styled from 'styled-components';

import { OptionItem } from './OptionItem';
import { Option } from '../../Option';

interface Props {
  onClickOption?: (option: Option) => void;
  options: Option[];
  value?: string;
}

export const Options: React.FC<Props> = ({ onClickOption, options, value }) => (
  <Wrapper>
    {options.map(option => (
      <OptionItem
        key={option.value}
        onClick={() => onClickOption && onClickOption(option)}
        selected={option.value === value}
      >
        {option.optionLabel}
      </OptionItem>
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  overflow: auto;
  max-height: 375px;
`;
