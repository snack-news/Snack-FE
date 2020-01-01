import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { Nav } from './Nav';

import { Header } from '~nclient/view/components/Header';
import { HorizontalDivider } from '~nclient/view/components/HorizontalDivider';
import { corpsPath } from '~nclient/constants/paths';

interface Props {}

export const CorpsPageHeader: FC<Props> = () => {
  const match = useRouteMatch(corpsPath);

  if (!match || !match.isExact) {
    return null;
  }

  return (
    <>
      <Header />
      <HorizontalDivider />
      <Nav />
      <HorizontalDivider />
    </>
  );
};
