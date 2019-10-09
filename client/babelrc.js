const { createBabelrc, ENV } = require('~root/tools/babel');

module.exports = createBabelrc({
  env: ENV.BROWSER,
  useTypescript: true,
  useReact: true,
});
