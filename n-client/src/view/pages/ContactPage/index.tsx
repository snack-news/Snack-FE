// TODO 구현 필요

import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { ContactPageHeader } from './Header';
import { ContactPageMain } from './Main';

import { PageLayout } from '~nclient/view/components/PageLayout';
import { Footer } from '~nclient/view/components/Footer';
import { Root } from '~nclient/view/components/Root';
import { contactPath } from '~nclient/constants/paths';

interface Props {}

export const ContactPage: FC<Props> = () => {
  const match = useRouteMatch(contactPath);

  if (!match || !match.isExact) {
    return null;
  }

  return (
    <Root>
      <PageLayout>
        {{
          header: <ContactPageHeader />,
          main: <ContactPageMain />,
          footer: <Footer />,
        }}
      </PageLayout>
    </Root>
  );
};
