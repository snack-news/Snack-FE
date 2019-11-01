import React, { FC } from 'react';
import styled from 'styled-components';

import { littleMedium } from '../styles/fonts';

import { brightBlue } from '../styles/colors';

import { format } from '~nclient/utils/date';

interface WeekLabelProps {
  date: number | Date;
}

export const WeekLabel: FC<WeekLabelProps> = ({ date }) => (
  <WeekLabelStyled>{format(date, 'yyyy년 MM월 WW주')}</WeekLabelStyled>
);

const WeekLabelStyled = styled.div`
  ${littleMedium}
  color: ${brightBlue};
`;
