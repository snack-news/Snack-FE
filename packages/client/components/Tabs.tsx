import * as React from 'react';
import { Link } from 'react-router-dom';

const Tabs = ({ match }) => (
  <section>
    <Link to="/News">News</Link>
    <Link to="/Picks">Picks</Link>
  </section>
);

export default Tabs;
