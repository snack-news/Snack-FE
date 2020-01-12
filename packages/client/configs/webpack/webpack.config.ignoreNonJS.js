const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');

module.exports = {
  plugins: [new IgnoreEmitPlugin(/(?<!\.js)$/)],
};
