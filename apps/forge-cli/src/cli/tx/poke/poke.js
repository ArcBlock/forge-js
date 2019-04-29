const shell = require('shelljs');
const chalk = require('chalk');
const moment = require('moment');
const { symbols, hr, pretty } = require('core/ui');
const { createRpcClient, config, debug } = require('core/env');

async function main() {
  const client = createRpcClient();
  const wallet = config.get('cli.wallet');
  const itx = {
    date: moment(new Date().toISOString())
      .utc()
      .format('YYYY-MM-DD'),
    address: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
  };

  shell.echo(`${symbols.info} poke tx to send`);
  shell.echo(hr);
  shell.echo(pretty(itx));
  shell.echo(hr);

  try {
    const res = await client.sendPokeTx({
      token: wallet.token,
      tx: {
        nonce: 0,
        from: wallet.address,
        itx,
      },
    });
    shell.echo(`${symbols.success} poke success!`);
    shell.echo(`${symbols.info} check tx with: ${chalk.cyan(`forge tx ${res}`)}`);
    shell.echo(
      `${symbols.info} check balance with: ${chalk.cyan(`forge account ${wallet.address}`)}`
    );
  } catch (err) {
    debug.error(err);
    shell.echo(`${symbols.error} poke failed`);
  }
}

exports.run = main;
exports.execute = main;
