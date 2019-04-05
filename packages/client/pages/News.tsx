import * as React from 'react';
import Tabs from '../components/Tabs';
import Header from '../components/Header';
import WeeklySelector from '../ui/WeeklySelector';

const News = () => (
  <React.Fragment>
    <Header />
    <Tabs />
    <WeeklySelector />
    News
  </React.Fragment>
);

export default News;
