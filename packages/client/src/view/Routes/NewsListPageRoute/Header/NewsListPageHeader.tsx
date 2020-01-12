import React, { FC } from 'react';

import { Nav } from './Nav';

import { Header } from '~src/view/components/Header';
import { HorizontalDivider } from '~src/view/components/HorizontalDivider';

interface IProps {
  startDateTime: string;
}

export const NewsListPageHeader: FC<IProps> = ({ startDateTime }) => (
  <>
    <Header />
    <HorizontalDivider />
    <Nav startDateTime={startDateTime} />
    <HorizontalDivider thick />
  </>
);
