const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyPlugin([
      {
        from: path.resolve(__dirname, '../../../client/src/static'),
        to: 'static',
      },
    ]),
    // TODO 서버 랜더링 작업후 react-helmet 로 변환 고려 (장단점(이미지 최적화등) 체크 필요)
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './template.html'),
    }),
  ],
};
