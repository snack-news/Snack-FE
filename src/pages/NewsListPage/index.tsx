import React, { FunctionComponent } from 'react';

import { Header, Tabs, SelectBox, HorizontalDivider, NewsList, Footer } from 'Templates/index';
import { PageLayout } from 'Layouts/index';
import { IFilter } from 'Hooks/useNewsList';

interface INewsListPage {
  filter: IFilter;
}

export const NewsListPage: FunctionComponent<INewsListPage> = ({ filter }) => {
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
            <SelectBox year={filter.year} month={filter.month} week={filter.week} />
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
              isRenderMoreLink: true,
            }}
            filter={filter}
          />
        ),
        footer: <Footer />,
      }}
    </PageLayout>
  );
};
