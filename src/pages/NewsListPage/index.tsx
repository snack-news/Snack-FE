import React from 'react';

import { Header, Tabs, SelectBox, HorizontalDivider, NewsList, Footer } from 'Templates/index';
import { PageLayout } from 'Layouts/index';

export const NewsListPage = () => {
  // TODO url로 전달된 props를 NewsList 컴포넌트로 전달

  return (
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
            companyListCardProps={{
              title: '회사별 뉴스 모아보기',
              isRenderMoreLink: true,
            }}
          />
        ),
        footer: <Footer />,
      }}
    </PageLayout>
  );
};
