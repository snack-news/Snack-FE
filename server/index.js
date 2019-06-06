const express = require('express');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const wevbpackConfigDev = require('../webpack.config.dev');

const app = express();
const port = 3000;
const devPort = 3001;

if (process.env.NODE_ENV === 'development') {
  console.log('Server is running on development mode');

  const compiler = webpack(wevbpackConfigDev);
  const devServer = new WebpackDevServer(compiler, wevbpackConfigDev.devServer);
  devServer.listen(devPort, () => {
    console.log('webpack-dev-server is listening on port', devPort);
  });
}

app.use(express.static('public/dist'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
