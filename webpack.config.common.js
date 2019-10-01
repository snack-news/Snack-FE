const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackTemplate = require('html-webpack-template');

const CopyPlugin = require('copy-webpack-plugin');

const webpackResolveConfig = require('./webpack.config.resolve');
const babelConfig = require('./babel.config.webpack');

const META = {
  TITLE: '스낵 SNAK',
  DESCRIPTION: '쓸모있는 IT/비즈니스 소식을 전하는 뉴스 딜리버리 서비스',
};

module.exports = merge(webpackResolveConfig, {
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            ...babelConfig,
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/,
        use: ['xml-loader'],
      },
    ],
  },
  plugins: [
    new CopyPlugin([{ from: 'src/static', to: 'static' }]),
    // TODO 서버 랜더링 작업후 react-helmet 로 변환 고려 (장단점(이미지 최적화등) 체크 필요)
    new HtmlWebpackPlugin({
      inject: false,
      template: htmlWebpackTemplate,
      bodyHtmlSnippet: '<div id="root"></div>',
      mobile: true,
      title: META.SNAK_NEWS_TITLE,
      links: [
        { rel: 'icon', type: 'image/png', href: 'static/snak_16x16.png' },
        { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: 'static/icon' },
        { rel: 'canonical', href: 'https://snak.news' },
      ],
      meta: [
        { property: 'title', content: META.SNAK_NEWS_TITLE },
        { name: 'application-name', content: META.SNAK_NEWS_TITLE },
        { name: 'msapplication-tooltip', content: META.SNAK_NEWS_TITLE },
        { name: 'description', content: META.DESCRIPTION },
        { name: 'keywords', content: ['뉴스', 'IT', '취준', '취업준비', '테크', '비즈니스', '이직', 'Tech', '공유'].join(',') },
        { name: 'msapplication-TileImage', content: 'png필요' },
        { name: 'referrer', content: 'origin' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'application-name', content: '뉴스' },
        { name: 'apple-mobile-web-app-title', content: '뉴스' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        { name: 'theme-color', content: 'white' },
        { name: 'apple-mobile-web-app-title', content: '뉴스' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'msapplication-tap-highlight', content: 'no' },
        { property: 'og:title', content: '스낵 SNAK - 쉽게 풀어쓰는 IT업계 뉴스' },
        { property: 'og:description', content: META.DESCRIPTION },
        { property: 'og:image', content: 'static/fb_og_image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ko' },
        { property: 'og:site_name', content: META.SNAK_NEWS_TITLE },
        { property: 'og:url', content: 'https://snak.news' },
        { property: 'og:type', content: 'website' },
        { property: 'twitter:title', content: META.SNAK_NEWS_TITLE },
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:image', content: 'static/snak_144x144.png' },
        { property: 'twitter:image', content: 'static/snak_144x144.png' },
        { property: 'twitter:description', content: META.DESCRIPTION },
      ],
    }),
  ],
});
