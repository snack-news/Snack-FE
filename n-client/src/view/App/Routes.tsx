import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { NewsListPage } from '~nclient/view/pages/NewsListPage';
import { MenuPage } from '~nclient/view/pages/MenuPage';
import { CorpsPage } from '~nclient/view/pages/CorpsPage';
import { AboutPage } from '~nclient/view/pages/AboutPage';
import { ContactPage } from '~nclient/view/pages/ContactPage';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={NewsListPage} />
      <Route path="/newslist/:year/:month/week/:week" exact component={NewsListPage} />
      <Route path="/menu" component={MenuPage} />
      <Route path="/corps" component={CorpsPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/corp/:corpId" component={NewsListPage} />
    </Switch>
  </BrowserRouter>
);
