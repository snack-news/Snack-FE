import React from 'react';
import styled from 'styled-components';

import { Option } from './Option';

interface Props {}

export const Options: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Option selected year="2019" month="1" week="1" />
      <Option year="2019" month="1" week="1" />
      <Option year="2019" month="1" week="1" />
      <Option year="2019" month="1" week="1" />
      <Option year="2019" month="1" week="1" />
      <Option year="2019" month="1" week="1" />
      <Option year="2019" month="1" week="1" />
      <Option year="2019" month="1" week="1" />
      <Option year="2019" month="1" week="1" />
      <Option year="2019" month="1" week="1" />
      <Option year="2019" month="1" week="1" />
      <Option year="2019" month="1" week="1" />
      <Option year="2019" month="1" week="1" />
      <Option year="2019" month="1" week="1" />
      <Option year="2019" month="1" week="1" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: auto;
  max-height: 375px;
`;
