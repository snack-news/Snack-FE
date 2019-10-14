const createEslintrcOfEnv = ({ isNodeJS, isBrowser }) => {
  if (isNodeJS && isBrowser) {
    return {
      env: {
        'shared-node-browser': true,
      },
    };
  }

  return {
    env: {
      node: isNodeJS,
      browser: isBrowser,
    },
  };
};

module.exports = createEslintrcOfEnv;
