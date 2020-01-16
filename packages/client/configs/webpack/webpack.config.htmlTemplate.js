const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebapckTemplate = require('html-webpack-template');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      // Required
      inject: false,
      template: htmlWebapckTemplate,

      // Optional
      headHtmlSnippet: '<!--head-html-snippett-->',
      bodyHtmlSnippet: '<div id="root"></div>',
      googleAnalytics: {
        trackingId: 'UA-155136774-1',
        pageViewOnLoad: true,
      },
      mobile: true,
    }),
  ],
};
