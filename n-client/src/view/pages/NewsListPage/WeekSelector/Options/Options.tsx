import React from 'react';
import styled from 'styled-components';

import { Option } from './Option';
import { useOptions } from './useOptions';

interface Props {}

export const Options: React.FC<Props> = () => {
  const options = useOptions();
  return (
    <Wrapper>
      {options.map(option => (
        <Option year={option.year} month={option.month} week={option.week} />
      ))}
      {/* <Option selected year="2019" month="1" week="1" /> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: auto;
  max-height: 375px;
`;
