import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import CompanySelectPage from '../pages/CompanySelectPage';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/company-list/" component={CompanySelectPage} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
