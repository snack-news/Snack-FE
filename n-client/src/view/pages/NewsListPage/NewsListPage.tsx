import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { Nav } from './Nav';
import { NewsList } from './NewsList';

import { Header } from '~nclient/view/components/Header';
import { HorizontalDivider } from '~nclient/view/components/HorizontalDivider';
import { PageLayout } from '~nclient/view/components/PageLayout';
import { Footer } from '~nclient/view/components/Footer';
import { Root } from '~nclient/view/components/Root';

interface Props {}

export const NewsListPage: FC<Props> = () => {
  const match = useRouteMatch('/menu');

  if (!match || !match.isExact) {
    return null;
  }

  return (
    <Root>
      <PageLayout>
        {{
          header: (
            <>
              <Header />
              <HorizontalDivider />
              <Nav />
              <HorizontalDivider thick />
            </>
          ),
          main: <NewsList />,
          footer: <Footer />,
        }}
      </PageLayout>
    </Root>
  );
};
