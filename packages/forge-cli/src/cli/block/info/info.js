const shell = require('shelljs');
const { client } = require('core/env');
const { symbols } = require('core/ui');
const pretty = require('json-stringify-pretty-compact');

async function execute({ args: [argHeight] }) {
  if (!/^[1-9]\d*$/.test(argHeight)) {
    shell.echo(`${symbols.error} Please input a right block height and try again.`);
    return;
  }
  try {
    const stream = await client.getBlock({ height: argHeight });
    stream
      .on('data', function(result) {
        shell.echo(`${symbols.success} get block info success: `);
        shell.echo(`${pretty(result)}`);
      })
      .on('error', err => {
        shell.echo(`${symbols.error} error: ${err}`);
      });
  } catch (err) {
    shell.echo(`${symbols.error} error: ${err}`);
  }
}

exports.run = execute;
exports.execute = execute;
