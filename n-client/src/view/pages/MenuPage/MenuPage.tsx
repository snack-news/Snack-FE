import React, { FC } from 'react';

import { Header } from './Header';
import { MenuItemList } from './MenuItemList';

interface Props {}

export const MenuPage: FC<Props> = () => {
  return (
    <>
      <Header />
      <MenuItemList />
    </>
  );
};
