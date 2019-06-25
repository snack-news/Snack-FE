import React from 'react';

import { Header, SelectBox, HorizontalDivider, NewsList, Footer } from 'Templates/index';
import { PageLayout } from 'Layouts/index';

const CompanyNewsListPage = () => (
  <PageLayout>
    {{
      header: (
        <React.Fragment>
          <Header />
          <HorizontalDivider />
          <HorizontalDivider thick />
          <SelectBox />
          <HorizontalDivider thick />
        </React.Fragment>
      ),
      body: <NewsList />,
      footer: <Footer />,
    }}
  </PageLayout>
);

export default CompanyNewsListPage;
