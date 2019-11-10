import Koa from 'koa';
import serve from 'koa-static';
import proxy from 'koa-proxy';
import getPort from 'get-port';

import path from 'path';

import { config } from 'dotenv';

import { getMetadata } from './metascraper';

import { debug } from './debug';
import { render } from './render';

config();

const API_URL = 'https://snak.news';

const app = new Koa();

app
  .use(proxy({ host: API_URL, match: /^\/api\// }))
  .use(async (ctx, next) => {
    if (/^\/node\-api\/metascraper/.test(ctx.path) && ctx.request.query.url) {
      const metaData = await getMetadata(ctx.request.query.url);
      ctx.body = metaData;
      return;
    }
    if (ctx.path === '/') {
      ctx.body = render(ctx.path);
      return;
    }

    // if (ctx.path === '/metascraper?') {
    //   ctx.body = render(ctx.path);
    //   return;
    // }

    await next();
  })
  .use(serve(path.resolve(__dirname, '../../client/dist/')))
  .use(ctx => {
    ctx.body = render(ctx.path);
  });

const run = async () => {
  const PORT = process.env.PORT || (await getPort());

  app.listen(PORT);

  debug(`Server running on port ${PORT}`);
};

run();
