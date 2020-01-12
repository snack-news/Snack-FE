import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { CorpsPage } from './CorpsPage';

import { CORPS_PATH } from '~src/constants/paths';

interface IProps {}

export const CorpsPageRoute: FC<IProps> = () => {
  const match = useRouteMatch(CORPS_PATH);

  if (!match || !match.isExact) {
    return null;
  }

  return <CorpsPage />;
};
