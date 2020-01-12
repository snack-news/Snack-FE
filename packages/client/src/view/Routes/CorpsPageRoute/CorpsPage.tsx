import React, { FC } from 'react';

import { CorpsPageMain } from './Main';
import { CorpsPageHeader } from './Header';

import { PageLayout } from '~src/view/components/PageLayout';

interface IProps {}

export const CorpsPage: FC<IProps> = () => (
  <PageLayout>
    {{
      header: <CorpsPageHeader />,
      main: <CorpsPageMain />,
    }}
  </PageLayout>
);
