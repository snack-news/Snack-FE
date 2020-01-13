import React from 'react';
import ReactDOMServer from 'react-dom/server';

import fs from 'fs';

import { create } from '../../client/src/server/SSR';
import { App } from '../../client/src/view/App';

import { INDEX_PATH } from './constants';



const indexHtml = fs.readFileSync(INDEX_PATH, {
  encoding: 'utf8',
});

export const render = (location: string) => {
  const ssr = create();

  const body = ReactDOMServer.renderToString(
    React.createElement(ssr.Component, { location }, React.createElement(App))
  );

  const page = indexHtml
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
    .replace('<!--head-html-snippett-->', ssr.getHead());

  return page;
};
