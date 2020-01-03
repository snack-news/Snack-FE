import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { Nav } from './Nav';

import { Header } from '~nclient/view/components/Header';
import { HorizontalDivider } from '~nclient/view/components/HorizontalDivider';
import { CORPS_PATH } from '~nclient/constants/paths';

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
