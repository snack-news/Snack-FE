import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from 'Config/routes';

import {
  CompanySelectPage,
  HomePage,
  PicksPage,
  CompanyNewsListPage,
  IntroduceFormPage,
  MenuPage,
} from 'Pages/index';

function AppRouter() {
  return (
    <Switch>
      <Route component={HomePage} path={routes.homePage} exact />
      <Route component={CompanySelectPage} path={routes.companySelectPage} />
      <Route component={PicksPage} path={routes.picksPage} />
      <Route component={CompanyNewsListPage} path={routes.companyNewsListPage} />
      <Route component={IntroduceFormPage} path={routes.introduceFormPage} />
      <Route component={MenuPage} path={routes.menuPage} />
    </Switch>
  );
}

export default AppRouter;
