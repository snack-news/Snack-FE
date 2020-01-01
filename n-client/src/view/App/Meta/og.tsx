import React, { useMemo, FC } from 'react';

import { fbOgImage } from './resources';
import { TITLE, DESCRIPTION, LONG_TITLE, URL } from './constants';

const metaPropsList = [
  { property: 'og:title', content: LONG_TITLE },
  { property: 'og:description', content: DESCRIPTION },
  { property: 'og:image', content: fbOgImage },
  { property: 'og:image:width', content: '1200' },
  { property: 'og:image:height', content: '630' },
  { property: 'og:type', content: 'website' },
  { property: 'og:locale', content: 'ko' },
  { property: 'og:site_name', content: TITLE },
  { property: 'og:url', content: URL },
];

export const OgMeta: FC = () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const metaTags = useMemo(() => metaPropsList.map(mataProps => <meta {...mataProps} />), []);

  return <>{metaTags}</>;
};
