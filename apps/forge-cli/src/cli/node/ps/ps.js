const shell = require('shelljs');
const chalk = require('chalk');
const Table = require('cli-table-redemption');
const { getForgeProcesses } = require('core/env');
const { symbols } = require('core/ui');

async function main() {
  const processes = await getForgeProcesses();

  if (!processes.length) {
    shell.echo(
      `${symbols.warning} forge daemon not started yet, start with ${chalk.cyan('forge start')}`
    );
    shell.echo('');
    process.exit(0);
  }

  const table = new Table({
    head: ['Name', 'PID', 'Uptime', 'Memory', 'CPU'],
    style: { 'padding-left': 1, head: ['cyan', 'bold'], compact: true },
    colWidths: [15, 10, 15, 15, 20],
  });

  processes.forEach(x => table.push(Object.values(x)));
  shell.echo(table.toString());
  process.exit(0);
}

exports.run = main;
exports.execute = main;
