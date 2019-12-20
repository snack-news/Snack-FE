import React, { FC } from 'react';

import { Nav } from './Nav';
import { NewsList } from './NewsList';

import { Header } from '~nclient/view/components/Header';
import { HorizontalDivider } from '~nclient/view/atoms/Figures/HorizontalDivider';
import { PageLayout } from '~nclient/view/components/PageLayout';
import { Footer } from '~nclient/view/components/Footer';
import { Root } from '~nclient/view/components/Root';

interface Props {}

export const NewsListPage: FC<Props> = () => (
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
