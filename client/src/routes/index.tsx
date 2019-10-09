import React from 'react';
import { Route, Switch } from 'react-router-dom';

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

const App = () => (
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
    <Route component={CompanySelectPage} path={routes.companySelectPage.path} />
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
    <Route component={IntroduceFormPage} path={routes.introduceFormPage.path} />
    <Route component={MenuPage} path={routes.menuPage.path} />
    <Route component={NewsPage} path={routes.newsPage.path} />
    <Route component={AboutPage} path={routes.aboutPage.path} />
  </Switch>
);

export default App;
