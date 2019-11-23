import React, { FC } from 'react';

import { Header } from './Header';
import { MenuItemList } from './MenuItemList';
import { Footer } from './Footer';

import { HorizontalDivider } from '~nclient/view/atoms/Figures/HorizontalDivider';
import { PageLayout } from '~nclient/view/components/PageLayout';

interface Props {}

export const MenuPage: FC<Props> = () => {
  return (
    <PageLayout>
      {{
        header: <Header />,
        main: <MenuItemList />,
        footer: (
          <>
            <HorizontalDivider />
            <Footer />
          </>
        ),
      }}
    </PageLayout>
  );
};
