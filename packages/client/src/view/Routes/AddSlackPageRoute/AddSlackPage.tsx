import React, { FC } from 'react';

import { AddSlackPageHeader } from './Header';
import { AddSlackPageMain } from './Main';

import { PageLayout } from '~src/view/components/PageLayout';

interface IProps {}

export const AddSlackPage: FC<IProps> = () => (
  <PageLayout>
    {{
      header: <AddSlackPageHeader />,
      main: <AddSlackPageMain />,
    }}
  </PageLayout>
);
