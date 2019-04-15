import * as React from 'react';
import Tabs from '../components/Tabs';
import Header from '../components/Header';
import WeeklySelector from '../ui/WeeklySelector';

const Article = () => (
  <React.Fragment>
    <Header />
    <Tabs />
    <WeeklySelector />
    Article
  </React.Fragment>
);

export default Article;
