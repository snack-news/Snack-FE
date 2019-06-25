import React, { Fragment } from 'react';

import { Header, Tabs, SelectBox, HorizontalDivider, Footer, NewsList } from 'Templates/index';
import { PageLayout } from 'Layouts/index';

export const HomePage = () => (
  <PageLayout>
    {{
      header: (
        <Fragment>
          <Header />
          <HorizontalDivider />
          <Tabs />
          <HorizontalDivider thick />
          <SelectBox />
          <HorizontalDivider thick />
        </Fragment>
      ),
      body: (
        <NewsList
          newsOptionProps={{ isRenderHighlightTag: true }}
          isRenderCompanyListCard
          isRenderContactCard
          isRenderPlatformListCard
          isRenderRecommendNewsList
        />
      ),
      footer: <Footer />,
    }}
  </PageLayout>
);
