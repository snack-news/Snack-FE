import React, { FC } from 'react';

import styled from 'styled-components';

import { NewsLabel } from './NewsLabel';

import { useFilter } from '../../../../hooks/useFilter/index';

import { Link } from '~src/view/components/Link';
import { BRIGHT_BLUE } from '~src/constants/colors';
import { dateToString } from '~src/utils/date/dateToString';

interface IProps {}

export const DateLabel: FC<IProps> = () => {
  const filter = useFilter();

  if (!filter) return null;

  return (
    <LinkWrap to={`/newslist/week/${new Date(filter.startDateTime).getTime()}`}>
      <NewsLabel style={{ background: BRIGHT_BLUE }}>
        {dateToString(new Date(filter.startDateTime), 'UI_SHORT')}
      </NewsLabel>
    </LinkWrap>
  );
};

const LinkWrap = styled(Link)`
  text-decoration: none;
`;
