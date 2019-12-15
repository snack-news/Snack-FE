import React, { FC } from 'react';

import { Nav } from './Nav';
import { Corp } from './Corp';

import { Header } from '~nclient/view/components/Header';
import { HorizontalDivider } from '~nclient/view/atoms/Figures/HorizontalDivider';
import { PageLayout } from '~nclient/view/components/PageLayout';
import { Root } from '~nclient/view/components/Root';

interface Props {}

export const CorpsPage: FC<Props> = () => (
  <Root>
    <PageLayout>
      {{
        header: (
          <>
            <Header />
            <HorizontalDivider />
            <Nav />
            <HorizontalDivider />
          </>
        ),
        main: (
          <>
            <Corp />
            <HorizontalDivider />
            <Corp />
            <HorizontalDivider />
            <Corp />
            <HorizontalDivider />
            <Corp />
            <HorizontalDivider />
            <Corp />
            <HorizontalDivider />
            <Corp />
            <HorizontalDivider />
          </>
        ),
      }}
    </PageLayout>
  </Root>
);
