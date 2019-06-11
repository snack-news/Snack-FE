import React from 'react';
// import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router';

// const Wrapper = styled.div``;

const App = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);

export default App;
