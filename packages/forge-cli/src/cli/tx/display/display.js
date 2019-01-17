const shell = require('shelljs');
const { client } = require('core/env');
const { symbols } = require('core/ui');
const pretty = require('json-stringify-pretty-compact');

async function execute({ args: [hash] }) {
  try {
    const stream = await client.getTx({ hash: hash });
    stream
      .on('data', function(result) {
        if (result && result.code === 0) {
          shell.echo(`${symbols.success} get tx success: `);
          shell.echo(`${pretty(result.info.tx)}`);
        } else {
          shell.echo(`${symbols.error} get tx error: ${pretty(result)}`);
        }
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
