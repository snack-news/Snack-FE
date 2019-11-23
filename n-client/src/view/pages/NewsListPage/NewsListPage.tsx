import React, { FC } from 'react';

import { Nav } from './Nav';
import { NewsList } from './NewsList';
import { WeekSelector } from './WeekSelector';

import { Header } from '~nclient/view/components/Header';
import { HorizontalDivider } from '~nclient/view/atoms/Figures/HorizontalDivider';
import { PageLayout } from '~nclient/view/components/PageLayout';
import { Footer } from '~nclient/view/components/Footer';

interface Props {
  newsList: News[];
}

export const NewsListPage: FC<Props> = ({ newsList }) => (
  <>
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
        main: <NewsList newsList={newsList} />,
        footer: <Footer />,
      }}
    </PageLayout>
    <WeekSelector />
  </>
);
