import React, { FC } from 'react';

import { PageDesc } from './PageDesc';
import { ContactFrom } from './ContactFrom';

import { PageLayout } from '~nclient/view/components/PageLayout';
import { Header } from '~nclient/view/components/Header';
import { Footer } from '~nclient/view/components/Footer';
import { HorizontalDivider } from '~nclient/view/atoms/Figures/HorizontalDivider';

interface Props {}

export const ContactPage: FC<Props> = () => {
  return (
    <PageLayout>
      {{
        header: (
          <>
            <Header />
            <HorizontalDivider thick />
          </>
        ),
        main: (
          <>
            <PageDesc />
            <HorizontalDivider thick />
            <ContactFrom />
          </>
        ),
        footer: <Footer />,
      }}
    </PageLayout>
  );
};
