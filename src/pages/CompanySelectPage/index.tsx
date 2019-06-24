import React from 'react';

import { Header, SubHeader, HorizontalDivider, CompanyList } from 'Templates/index';
import { PageLayout } from 'Layouts/index';

const CompanySelectPage = () => (
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

export default CompanySelectPage;
