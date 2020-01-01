import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { CorpsPageMain } from './Main';

import { CorpsPageHeader } from './Header';

import { PageLayout } from '~nclient/view/components/PageLayout';
import { Root } from '~nclient/view/components/Root';
import { corpsPath } from '~nclient/constants/paths';

interface Props {}

export const CorpsPage: FC<Props> = () => {
  const match = useRouteMatch(corpsPath);

  if (!match || !match.isExact) {
    return null;
  }

  return (
    <Root>
      <PageLayout>
        {{
          header: <CorpsPageHeader />,
          main: <CorpsPageMain />,
        }}
      </PageLayout>
    </Root>
  );
};
