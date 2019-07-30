import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../common';
import { routes } from 'Config/routes';
import {
  HomePage,
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
      <Route component={HomePage} path={routes.homePage} exact />
      <Route component={CompanySelectPage} path={routes.companySelectPage} />
      <Route component={PicksPage} path={routes.picksPage} />
      <Route component={CompanyNewsListPage} path={routes.companyNewsListPage} />
      <Route component={IntroduceFormPage} path={routes.introduceFormPage} />
      <Route component={MenuPage} path={routes.menuPage} />
      <Route component={NewsPage} path={routes.newsPage} />
      <Route component={AboutPage} path={routes.aboutPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
