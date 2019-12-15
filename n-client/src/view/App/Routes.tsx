import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { NewsListPage } from '~nclient/view/pages/NewsListPage';
import { MenuPage } from '~nclient/view/pages/MenuPage';
import { CorpsPage } from '~nclient/view/pages/CorpsPage';
import { AboutPage } from '~nclient/view/pages/AboutPage';
import { ContactPage } from '~nclient/view/pages/ContactPage';

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={NewsListPage} />
    <Route path="/menu" component={MenuPage} />
    <Route path="/corps" component={CorpsPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/contact" component={ContactPage} />
  </Switch>
);
