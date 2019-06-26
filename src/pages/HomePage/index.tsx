import React from 'react';

import { Header, Tabs, SelectBox, HorizontalDivider, NewsList, Footer } from 'Templates/index';
import { PageLayout } from 'Layouts/index';

export const HomePage = () => (
  <PageLayout>
    {{
      header: (
        <>
          <Header />
          <HorizontalDivider />
          <Tabs />
          <HorizontalDivider thick />
          <SelectBox />
          <HorizontalDivider thick />
        </>
      ),
      body: (
        <NewsList
          newsOptionProps={{ isRenderHighlightTag: true }}
          isRenderCompanyListCard
          isRenderContactCard
          isRenderPlatformListCard
          isRenderRecommendNewsList
          companyListCardProps={{ title: '회사별 뉴스 모아보기', isRenderMoreLink: true }}
        />
      ),
      footer: <Footer />,
    }}
  </PageLayout>
);
