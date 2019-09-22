const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '.');
const SRC_PATH = path.resolve(ROOT_PATH, './src/');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      Api: path.resolve(SRC_PATH, 'api/'),
      Components: path.resolve(SRC_PATH, 'components/'),
      Layouts: path.resolve(SRC_PATH, 'layouts/'),
      Pages: path.resolve(SRC_PATH, 'pages/'),
      Resources: path.resolve(SRC_PATH, 'resources/'),
      Templates: path.resolve(SRC_PATH, 'templates/'),
      Config: path.resolve(SRC_PATH, 'config/'),
      Hooks: path.resolve(SRC_PATH, 'hooks/'),
      Utils: path.resolve(SRC_PATH, 'utils.ts'),
    },
  },
};
