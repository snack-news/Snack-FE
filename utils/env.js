const dotenv = require('dotenv').config().parsed;

const env = {
  ...dotenv,
  ...process.env,
};

const isDevelopment = env.ENVIRONMENT === 'development';
const isProduction = !isDevelopment;

module.exports = {
  isDevelopment,
  isProduction,
  env,
};
