module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
