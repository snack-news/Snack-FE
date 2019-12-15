import React from 'react';
import styled from 'styled-components';

import { Check } from '~nclient/view/atoms/styles/Icons';

interface Props {
  year: string;
  month: string;
  week: string;
  selected?: boolean;
}

export const Option: React.FC<Props> = ({ year, month, week, selected }) => {
  return (
    <Wrapper>
      {/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
      <Label>{`${year}년 ${month.padStart(2, '0')}월 ${week.padStart(2, '0')}주`}</Label>
      {selected && <SelectedIcon />}
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
