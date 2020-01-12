import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { Nav } from './Nav';

import { Header } from '~src/view/components/Header';
import { HorizontalDivider } from '~src/view/components/HorizontalDivider';
import { CORPS_PATH } from '~src/constants/paths';

interface IProps {}

export const CorpsPageHeader: FC<IProps> = () => {
  const match = useRouteMatch(CORPS_PATH);

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
