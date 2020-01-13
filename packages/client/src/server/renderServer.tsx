import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import { Helmet } from 'react-helmet';

import { App } from 'snak-fe-client/src/view/App';

const sheet = new ServerStyleSheet();

export const render = (location: string, indexHtml: string) => {
  const rendered = ReactDOMServer.renderToString(
    <StaticRouter location={location}>
      <StyleSheetManager sheet={sheet.instance}>
        <App />
      </StyleSheetManager>
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();

  // TODO
  // helmet.htmlAttributes.toString()
  // helmet.bodyAttributes.toString()

  const styleTags = sheet.getStyleTags();

  const page = indexHtml
    .replace('<div id="root"></div>', `<div id="root">${rendered}</div>`)
    .replace(
      '<!--head-html-snippett-->',
      [styleTags, helmet.title.toString(), helmet.meta.toString(), helmet.link.toString()].join('')
    );

  return page;
};
