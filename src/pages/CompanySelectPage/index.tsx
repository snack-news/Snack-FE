import React from 'react';

import { Header, SubHeader, HorizontalDivider, CompanyList } from 'Templates/index';
import { PageLayout } from 'Layouts/index';

export const CompanySelectPage = () => (
  <PageLayout>
    {{
      header: (
        <React.Fragment>
          <Header />
          <HorizontalDivider />
          <SubHeader />
          <HorizontalDivider />
        </React.Fragment>
      ),
      body: <CompanyList />,
    }}
  </PageLayout>
);
