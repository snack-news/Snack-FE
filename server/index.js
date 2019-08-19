const express = require('express');
const fallback = require('express-history-api-fallback');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const proxy = require('http-proxy-middleware');

const wevbpackConfigDev = require('../webpack.config.dev');

const app = express();
const port = process.env.PORT || 3000;
const devPort = 3001;
const API_URL = 'https://snak.news';
// const API_URL = 'http://localhost:8080';
const root = 'public/dist';

if (process.env.NODE_ENV === 'development') {
  console.log('Server is running on development mode');

  const compiler = webpack(wevbpackConfigDev);
  const devServer = new WebpackDevServer(compiler, wevbpackConfigDev.devServer);
  devServer.listen(devPort, () => {
    console.log('webpack-dev-server is listening on port', devPort);
  });
} else {
  app.use(express.static(root));
  app.use('/api', proxy({ target: API_URL, changeOrigin: true }));
  app.use(fallback('index.html', { root }));

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}
