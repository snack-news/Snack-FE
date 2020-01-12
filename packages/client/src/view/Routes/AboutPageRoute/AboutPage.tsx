import React, { FC } from 'react';

import { AboutPageHeader } from './Header';
import { AboutPageMain } from './Main';

import { PageLayout } from '~src/view/components/PageLayout';

interface IProps {}

export const AboutPage: FC<IProps> = () => (
  <PageLayout>
    {{
      header: <AboutPageHeader />,
      main: <AboutPageMain />,
    }}
  </PageLayout>
);
