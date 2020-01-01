import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { NewsListPageHeader } from './Header';
import { NewsListPageMain } from './Main/index';

import { PageLayout } from '~nclient/view/components/PageLayout';
import { Footer } from '~nclient/view/components/Footer';

interface Props {}

export const NewsListPage: FC<Props> = () => {
  const match = useRouteMatch('/');

  if (!match || !match.isExact) {
    return null;
  }

  return (
    <PageLayout>
      {{
        header: <NewsListPageHeader />,
        main: <NewsListPageMain />,
        footer: <Footer />,
      }}
    </PageLayout>
  );
};
