import React from 'react';
import styled from 'styled-components';

import { WeekSelector } from '../WeekSelector';

import { black } from '~nclient/view/atoms/styles/colors';
import { Medium } from '~nclient/view/atoms/styles/fonts';
import { DownarrowFilter } from '~nclient/view/atoms/styles/Icons';

interface Props {}

export const SelectWeekRange: React.FC<Props> = () => {
  return (
    <>
      <Wrapper>
        <Label>1월 2주</Label>
        <DownarrowFilterStyled />
      </Wrapper>
      <WeekSelector />
    </>
  );
};

const Wrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  background: transparent;
  border-width: 0;
  padding: 8px 20px;
`;

const DownarrowFilterStyled = styled(DownarrowFilter)`
  display: block;
  width: 13px;
  padding: 0px 10px;
`;

const Label = styled.span`
  ${Medium}
  color: ${black};
`;
