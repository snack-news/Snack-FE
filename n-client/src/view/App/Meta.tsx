/* eslint-disable max-lines */

import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';

import { favicon, snak16x16, snak144x144, fbOgImage } from '~nclient/resources';

const META = {
  TITLE: '스낵 SNAK',
  DESCRIPTION: '쓸모있는 IT/비즈니스 소식을 전하는 뉴스 딜리버리 서비스',
  image: {
    favicon,
    '16 x 16': snak16x16,
    '144 x 144': snak144x144,
    '2400 × 1260': fbOgImage,
  },
};

const metaPropsList = [
  { property: 'title', content: META.TITLE },
  { name: 'application-name', content: META.TITLE },
  { name: 'msapplication-tooltip', content: META.TITLE },
  { name: 'description', content: META.DESCRIPTION },
  { name: 'msapplication-TileImage', content: META.image['144 x 144'] },
  { name: 'referrer', content: 'origin' },
  { name: 'mobile-web-app-capable', content: 'yes' },
  { name: 'application-name', content: '뉴스' },
  { name: 'apple-mobile-web-app-title', content: '뉴스' },
  { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
  { name: 'theme-color', content: 'white' },
  { name: 'apple-mobile-web-app-title', content: '뉴스' },
  { name: 'apple-mobile-web-app-capable', content: 'yes' },
  { name: 'msapplication-tap-highlight', content: 'no' },
  {
    name: 'keywords',
    content: ['뉴스', 'IT', '유니콘', '스타트업', '테크', '비즈니스', '이직', 'Tech', '취업'].join(
      ','
    ),
  },
  { property: 'og:title', content: 'SNAK | 유니콘 기업 관련 뉴스 및 아티클 모음' },
  { property: 'og:description', content: META.DESCRIPTION },
  { property: 'og:image', content: META.image['2400 × 1260'] },
  { property: 'og:image:width', content: '1200' },
  { property: 'og:image:height', content: '630' },
  { property: 'og:type', content: 'website' },
  { property: 'og:locale', content: 'ko' },
  { property: 'og:site_name', content: META.TITLE },
  { property: 'og:url', content: 'https://snak.news' },
  { property: 'og:type', content: 'website' },
  { property: 'twitter:title', content: META.TITLE },
  { property: 'twitter:card', content: 'summary' },
  { property: 'twitter:image', content: META.image['2400 × 1260'] },
  { property: 'twitter:description', content: META.DESCRIPTION },
];

const linkPropsList = [
  { rel: 'shortcut icon', href: META.image.favicon, type: 'image/x-icon' },
  { rel: 'icon', href: META.image.favicon, type: 'image/x-icon' },
  { rel: 'icon', type: 'image/png', href: META.image['16 x 16'] },
  { rel: 'canonical', href: 'https://snak.news' },
];

export const Meta = () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const metaTags = useMemo(() => metaPropsList.map(mataProps => <meta {...mataProps} />), []);

  // eslint-disable-next-line react/jsx-props-no-spreading
  const linkTags = useMemo(() => linkPropsList.map(linkProps => <link {...linkProps} />), []);
  return (
    <Helmet>
      <title>{META.TITLE}</title>
      {metaTags}
      {linkTags}
    </Helmet>
  );
};
