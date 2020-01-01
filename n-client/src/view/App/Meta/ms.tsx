import React, { useMemo, FC } from 'react';

import { TITLE } from './constants';

import { snak144x144 } from '~client/resources';

const metaPropsList = [
  { name: 'msapplication-tooltip', content: TITLE },
  { name: 'msapplication-TileImage', content: snak144x144 },
  { name: 'msapplication-tap-highlight', content: 'no' },
];

export const MsMeta: FC = () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const metaTags = useMemo(() => metaPropsList.map(mataProps => <meta {...mataProps} />), []);

  return <>{metaTags}</>;
};
