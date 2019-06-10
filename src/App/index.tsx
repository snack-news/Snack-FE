import React from 'react';
// import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router';

import './global.css';

// const Wrapper = styled.div``;

const App = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);

export default App;
