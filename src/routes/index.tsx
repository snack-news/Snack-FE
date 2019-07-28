import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../common';
import { HomePage } from 'Pages/HomePage';
import { routes } from 'Config/routes';
import { CompanySelectPage } from 'Pages/CompanySelectPage';
import { PicksPage } from 'Pages/PicksPage';
import { CompanyNewsListPage} from 'Pages/CompanyNewsListPage';
import { IntroduceFormPage } from 'Pages/IntroduceFormPage';
import { MenuPage } from 'Pages/MenuPage';
import { NewsPage } from 'Pages/NewsPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route component={NewsPage} path={routes.newsPage} />
      <Route component={HomePage} path={routes.homePage} exact />
      <Route component={CompanySelectPage} path={routes.companySelectPage} />
      <Route component={PicksPage} path={routes.picksPage} />
      <Route component={CompanyNewsListPage} path={routes.companyNewsListPage} />
      <Route component={IntroduceFormPage} path={routes.introduceFormPage} />
      <Route component={MenuPage} path={routes.menuPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
