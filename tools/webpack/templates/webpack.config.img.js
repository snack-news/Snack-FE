module.exports = emitFile => ({
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              emitFile,
            },
          },
        ],
      },
    ],
  },
});
