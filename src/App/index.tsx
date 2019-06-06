import React from 'react';
// import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppRouter from './Router';

// const Wrapper = styled.div``;

const App = () => (
  <Router>
    <Route component={AppRouter} />
  </Router>
);

export default App;
