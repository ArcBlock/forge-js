module.exports = {
  env: {
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
  extends: ['airbnb-base'],
  rules: {
    indent: ['error', 2],
    'operator-linebreak': 'off',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'arrow-parens': 'off',
    'no-plusplus': 'off',
    'no-use-before-define': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'class-methods-use-this': 'off',
    'import/no-unresolved': ['error', { caseSensitive: true, ignore: ['core/'] }],
    'max-len': ['error', { code: 120, ignoreStrings: true, ignoreComments: true }],
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
};
