import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { NewsListPageRoute } from '~nclient/view/pages/NewsListPageRoute';
import { MenuPageRoute } from '~nclient/view/pages/MenuPageRoute';
import { CorpsPageRoute } from '~nclient/view/pages/CorpsPageRoute';
import { AboutPageRoute } from '~nclient/view/pages/AboutPageRoute';
import { ProposePageRoute } from '~nclient/view/pages/ProposePageRoute';

// TODO PageLayout 컴포넌트를 모든 Page 컴포넌트가 공통적으로 사용하고 있으므로 이것을 뺄수 있는 방법을 찾는다면 코드적으로나 성능적으로 이점을 볼수 있음

export const Routes: FC = () => (
  <BrowserRouter>
    <NewsListPageRoute />
    <MenuPageRoute />
    <CorpsPageRoute />
    <AboutPageRoute />
    <ProposePageRoute />
  </BrowserRouter>
);
