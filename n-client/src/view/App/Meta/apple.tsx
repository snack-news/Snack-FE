import React, { useMemo } from 'react';

import { TITLE } from './constants';

const metaPropsList = [
  { name: 'apple-mobile-web-app-title', content: TITLE },
  { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
  { name: 'apple-mobile-web-app-capable', content: 'yes' },
];

export const AppleMeta = () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const metaTags = useMemo(() => metaPropsList.map(mataProps => <meta {...mataProps} />), []);

  return <>{metaTags}</>;
};
