const throwIfMissing = name => {
  throw new Error(`Missing ${name} parameter`);
};

module.exports = throwIfMissing;
