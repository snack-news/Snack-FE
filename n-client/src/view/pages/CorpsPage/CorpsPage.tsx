import React, { FC } from 'react';

import { Nav } from './Nav';
import { Corp } from './Corp';
import { useCorps } from './useCorps';

import { Header } from '~nclient/view/components/Header';
import { HorizontalDivider } from '~nclient/view/atoms/Figures/HorizontalDivider';
import { PageLayout } from '~nclient/view/components/PageLayout';
import { Root } from '~nclient/view/components/Root';

interface Props {}

export const CorpsPage: FC<Props> = () => {
  const { corps } = useCorps();

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
