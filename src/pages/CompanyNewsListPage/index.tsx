import React, { Fragment } from 'react';

import { NewsList, Header, HorizontalDivider, CompanyListCard, Footer } from 'Templates/index';

import { PageLayout } from 'Layouts/index';

export const CompanyNewsListPage = () => (
  <PageLayout>
    {{
      header: (
        <Fragment>
          <Header />
          <HorizontalDivider />
          {/* TODO label 들어갈 자리 */}
          <HorizontalDivider thick />
        </Fragment>
      ),
      body: (
        <Fragment>
          <NewsList newsOptionProps={{ isRenderWeekNumberOfMonth: true }} />
          <HorizontalDivider thick />
          <CompanyListCard />
          <HorizontalDivider thick />
        </Fragment>
      ),
      footer: <Footer />,
    }}
  </PageLayout>
);
