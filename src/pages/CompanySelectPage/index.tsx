import React, { Fragment } from 'react';

import { Header, SubHeader, HorizontalDivider, CompanyList } from 'Templates/index';
import { PageLayout } from 'Layouts/index';

export const CompanySelectPage = () => (
  <PageLayout>
    {{
      header: (
        <Fragment>
          <Header />
          <HorizontalDivider />
          <SubHeader />
          <HorizontalDivider />
        </Fragment>
      ),
      body: <CompanyList />,
    }}
  </PageLayout>
);
