import Koa from 'koa';
import serve from 'koa-static';
import proxy from 'koa-proxies';

import path from 'path';

import { render } from './render';

const API_URL = 'https://snak.news';
const PORT = process.env.PORT || 3000;

const app = new Koa();

app.use(
  proxy('/api', {
    target: API_URL,
    changeOrigin: true,
  })
);

// 경로가 / 일시에 index.html 을 전달하는게 아닌, 서버사이드 렌더링 작업을 합니다
app.use((ctx, next) => {
  if (ctx.path === '/') {
    // 요청이 들어올 때 현재 경로를 render 함수에 전달시켜서 문자열을 생성합니다
    const location = ctx.path;
    ctx.body = render(location);
    return;
  }

  return next();
});

// 파일을 요청 받으면 build 내부의 파일들을 반환합니다
app.use(serve(path.resolve(__dirname, '../../client/dist/')));

// 경로가 / 일시에 index.html 을 전달하는게 아닌, 서버사이드 렌더링 작업을 합니다
app.use(ctx => {
  // 요청이 들어올 때 현재 경로를 render 함수에 전달시켜서 문자열을 생성합니다
  const location = ctx.path;
  ctx.body = render(location);
});

app.listen(PORT);

console.log(`Server running on port ${PORT}`);
