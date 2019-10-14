const { createBabelrc, ENV } = require('~root/tools/babel');

module.exports = createBabelrc({
  env: ENV.NODE_JS,
  useTypescript: true,
  useReact: true,
});
