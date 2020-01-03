import React, { useMemo, FC } from 'react';

import { TITLE } from './constants';

const META_PROPS_LIST: React.MetaHTMLAttributes<HTMLMetaElement>[] = [
  { name: 'apple-mobile-web-app-title', content: TITLE },
  { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
  { name: 'apple-mobile-web-app-capable', content: 'yes' },
];

export const AppleMeta: FC = () => {
  const metaTags = useMemo(
    // eslint-disable-next-line react/jsx-props-no-spreading
    () => META_PROPS_LIST.map(props => <meta {...props} key={JSON.stringify(props)} />),
    []
  );

  return <>{metaTags}</>;
};
