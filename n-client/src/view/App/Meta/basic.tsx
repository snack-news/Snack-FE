import React, { useMemo, FC } from 'react';

import { TITLE, DESCRIPTION, URL } from './constants';
import { favicon } from './resources';

import { snak16x16 } from '~client/resources';

// TODO SEO 최적화에 맞게 META 태그 정리 필요.

const metaPropsList = [
  { property: 'title', content: TITLE },
  { charset: '"utf-8' },
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

const linkPropsList = [
  { rel: 'shortcut icon', href: favicon, type: 'image/x-icon' },
  { rel: 'icon', type: 'image/x-icon', href: favicon },
  { rel: 'icon', type: 'image/png', href: snak16x16 },
  { rel: 'canonical', href: URL },
];

export const BasicMeta: FC = () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const metaTags = useMemo(() => metaPropsList.map(mataProps => <meta {...mataProps} />), []);

  // eslint-disable-next-line react/jsx-props-no-spreading
  const linkTags = useMemo(() => linkPropsList.map(linkProps => <link {...linkProps} />), []);

  return (
    <>
      <title>{TITLE}</title>
      {metaTags}
      {linkTags}
    </>
  );
};
