import React, { FC } from 'react';

import { About } from './About';

import { ContactList } from './ContactList';

import { PageLayout } from '~nclient/view/components/PageLayout';
import { Header } from '~nclient/view/components/Header';
import { HorizontalDivider } from '~nclient/view/atoms/Figures/HorizontalDivider';
import { Root } from '~nclient/view/components/Root';

interface Props {}

export const AboutPage: FC<Props> = () => {
  return (
    <Root>
      <PageLayout>
        {{
          header: (
            <>
              <Header />
              <HorizontalDivider />
            </>
          ),
          main: (
            <>
              <About />
              <ContactList />
            </>
          ),
        }}
      </PageLayout>
    </Root>
  );
};
