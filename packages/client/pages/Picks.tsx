import * as React from 'react';
import Tabs from '../components/Tabs';
import Header from '../components/Header';
import PickSelector from '../ui/PickSelector';

const Picks = () => (
  <React.Fragment>
    <Header />
    <Tabs />
    <PickSelector />
    Picks
  </React.Fragment>
);

export default Picks;
