import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { Nav } from './Nav';
import { Corp } from './Corp';

import { Header } from '~nclient/view/components/Header';
import { HorizontalDivider } from '~nclient/view/components/HorizontalDivider';
import { PageLayout } from '~nclient/view/components/PageLayout';
import { Root } from '~nclient/view/components/Root';
import { useCorps } from '~nclient/hooks/useCorps';

interface Props {}

export const CorpsPage: FC<Props> = () => {
  const match = useRouteMatch('/corps');
  const corps = useCorps();

  if (!match || !match.isExact) {
    return null;
  }

  return (
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
              {corps &&
                corps.map(({ id, image, name }) => (
                  <Corp to={`/corp/${id}`} image={image || undefined}>
                    {name}
                  </Corp>
                ))}
            </>
          ),
        }}
      </PageLayout>
    </Root>
  );
};
