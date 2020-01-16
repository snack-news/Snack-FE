const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
     // Required
      inject: false,
      template: require('html-webpack-template'),
      // template: 'node_modules/html-webpack-template/index.ejs',

      // Optional
      headHtmlSnippet: '<!--head-html-snippett-->',
      bodyHtmlSnippet: '<div id="root"></div>',
      googleAnalytics: {
        trackingId: 'UA-155136774-1',
        pageViewOnLoad: true
      },
      mobile: true,
    }),
  ],
};
