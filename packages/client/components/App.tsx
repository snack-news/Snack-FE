import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Header from './Header';

function AppRouter() {
  return (
    <Router>
      <div>
        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/menu/" component={Menu} />
      </div>
    </Router>
  );
}

export default AppRouter;
