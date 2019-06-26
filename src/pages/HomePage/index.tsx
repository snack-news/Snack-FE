import React from 'react';

import { Header, Tabs, SelectBox, HorizontalDivider, NewsList, Footer } from 'Templates/index';
import { PageLayout } from 'Layouts/index';

const HomePage = () => (
  <PageLayout>
    {{
      header: (
        <React.Fragment>
          <Header />
          <HorizontalDivider />
          <Tabs />
          <HorizontalDivider thick />
          <SelectBox />
          <HorizontalDivider thick />
        </React.Fragment>
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

export default HomePage;
