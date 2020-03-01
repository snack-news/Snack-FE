import React, { FC } from 'react';

import styled from 'styled-components';

import { NewsLabel } from './NewsLabel';

import { useFilter } from '../../../../hooks/useFilter/index';

import { Link } from '~src/view/components/Link';
import { BRIGHT_BLUE } from '~src/constants/colors';
import { dateToString } from '~src/utils/date/dateToString';
import { NOW } from '~src/utils/date/constants';

interface IProps {}

export const DateLabel: FC<IProps> = () => {
  const filter = useFilter();

  if (!filter) return null;

  const startDate = new Date(filter.startDateTime);

  return (
    <LinkWrap to={`/newslist/week/${new Date(filter.startDateTime).getTime()}`}>
      <NewsLabel style={{ background: BRIGHT_BLUE }}>
        {NOW.getFullYear() === startDate.getFullYear()
          ? dateToString(startDate, 'UI_SHORT')
          : dateToString(startDate, 'UI')}
      </NewsLabel>
    </LinkWrap>
  );
};

const LinkWrap = styled(Link)`
  text-decoration: none;
`;
