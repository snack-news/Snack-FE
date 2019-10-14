const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');

module.exports = ignoreEmit => ({
  plugins: [new IgnoreEmitPlugin(ignoreEmit)],
});
