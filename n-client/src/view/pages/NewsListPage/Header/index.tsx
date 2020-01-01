import React, { FC } from 'react';

import { Nav } from './Nav';

import { Header } from '~nclient/view/components/Header';
import { HorizontalDivider } from '~nclient/view/components/HorizontalDivider';

interface Props {
  startDateTime?: string;
}

export const NewsListPageHeader: FC<Props> = ({ startDateTime }) => (
  <>
    <Header />
    <HorizontalDivider />
    <Nav startDateTime={startDateTime} />
    <HorizontalDivider thick />
  </>
);
