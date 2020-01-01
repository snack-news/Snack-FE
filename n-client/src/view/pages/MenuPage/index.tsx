import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { MenuPageHeader } from './Header';
import { MenuPageMain } from './Main';
import { MenuPageFooter } from './Footer';

import { PageLayout } from '~nclient/view/components/PageLayout';
import { menuPath } from '~nclient/constants/paths';

interface Props {}

export const MenuPage: FC<Props> = () => {
  const match = useRouteMatch(menuPath);

  if (!match || !match.isExact) {
    return null;
  }

  return (
    <PageLayout>
      {{
        header: <MenuPageHeader />,
        main: <MenuPageMain />,
        footer: <MenuPageFooter />,
      }}
    </PageLayout>
  );
};
