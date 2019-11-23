import React from 'react';
import styled from 'styled-components';

import { Check } from '~nclient/view/atoms/styles/Icons';

interface Props {}

export const Item: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Label>2019년 11월 03주</Label>
      <SelectedIcon />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 20px 0 20px;
  height: 47px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: rgb(18, 17, 17);
`;

const SelectedIcon = styled(Check)`
  width: 14px;
`;
