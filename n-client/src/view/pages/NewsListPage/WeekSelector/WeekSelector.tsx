import React from 'react';

import { Header } from './Header';
import { Options } from './Options';

import { HorizontalDivider } from '~nclient/view/atoms/Figures/HorizontalDivider';
import { BottomDrawer } from '~nclient/view/components/Drawer';

interface Props {}

export const WeekSelector: React.FC<Props> = () => {
  return (
    <BottomDrawer>
      <Header />
      <HorizontalDivider />
      <Options />
    </BottomDrawer>
  );
};
