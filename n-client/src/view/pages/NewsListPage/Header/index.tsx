import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { Nav } from './Nav';

import { Header } from '~nclient/view/components/Header';
import { HorizontalDivider } from '~nclient/view/components/HorizontalDivider';

interface Props {}

export const NewsListPageHeader: FC<Props> = () => {
  const match = useRouteMatch('/');

  if (!match || !match.isExact) {
    return null;
  }

  return (
    <>
      <Header />
      <HorizontalDivider />
      <Nav />
      <HorizontalDivider thick />
    </>
  );
};
