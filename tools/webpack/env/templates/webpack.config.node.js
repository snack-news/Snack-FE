const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  node: false,
  externals: [
    nodeExternals({
      // this WILL include `jquery` and `webpack/hot/dev-server` in the bundle, as well as `lodash/*`
      whitelist: [/^~/, /\.css$/],
    }),
  ],
};
