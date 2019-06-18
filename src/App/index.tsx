import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router';

import '../common';

const App = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);

export default App;
