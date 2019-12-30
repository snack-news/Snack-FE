// TODO 구현 필요

import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { PageDesc } from './PageDesc';
import { ContactFrom } from './ContactFrom';

import { PageLayout } from '~nclient/view/components/PageLayout';
import { Header } from '~nclient/view/components/Header';
import { Footer } from '~nclient/view/components/Footer';
import { HorizontalDivider } from '~nclient/view/components/HorizontalDivider';
import { Root } from '~nclient/view/components/Root';

interface Props {}

export const ContactPage: FC<Props> = () => {
  const match = useRouteMatch('/contact');

  if (!match || !match.isExact) {
    return null;
  }

  return (
    <Root>
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
    </Root>
  );
};
