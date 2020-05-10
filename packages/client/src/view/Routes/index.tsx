import React, { FC } from 'react';

import { NewsListPageRoute } from './NewsListPageRoute';
import { MenuPageRoute } from './MenuPageRoute';
import { CorpsPageRoute } from './CorpsPageRoute';
import { AboutPageRoute } from './AboutPageRoute';
import { AddSlackPageRoute } from './AddSlackPageRoute';

// TODO PageLayout 컴포넌트를 모든 Page 컴포넌트가 공통적으로 사용하고 있으므로 이것을 뺄수 있는 방법을 찾는다면 코드적으로나 성능적으로 이점을 볼수 있음

export const Routes: FC = () => (
  <>
    <NewsListPageRoute />
    <MenuPageRoute />
    <CorpsPageRoute />
    <AboutPageRoute />
    <AddSlackPageRoute />
  </>
);
