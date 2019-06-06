import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CompanySelectPage from '../CompanySelectPage';

const HomePage = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/company-list/">회사 그룹</Link>
          </li>
        </ul>
      </nav>
    </div>
  </Router>
);

export default HomePage;
