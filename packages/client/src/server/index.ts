import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { App } from '~src/view/App';
import { create } from '~src/server/SSR';

export const getRenderData = (location: string) => {
  const ssr = create();

  const body = ReactDOMServer.renderToString(
    React.createElement(ssr.Component, { location }, React.createElement(App))
  );

  const head = ssr.getHead();

  return { body, head };
};
