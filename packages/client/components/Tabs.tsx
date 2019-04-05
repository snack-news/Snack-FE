import * as React from 'react';
import { Link } from 'react-router-dom';

const Tabs = () => (
  <ul>
    <li>
      <Link to="/News">News</Link>
    </li>
    <li>
      <Link to="/Picks">Picks</Link>
    </li>
  </ul>
);

export default Tabs;
