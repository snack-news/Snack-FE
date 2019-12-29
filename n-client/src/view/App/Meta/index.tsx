/* eslint-disable max-lines */

import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';

import { favicon, snak16x16, snak144x144, fbOgImage } from './resources';

const TITLE = '스낵 SNAK';
const LONG_TITLE = 'SNAK | 유니콘 기업 관련 뉴스 및 아티클 모음';
const DESCRIPTION = '쓸모있는 IT/비즈니스 소식을 전하는 뉴스 딜리버리 서비스';
const URL = 'https://snak.news'; // TODO URL은 ENV로 받아서 webpack define 하도록 설정

// TODO SEO 최적화에 맞게 META 태그 정리 필요.
const metaPropsList = [
  { property: 'title', content: TITLE },
  { charset: '"utf-8' },
  { name: 'application-name', content: TITLE },
  { name: 'msapplication-tooltip', content: TITLE },
  { name: 'description', content: DESCRIPTION },
  { name: 'msapplication-TileImage', content: snak144x144 },
  { name: 'referrer', content: 'origin' },
  { name: 'mobile-web-app-capable', content: 'yes' },
  { name: 'apple-mobile-web-app-title', content: TITLE },
  { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
  { name: 'theme-color', content: 'white' },
  { name: 'apple-mobile-web-app-capable', content: 'yes' },
  { name: 'msapplication-tap-highlight', content: 'no' },
  {
    name: 'keywords',
    content: ['뉴스', 'IT', '유니콘', '스타트업', '테크', '비즈니스', '이직', 'Tech', '취업'].join(
      ','
    ),
  },

  // Open Graph Protocol
  { property: 'og:title', content: LONG_TITLE },
  { property: 'og:description', content: DESCRIPTION },
  { property: 'og:image', content: fbOgImage },
  { property: 'og:image:width', content: '1200' },
  { property: 'og:image:height', content: '630' },
  { property: 'og:type', content: 'website' },
  { property: 'og:locale', content: 'ko' },
  { property: 'og:site_name', content: TITLE },
  { property: 'og:url', content: URL },

  // Twitter
  { property: 'twitter:title', content: TITLE },
  { property: 'twitter:card', content: 'summary' },
  { property: 'twitter:image', content: fbOgImage },
  { property: 'twitter:description', content: DESCRIPTION },
];

const linkPropsList = [
  { rel: 'shortcut icon', href: favicon, type: 'image/x-icon' },
  { rel: 'icon', type: 'image/x-icon', href: favicon },
  { rel: 'icon', type: 'image/png', href: snak16x16 },
  { rel: 'canonical', href: URL },
];

export const Meta = () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const metaTags = useMemo(() => metaPropsList.map(mataProps => <meta {...mataProps} />), []);

  // eslint-disable-next-line react/jsx-props-no-spreading
  const linkTags = useMemo(() => linkPropsList.map(linkProps => <link {...linkProps} />), []);
  return (
    <Helmet>
      <title>{TITLE}</title>
      {metaTags}
      {linkTags}
    </Helmet>
  );
};
