import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './routes';

const rootDOM = document.getElementById('root');

if (rootDOM === null) {
  throw new Error('rootDOM 을 찾지 못하였습니다.');
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootDOM
);
