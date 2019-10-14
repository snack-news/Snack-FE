import Koa from 'koa';
import serve from 'koa-static';
import proxy from 'koa-proxy';
import getPort from 'get-port';

import path from 'path';

import { config } from 'dotenv';

import { debug } from './debug';
import { render } from './render';

config();

const API_URL = 'https://snak.news';

const app = new Koa();

app
  .use(proxy({ host: API_URL, match: /^\/api\// }))
  .use(async (ctx, next) => {
    if (ctx.path === '/') {
      ctx.body = render(ctx.path);
      return;
    }

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
