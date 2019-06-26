import React from 'react';

import { NewsList, Header, HorizontalDivider, CompanyListCard, Footer } from 'Templates/index';

import { PageLayout } from 'Layouts/index';

export const CompanyNewsListPage = () => (
  <PageLayout>
    {{
      header: (
        <>
          <Header />
          <HorizontalDivider />
          {/* TODO label 들어갈 자리 */}
          <HorizontalDivider thick />
        </>
      ),
      body: (
        <>
          <NewsList newsOptionProps={{ isRenderWeekNumberOfMonth: true }} />
          <HorizontalDivider thick />
          <CompanyListCard title="애플말고 이런 회사 소식은 어떠세요?" />
          <HorizontalDivider thick />
        </>
      ),
      footer: <Footer />,
    }}
  </PageLayout>
);
