import fs from 'fs';

import { getRenderData } from '../../client/src/server';

import { INDEX_PATH } from './constants';

const indexHtml = fs.readFileSync(INDEX_PATH, {
  encoding: 'utf8',
});

export const render = (location: string) => {
  const { body, head } = getRenderData(location);

  const page = indexHtml
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
    .replace('<!--head-html-snippett-->', head);

  return page;
};
