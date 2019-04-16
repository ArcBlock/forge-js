const bddStdin = require('bdd-stdin');
const { runCommand } = require('../tools/jest-utils');

describe('account create', () => {
  it.skip('should return command list with no arguments', async () => {
    bddStdin('123456', '\n', 'wangshijun', '\n', '\n', '\n', bddStdin.keys.down, '\n');

    const output = await runCommand('account:create');
    console.log(output);
  });
});
