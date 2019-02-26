module.exports = function override(config, env) {
  // fixes https://github.com/graphql/graphql-js/issues/1272
  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto',
  });
  return config;
};
