import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { CorpsPageMain } from './Main';

import { CorpsPageHeader } from './Header';

import { PageLayout } from '~nclient/view/components/PageLayout';
import { corpsPath } from '~nclient/constants/paths';

interface Props {}

export const CorpsPage: FC<Props> = () => {
  const match = useRouteMatch(corpsPath);

  if (!match || !match.isExact) {
    return null;
  }

  return (
    <PageLayout>
      {{
        header: <CorpsPageHeader />,
        main: <CorpsPageMain />,
      }}
    </PageLayout>
  );
};
