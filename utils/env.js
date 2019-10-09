const env = require('dotenv').config().parsed;

const isDevelopment = env.ENVIRONMENT === 'development';
const isProduction = !isDevelopment;

module.exports = {
  isDevelopment,
  isProduction,
};
