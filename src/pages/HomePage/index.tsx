import React from 'react';

import { Header, Tabs, SelectBox, HorizontalDivider, NewsList, Footer } from 'Templates/index';
import { PageLayout } from 'Layouts/index';
import { inject, observer } from 'mobx-react';

export const HomePage = inject('store')(
  observer(props => {
    console.log(props);
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
  })
);
