import Koa from 'koa';
import serve from 'koa-static';
import proxy from 'koa-proxy';
import getPort from 'get-port';
import { createReadStream } from 'fs';

import { getMetadata } from './metascraper';

// import { render } from './render';
import { CLIENT_PATH, INDEX_PATH, API_URL } from './constants';

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
      ctx.type = 'html';
      ctx.body = createReadStream(INDEX_PATH);
      // ctx.body = render(ctx.path);
      return;
    }

    await next();
  })
  .use(serve(CLIENT_PATH))
  .use(ctx => {
    ctx.type = 'html';
    ctx.body = createReadStream(INDEX_PATH);
    // ctx.body = render(ctx.path);
  });

const run = async () => {
  const PORT = process.env.PORT || (await getPort());

  app.listen(PORT);

  console.log(`Server running on port ${PORT}`);
};

run();
