const shell = require('shelljs');
const bddStdin = require('bdd-stdin');
const { runCommand, sleep } = require('../tools/jest-utils');

// beforeAll(async () => {
//   shell.exec('rm -rf ~/.forge_release');
//   shell.exec('rm -rf ~/.forge_cli/keys');
//   const output = await runCommand('start');
//   console.log(output);
//   await sleep();
// });

describe('core', () => {
  test('should return command list with no arguments', async () => {
    const output = await runCommand('');
    expect(output.includes('Options')).toBeTruthy();
    expect(output.includes('Commands')).toBeTruthy();
    expect(output.includes('Examples')).toBeTruthy();
  });
});

describe('misc', () => {
  test('should return help', async () => {
    const output = await runCommand('help block');
    expect(output.includes('forge block -f')).toBeTruthy();
    expect(output.includes('forge block --show-txs')).toBeTruthy();
    expect(output.includes('forge block 123')).toBeTruthy();
    expect(output.includes('forge block 123,456')).toBeTruthy();
    expect(output.includes('forge block 1...4')).toBeTruthy();
  });

  test('should return version', async () => {
    const output = await runCommand('version');
    expect(output.includes('forge-core')).toBeTruthy();
    expect(output.includes('forge-cl')).toBeTruthy();
    expect(output.includes('ipfs')).toBeTruthy();
    expect(output.includes('tendermint')).toBeTruthy();
  });
});

describe('node', () => {
  test('should return process list', async () => {
    const output = await runCommand('ps');
    expect(output.includes('starter')).toBeTruthy();
    expect(output.includes('forge')).toBeTruthy();
    expect(output.includes('ipfs')).toBeTruthy();
    expect(output.includes('tendermint')).toBeTruthy();
  });
});

describe('block', () => {
  test('should return latest block info', async () => {
    const output = await runCommand('block');
    expect(output.includes('Block#')).toBeTruthy();
  });

  test('should return single block info', async () => {
    const output = await runCommand('block 1');
    expect(output.includes('Block#1')).toBeTruthy();
  });

  test('should return multiple block info', async () => {
    const output = await runCommand('block 1,2');
    expect(output.includes('Block#1')).toBeTruthy();
    expect(output.includes('Block#2')).toBeTruthy();
  });

  test('should return multiple block info', async () => {
    const output = await runCommand('block 1...2');
    expect(output.includes('Block#1')).toBeTruthy();
    expect(output.includes('Block#2')).toBeTruthy();
  });

  test('should return txs info', async () => {
    const output = await runCommand('block 2 --show-txs');
    expect(output.includes('signatures')).toBeTruthy();
  });
});

describe('tx', () => {
  test('should return latest tx info', async () => {
    const output = await runCommand('tx');
    console.log(output);
  });
});

describe.skip('account', () => {
  test('should create account', async () => {
    bddStdin('123456', '\n', 'wangshijun', '\n', '\n', '\n', bddStdin.keys.down, '\n');

    const output = await runCommand('account:create');
    console.log(output);
  });
});

// afterAll(async () => {
//   const output = await runCommand('stop');
//   console.log(output);
// });
