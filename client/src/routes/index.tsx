import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { favicon, snak144x144, snak16x16, fbOgImage } from '~client/resources'

import '../common';
import { routes } from '~client/config/routes';
import {
  HomePage,
  NewsListPage,
  NewsPage,
  MenuPage,
  AboutPage,
  IntroduceFormPage,
  PicksPage,
  CompanyNewsListPage,
  CompanySelectPage,
} from '~client/pages/index';

const META = {
  TITLE: '스낵 SNAK',
  DESCRIPTION: '쓸모있는 IT/비즈니스 소식을 전하는 뉴스 딜리버리 서비스',
  image: {
    'favicon': favicon,
    '16 x 16': snak16x16,
    '144 x 144': snak144x144,
    '2400 × 1260': fbOgImage,
  },
};

const App = () => (
  <>
    <Helmet>
      <title>{META.TITLE}</title>

      <meta content="ie=edge" http-equiv="x-ua-compatible" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />

      <link rel="shortcut icon" href={META.image.favicon} type="image/x-icon" />
      <link rel="icon" href={META.image.favicon} type="image/x-icon" />

      <link rel="icon" type="image/png" href={META.image['16 x 16']} />

      <link rel="canonical" href="https://snak.news" />

      <meta property="title" content={META.TITLE} />
      <meta name="application-name" content={META.TITLE} />
      <meta name="msapplication-tooltip" content={META.TITLE} />
      <meta name="description" content={META.DESCRIPTION} />
      <meta
        name="keywords"
        content={[
          '뉴스',
          'IT',
          '취준',
          '취업준비',
          '테크',
          '비즈니스',
          '이직',
          'Tech',
          '공유',
        ].join(',')}
      />
      <meta name="msapplication-TileImage" content={META.image['144 x 144']} />
      <meta name="referrer" content="origin" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="뉴스" />
      <meta name="apple-mobile-web-app-title" content="뉴스" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="theme-color" content="white" />
      <meta name="apple-mobile-web-app-title" content="뉴스" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta
        property="og:title"
        content="스낵 SNAK - 쉽게 풀어쓰는 IT업계 뉴스"
      />
      <meta property="og:description" content={META.DESCRIPTION} />
      <meta property="og:image" content={META.image['2400 × 1260']} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ko" />
      <meta property="og:site_name" content={META.TITLE} />
      <meta property="og:url" content="https://snak.news" />
      <meta property="og:type" content="website" />
      <meta property="twitter:title" content={META.TITLE} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:image" content={META.image['2400 × 1260']} />
      <meta property="twitter:description" content={META.DESCRIPTION} />
    </Helmet>
    <Switch>
      <Route component={HomePage} path={routes.homePage.path} exact />
      <Route path={routes.newsListPage.path}>
        {props => {
          if (props.match === null) {
            return null;
          }

          const { year, month, week } = props.match.params;
          return <NewsListPage filter={{ year, month, week }} />;
        }}
      </Route>
      <Route
        component={CompanySelectPage}
        path={routes.companySelectPage.path}
      />
      <Route component={PicksPage} path={routes.picksPage.path} />
      <Route
        component={CompanyNewsListPage}
        path={routes.companyNewsListPage.path}
      >
        {props => {
          if (props.match === null) {
            return null;
          }

          const { corpId } = props.match.params;
          return <CompanyNewsListPage corpId={parseInt(corpId, 10)} />;
        }}
      </Route>
      <Route
        component={IntroduceFormPage}
        path={routes.introduceFormPage.path}
      />
      <Route component={MenuPage} path={routes.menuPage.path} />
      <Route component={NewsPage} path={routes.newsPage.path} />
      <Route component={AboutPage} path={routes.aboutPage.path} />
    </Switch>
  </>
);

export default App;
