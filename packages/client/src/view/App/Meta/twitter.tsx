import React, { useMemo, FC } from 'react';

import { fbOgImage } from './resources';
import { TITLE, DESCRIPTION } from './constants';

const META_PROPS_LIST: React.MetaHTMLAttributes<HTMLMetaElement>[] = [
  { property: 'twitter:title', content: TITLE },
  { property: 'twitter:card', content: 'summary' },
  { property: 'twitter:image', content: fbOgImage },
  { property: 'twitter:description', content: DESCRIPTION },
];

export const TwitterMeta: FC = () => {
  const metaTags = useMemo(
    // eslint-disable-next-line react/jsx-props-no-spreading
    () => META_PROPS_LIST.map(props => <meta {...props} key={JSON.stringify(props)} />),
    []
  );

  return <>{metaTags}</>;
};
