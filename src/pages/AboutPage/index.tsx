import React from 'react';

import { Header, HorizontalDivider, Footer } from 'Templates/index';

import { PageLayout } from 'Layouts/index';
import About from 'Templates/About';

export const AboutPage = () => (
  <PageLayout>
    {{
      header: (
        <>
          <Header />
          <HorizontalDivider />
        </>
      ),
      body: (
        <>
          <About />
        </>
      ),
      footer: <Footer />,
    }}
  </PageLayout>
);
