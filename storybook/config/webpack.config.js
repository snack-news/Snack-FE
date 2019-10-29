require('dotenv').config();
const merge = require('webpack-merge');

const babelConfig = require('./babelrc');

const common = require('~tools/webpack/webpack.config.common');
const font = require('~tools/webpack/webpack.config.font');
const img = require('~tools/webpack/webpack.config.img');
const scss = require('~tools/webpack/webpack.config.scss');

module.exports = ({ config }) => {
  const newConfig = merge(
    {
      module: {
        rules: [
          {
            test: /\.(js|jsx|ts|tsx)?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: babelConfig,
            },
          },
        ],
      },
    },
    common,
    font,
    img,
    scss,
    cleanModuleRules(config, [
      'css',
      'scss',
      'sass',

      'png',

      'js',
      'jsx',
      'ts',
      'tsx',
    ])
  );

  return newConfig;
};

/**
 * 기존 config에서 입력된 확장자(exts)를 다루는
 * module(loader) 를 삭제한 config를 반환한다.
 *
 * @param {*} config 기존 webpack config
 * @param {*} exts 제거할 module이 다루는 파일 확장자
 */
const cleanModuleRules = (config, exts) => {
  const cleanedConfig = { ...config };

  cleanedConfig.module.rules = config.module.rules.filter(rule => {
    return (
      rule.test instanceof RegExp === false ||
      exts.every(ext => rule.test.test(`file.${ext}`) === false)
    );
  });

  return cleanedConfig;
};
