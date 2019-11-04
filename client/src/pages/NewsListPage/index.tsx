import React, { FunctionComponent } from 'react';

import {
  Header,
  SelectBox,
  HorizontalDivider,
  NewsList,
  Footer,
} from '~client/templates/index';
import { PageLayout } from '~client/layouts/index';
import { IFilter } from '~client/hooks/useNewsList';

interface INewsListPage {
  filter: IFilter;
  newsId?: number;
}

export const NewsListPage: FunctionComponent<INewsListPage> = ({
  filter,
  newsId,
}) => {
  // TODO url로 전달된 props를 NewsList 컴포넌트로 전달

  return (
    <PageLayout>
      {{
        header: (
          <>
            <Header />
            <HorizontalDivider />
            <HorizontalDivider thick />
            <SelectBox
              year={filter.year}
              month={filter.month}
              week={filter.week}
            />
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
            newsId={newsId}
            filter={filter}
          />
        ),
        footer: <Footer />,
      }}
    </PageLayout>
  );
};
