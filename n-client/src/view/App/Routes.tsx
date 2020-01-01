// TODO jsx-max-depth 오류 처리 필요
/* eslint-disable react/jsx-max-depth */

import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Root } from './Root';

import { NewsListPage } from '~nclient/view/pages/NewsListPage';
import { MenuPage } from '~nclient/view/pages/MenuPage';
import { CorpsPage } from '~nclient/view/pages/CorpsPage';
import { AboutPage } from '~nclient/view/pages/AboutPage';
import { ProposePage } from '~nclient/view/pages/ProposePage';

// TODO NewsListPage 다양한 라우팅 적용
// {/* <Route path="/newslist/week/:startDateTime" exact component={NewsListPage} /> */}
// {/* <Route path="/newslist/corp/:corpId" exact component={NewsListPage} /> */}

// {/* <Route path="/newslist/:year/:month/week/:week" exact component={NewsListPage} /> */}
// {/* <Route path="/corp/:corpId" component={NewsListPage} /> */}

// TODO PageLayout 컴포넌트를 모든 Page 컴포넌트가 공통적으로 사용하고 있으므로 이것을 뺄수 있는 방법을 찾는다면 코드적으로나 성능적으로 이점을 볼수 있음

export const Routes: FC = () => (
  <BrowserRouter>
    <Root>
      <NewsListPage />
      <MenuPage />
      <CorpsPage />
      <AboutPage />
      <ProposePage />
    </Root>
  </BrowserRouter>
);
