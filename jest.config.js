const path = require('path');

module.exports = {
  verbose: true,
  transform: {
    '^.+\\.[jt]sx?$': path.resolve(__dirname, './jest.config.babel.js'),
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  collectCoverageFrom: ['./src/**/*.[jt]s?(x)'],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      lines: 0,
      functions: 0,
    },
  },
  modulePathIgnorePatterns: ['__mocks__'],
  setupFilesAfterEnv: [path.resolve(__dirname, './jest.setup.js')],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': path.resolve(
      __dirname,
      './__mocks__/fileMock.js'
    ),
    '\\.(css|less)$': path.resolve(__dirname, './mocks/fileMock.js'),
  },
  // notify: true, // TODO 아래 이슈가 해결되고 사용해야 되는 옵션이다.
  // https://github.com/facebook/jest/issues/8036
};
