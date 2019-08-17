import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../common';
import { routes } from 'Config/routes';
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
} from 'Pages/index';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route component={HomePage} path={routes.homePage.path} exact />
      <Route component={NewsListPage} path={routes.newsListPage.path} />
      <Route component={CompanySelectPage} path={routes.companySelectPage.path} />
      <Route component={PicksPage} path={routes.picksPage.path} />
      <Route component={CompanyNewsListPage} path={routes.companyNewsListPage.path} />
      <Route component={IntroduceFormPage} path={routes.introduceFormPage.path} />
      <Route component={MenuPage} path={routes.menuPage.path} />
      <Route component={NewsPage} path={routes.newsPage.path} />
      <Route component={AboutPage} path={routes.aboutPage.path} />
    </Switch>
  </BrowserRouter>
);

export default App;
