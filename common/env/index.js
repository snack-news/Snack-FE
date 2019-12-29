const path = require('path');
const defaultEnv = require('./defaultEnv')

require('dotenv').config({path: path.resolve(__dirname, '.env')});

const env = {
  ...defaultEnv,
  ...process.env,
}

module.exports.env = env;

module.exports.publicEnv = ['ENVIRONMENT', 'DEBUG', 'PORT', 'URL'].reduce((obj, envKey) => ({
  ...obj,
  [envKey]: env[envKey]
}), {})