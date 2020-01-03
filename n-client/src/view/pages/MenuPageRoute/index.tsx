import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { MenuPage } from './MenuPage';

import { MENU_PATH } from '~nclient/constants/paths';

interface IProps {}

export const MenuPageRoute: FC<IProps> = () => {
  const match = useRouteMatch(MENU_PATH);

  if (!match || !match.isExact) {
    return null;
  }

  return <MenuPage />;
};
