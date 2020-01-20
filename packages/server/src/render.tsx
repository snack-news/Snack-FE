import fs from 'fs';

import { getRenderData } from '../../client/src/server';

import { INDEX_PATH } from './constants';

const indexHtml = fs.readFileSync(INDEX_PATH, {
  encoding: 'utf8',
});

export const render = async (location: string) => {
  const { body, head } = await getRenderData(location);

  const page = indexHtml
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
    .replace('<!--head-html-snippett-->', head);

  return page;
};
