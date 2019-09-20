import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';

import App from './routes';
import exampleStore from './stores';

const rootDOM = document.getElementById('root');

if (rootDOM === null) {
  throw new Error('rootDO 을 찾지 못였습니다.');
}

ReactDOM.render(
  <Provider store={exampleStore}>
    <App />
  </Provider>,
  rootDOM
);
