// TODO 구현 필요

import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { ProposePageHeader } from './Header';
import { ProposePageMain } from './Main';

import { PageLayout } from '~nclient/view/components/PageLayout';
import { Footer } from '~nclient/view/components/Footer';
import { proposePath } from '~nclient/constants/paths';

interface Props {}

export const ProposePage: FC<Props> = () => {
  const match = useRouteMatch(proposePath);

  if (!match || !match.isExact) {
    return null;
  }

  return (
    <PageLayout>
      {{
        header: <ProposePageHeader />,
        main: <ProposePageMain />,
        footer: <Footer />,
      }}
    </PageLayout>
  );
};
