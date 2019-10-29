require('dotenv').config();
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // mode:
  //   process.env.ENVIRONMENT === 'development' ? 'development' : 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  // plugins: [new CleanWebpackPlugin()],
};
