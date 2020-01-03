/* eslint-disable max-lines */
import React, { useMemo, FC } from 'react';

import { TITLE, DESCRIPTION, URL } from './constants';
import { favicon } from './resources';

import { snak16x16 } from '~client/resources';

// TODO SEO 최적화에 맞게 META 태그 정리 필요.

const META_PROPS_LIST: React.MetaHTMLAttributes<HTMLMetaElement>[] = [
  { charSet: 'utf-8' },
  { name: 'title', content: TITLE },
  { name: 'application-name', content: TITLE },
  { name: 'description', content: DESCRIPTION },
  { name: 'referrer', content: 'origin' },
  { name: 'theme-color', content: 'white' },
  {
    name: 'keywords',
    content: ['뉴스', 'IT', '유니콘', '스타트업', '테크', '비즈니스', '이직', 'Tech', '취업'].join(
      ','
    ),
  },
];

const LINK_PROPS_LIST: React.LinkHTMLAttributes<HTMLLinkElement>[] = [
  { rel: 'shortcut icon', href: favicon, type: 'image/x-icon' },
  { rel: 'icon', type: 'image/x-icon', href: favicon },
  { rel: 'icon', type: 'image/png', href: snak16x16 },
  { rel: 'canonical', href: URL },
];

export const BasicMeta: FC = () => {
  const metaTags = useMemo(
    // eslint-disable-next-line react/jsx-props-no-spreading
    () => META_PROPS_LIST.map(props => <meta {...props} key={JSON.stringify(props)} />),
    []
  );

  const linkTags = useMemo(
    // eslint-disable-next-line react/jsx-props-no-spreading
    () => LINK_PROPS_LIST.map(props => <link {...props} key={JSON.stringify(props)} />),
    []
  );

  return (
    <>
      <title>{TITLE}</title>
      {metaTags}
      {linkTags}
    </>
  );
};
