// TODO 구현 필요

import React, { FC } from 'react';

import { ProposePageHeader } from './Header';
import { ProposePageMain } from './Main';

import { PageLayout } from '~src/view/components/PageLayout';
import { Footer } from '~src/view/components/Footer';

interface IProps {}

export const ProposePage: FC<IProps> = () => (
  <PageLayout>
    {{
      header: <ProposePageHeader />,
      main: <ProposePageMain />,
      footer: <Footer />,
    }}
  </PageLayout>
);
