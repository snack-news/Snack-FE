import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { Header } from './Header';
import { MenuItemList } from './MenuItemList';
import { Footer } from './Footer';

import { HorizontalDivider } from '~nclient/view/components/HorizontalDivider';
import { PageLayout } from '~nclient/view/components/PageLayout';
import { Root } from '~nclient/view/components/Root';

interface Props {}

export const MenuPage: FC<Props> = () => {
  const match = useRouteMatch('/menu');

  if (!match || !match.isExact) {
    return null;
  }

  return (
    <Root>
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
    </Root>
  );
};
