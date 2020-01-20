import Koa from 'koa';
import serve from 'koa-static';
import proxy from 'koa-proxy';
import getPort from 'get-port';

import { getMetadata } from './metascraper';
import { render } from './render';
import { CLIENT_PATH, API_URL } from './constants';

const app = new Koa();

app
  .use(proxy({ host: API_URL, match: /^\/(api)|(logo)\// }))
  .use(async (ctx, next) => {
    if (/^\/node-api\/metascraper/.test(ctx.path) && ctx.request.query.url) {
      const metaData = await getMetadata(ctx.request.query.url);
      ctx.body = metaData;
      return;
    }

    if (ctx.path === '/') {
      ctx.body = await render(ctx.path);
      return;
    }

    await next();
  })
  .use(serve(CLIENT_PATH))
  .use(async ctx => {
    ctx.body = await render(ctx.path);
  });

const run = async () => {
  const PORT = process.env.PORT || (await getPort());
  // const PORT = 64216;

  app.listen(PORT);

  console.log(`Server running on port ${PORT}`);
};

run();
