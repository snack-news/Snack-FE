// TODO 구현 필요

import React, { FC } from 'react';

import { PageDesc } from './PageDesc';
import { ContactFrom } from './ContactFrom';

import { PageLayout } from '~nclient/view/components/PageLayout';
import { Header } from '~nclient/view/components/Header';
import { Footer } from '~nclient/view/components/Footer';
import { HorizontalDivider } from '~nclient/view/components/HorizontalDivider';
import { Root } from '~nclient/view/components/Root';

interface Props {}

export const ContactPage: FC<Props> = () => {
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
