import React, { useMemo, FC } from 'react';

import { fbOgImage } from './resources';
import { TITLE, DESCRIPTION } from './constants';

const metaPropsList = [
  { property: 'twitter:title', content: TITLE },
  { property: 'twitter:card', content: 'summary' },
  { property: 'twitter:image', content: fbOgImage },
  { property: 'twitter:description', content: DESCRIPTION },
];

export const TwitterMeta: FC = () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const metaTags = useMemo(() => metaPropsList.map(mataProps => <meta {...mataProps} />), []);

  return <>{metaTags}</>;
};
