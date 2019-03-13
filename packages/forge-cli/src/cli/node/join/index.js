// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./join');

cli(
  'join <forge-web-api-endpoint>',
  'Join a network by providing an graphql endpoint to fetch config',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: true,
      runningNode: false,
      rpcClient: true,
      wallet: false,
    },
    options: [],
  }
);
