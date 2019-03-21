module.exports = {
  parser: 'babel-eslint',
  plugins: ['import'],
  extends: 'airbnb',
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
  },
  globals: {
    __DEVELOPMENT__: true,
    $: true,
    web3: true,
    sentry: true,
    socket: true,
    logger: true,
    fixture: true,
  },
};
