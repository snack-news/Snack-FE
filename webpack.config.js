const path = require('path');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const eslintrc = require('./.eslintrc');

module.exports = {
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.[t|j]sx?$/,
        exclude: /node_modules/,
        use: [
          'awesome-typescript-loader',
          {
            loader: 'eslint-loader',
            options: {
              ...eslintrc,
              fix: true,
              cache: true,
            },
          },
        ],
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './template/index.html'),
    }),
  ],
};
