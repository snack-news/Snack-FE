import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { AboutPageHeader } from './Header';

import { AboutPageMain } from './Main';

import { PageLayout } from '~nclient/view/components/PageLayout';
import { Root } from '~nclient/view/components/Root';
import { aboutPath } from '~nclient/constants/paths';

interface Props {}

export const AboutPage: FC<Props> = () => {
  const match = useRouteMatch(aboutPath);

  if (!match || !match.isExact) {
    return null;
  }

  return (
    <Root>
      <PageLayout>
        {{
          header: <AboutPageHeader />,
          main: <AboutPageMain />,
        }}
      </PageLayout>
    </Root>
  );
};
