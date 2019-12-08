import React from 'react';

import { Header, HorizontalDivider, Footer } from '~client/templates/index';

import { PageLayout } from '~client/layouts/index';
import About from '~client/templates/About';

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
    }}
  </PageLayout>
);
