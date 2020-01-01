import React, { useMemo, FC } from 'react';

import { TITLE } from './constants';

import { snak144x144 } from '~client/resources';

const metaPropsList: React.MetaHTMLAttributes<HTMLMetaElement>[] = [
  { name: 'msapplication-tooltip', content: TITLE },
  { name: 'msapplication-TileImage', content: snak144x144 },
  { name: 'msapplication-tap-highlight', content: 'no' },
];

export const MsMeta: FC = () => {
  const metaTags = useMemo(
    // eslint-disable-next-line react/jsx-props-no-spreading
    () => metaPropsList.map(props => <meta {...props} key={JSON.stringify(props)} />),
    []
  );

  return <>{metaTags}</>;
};
