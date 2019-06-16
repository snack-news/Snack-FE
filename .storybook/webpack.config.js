const babelConfig = require('../babel.config.storybook')

const isPlainObject = function (obj) {
	return Object.prototype.toString.call(obj) === '[object Object]';
};

module.exports = ({ config, mode }) => {

  if(typeof config.entry === 'string'){
    config.entry = [config.entry]
  }

  if(Array.isArray(config.entry)){
    config.entry.push()
  }else if(isPlainObject(config.entry)){
    config.entry = {
      ...config.entry,
      appCommon: 
    }
  }else {
    console.error('config.entry를 해석할수 없습니다.', config.entry)
  }
  

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [{
      loader: require.resolve('babel-loader'),
      options: {
        ...babelConfig,
      },
    }, {
      loader: require.resolve('react-docgen-typescript-loader'),
    }]
    
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};