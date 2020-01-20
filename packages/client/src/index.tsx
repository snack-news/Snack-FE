/* eslint-disable react/jsx-max-depth */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from '~src/view/App';
import { AxiosProvider, Cache } from '~src/hooks/useAxios';

if (IS_CLIENT) {
  // eslint-disable-next-line no-undef
  const rootDOM = document.getElementById('root');
  const cache = new Cache();
  const promises = {};

  if (rootDOM === null) {
    throw new Error('rootDOM 을 찾지 못하였습니다.');
  }

  ReactDOM.render(
    <AxiosProvider baseURL="https://snak.news/" cache={cache} promises={promises}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AxiosProvider>,
    rootDOM
  );
}
