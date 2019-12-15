import React from 'react';
import styled from 'styled-components';

import { OptionComponent, Option } from './OptionComponent';

interface Props {
  onClickOption?: (option: Option) => void;
  options: Option[];
  value?: string;
}

export const Options: React.FC<Props> = ({ onClickOption, options, value }) => (
  <Wrapper>
    {options.map(option => (
      <OptionComponent
        key={option.value}
        value={option.value}
        label={option.label}
        optionLabel={option.optionLabel}
        onClick={onClickOption}
        selected={option.value === value}
      />
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  overflow: auto;
  max-height: 375px;
`;
