const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackTemplate = require('html-webpack-template');

const babelConfig = require('./babel.config.webpack');

const ROOT_PATH = path.resolve(__dirname, '.');
const SRC_PATH = path.resolve(ROOT_PATH, './src/');

module.exports = {
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
    new HtmlWebpackPlugin({
      inject: false,
      template: htmlWebpackTemplate,
      bodyHtmlSnippet: '<div id="root"></div>',
      mobile: true,
      meta: [
        {
          property: 'og:title',
          content: '스낵 - 쉽게 풀어쓰는 Tech News',
        },
        {
          property: 'og:url',
          content: 'http://snak.news',
        },
      ],
    }),
  ],
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
