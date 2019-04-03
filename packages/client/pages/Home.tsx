import * as React from 'react';
import Tabs from '../components/Tabs';

const Home = ({ match }) => (
  <React.Fragment>
    <Tabs match={match} />
  </React.Fragment>
);

export default Home;
