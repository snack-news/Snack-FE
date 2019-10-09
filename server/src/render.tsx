/* eslint-disable max-lines-per-function */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import path from 'path';
import fs from 'fs';

import App from '~root/client/src/routes';

const sheet = new ServerStyleSheet();

const indexHtml = fs.readFileSync(
  path.resolve(__dirname, '../../client/dist/index.html'),
  {
    encoding: 'utf8',
  }
);

export const render = (location: string) => {
  const rendered = ReactDOMServer.renderToString(
    <StaticRouter location={location}>
      <StyleSheetManager sheet={sheet.instance}>
        <App />
      </StyleSheetManager>
    </StaticRouter>
  );

  const styleTags = sheet.getStyleTags();

  const page = indexHtml
    .replace('<div id="root"></div>', `<div id="root">${rendered}</div>`)
    .replace('<!--styled-component-->', styleTags);

  return page;
};
