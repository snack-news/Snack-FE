import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, CompanySelectPage } from 'Pages/index';

function AppRouter() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/company-list/" component={CompanySelectPage} />
    </Switch>
  );
}

export default AppRouter;
