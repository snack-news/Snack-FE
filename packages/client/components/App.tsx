import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import News from '../pages/News';
import Picks from '../pages/Picks';
import Menu from '../pages/Menu';

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={News} />
        <Route path="/news/" exact component={News} />
        <Route path="/picks/" exact component={Picks} />
        <Route path="/menu/" component={Menu} />
      </div>
    </Router>
  );
}

export default AppRouter;
