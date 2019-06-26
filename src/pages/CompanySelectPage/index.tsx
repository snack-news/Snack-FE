import React from 'react';

import { Header, SubHeader, HorizontalDivider, CompanyList } from 'Templates/index';
import { PageLayout } from 'Layouts/index';

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
