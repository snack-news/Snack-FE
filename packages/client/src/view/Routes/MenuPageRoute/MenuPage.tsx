import React, { FC } from 'react';

import { MenuPageHeader } from './Header';
import { MenuPageMain } from './Main';
import { MenuPageFooter } from './Footer';

import { PageLayout } from '~src/view/components/PageLayout';

interface IProps {}

export const MenuPage: FC<IProps> = () => (
  <PageLayout>
    {{
      header: <MenuPageHeader />,
      main: <MenuPageMain />,
      footer: <MenuPageFooter />,
    }}
  </PageLayout>
);
