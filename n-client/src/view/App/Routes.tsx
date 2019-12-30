import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import { NewsListPage } from '~nclient/view/pages/NewsListPage';
import { MenuPage } from '~nclient/view/pages/MenuPage';
import { CorpsPage } from '~nclient/view/pages/CorpsPage';
import { AboutPage } from '~nclient/view/pages/AboutPage';
import { ContactPage } from '~nclient/view/pages/ContactPage';

// TODO NewsListPage 다양한 라우팅 적용
// {/* <Route path="/newslist/:year/:month/week/:week" exact component={NewsListPage} /> */}
// {/* <Route path="/corp/:corpId" component={NewsListPage} /> */}

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <NewsListPage />
      <MenuPage />
      <CorpsPage />
      <AboutPage />
      <ContactPage />
    </Switch>
  </BrowserRouter>
);
