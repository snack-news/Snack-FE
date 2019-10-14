import React from 'react';

import { Header, SubHeader, HorizontalDivider, CompanyList } from '~client/templates/index';
import { PageLayout } from '~client/layouts/index';

export const CompanySelectPage = () => (
  <PageLayout>
    {{
      header: (
        <>
          <Header />
          <HorizontalDivider />
          <SubHeader />
          <HorizontalDivider />
        </>
      ),
      body: <CompanyList />,
    }}
  </PageLayout>
);
