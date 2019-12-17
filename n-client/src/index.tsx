import React from 'react';
import ReactDOM from 'react-dom';

import { App } from '~nclient/view/App';

// eslint-disable-next-line no-undef
const rootDOM = document.getElementById('root');

if (rootDOM === null) {
  throw new Error('rootDOM 을 찾지 못하였습니다.');
}

ReactDOM.render(<App />, rootDOM);
