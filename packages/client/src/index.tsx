import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from '~src/view/App';

if (IS_CLIENT) {
  // eslint-disable-next-line no-undef
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
}
