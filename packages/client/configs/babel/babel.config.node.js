module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
        targets: { node: true },
      },
    ],
  ],
};
