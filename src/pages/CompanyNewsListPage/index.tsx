import React, { FunctionComponent } from 'react';

import { NewsList, Header, HorizontalDivider, CompanyListCard, Footer } from 'Templates/index';

import { PageLayout } from 'Layouts/index';

interface ICompanyNewsListPageProps {
  corpId: string;
}

export const CompanyNewsListPage: FunctionComponent<ICompanyNewsListPageProps> = ({ corpId }) => (
  <PageLayout>
    {{
      header: (
        <>
          <Header title="애플 뉴스 모아보기" />
          <HorizontalDivider />
          {/* TODO label 들어갈 자리 */}
          <HorizontalDivider thick />
        </>
      ),
      body: (
        <>
          <NewsList
            newsOptionProps={{ isRenderWeekNumberOfMonth: true }}
            filter={{ year: '2019', month: '8', week: '4', topicIds: [corpId] }}
          />
          <HorizontalDivider thick />
          <CompanyListCard title="애플말고 이런 회사 소식은 어떠세요?" />
          <HorizontalDivider thick />
        </>
      ),
      footer: <Footer />,
    }}
  </PageLayout>
);
