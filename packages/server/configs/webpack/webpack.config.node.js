const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  node: false,
  resolve: {
    mainFields: ['main', 'module'],
  },
  externals: [nodeExternals({
    whitelist: [/^~/]
  })]
};
