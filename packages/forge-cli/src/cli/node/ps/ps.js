// const inquirer = require('inquirer');
const shell = require('shelljs');
const chalk = require('chalk');
const pidUsageTree = require('pidusage-tree');
const pidInfo = require('find-process');
const Table = require('cli-table-redemption');
const prettyTime = require('pretty-ms');
const prettyBytes = require('pretty-bytes');
const { config } = require('core/env');
const { symbols } = require('core/ui');

// const { symbols } = require('core/ui');
// const { enums } = require('@arcblock/forge-proto');

async function main() {
  const { forgeBinPath, forgeConfigPath } = config.cli;
  const { stdout: pid } = shell.exec(`FORGE_CONFIG=${forgeConfigPath} ${forgeBinPath} pid`, {
    silent: true,
  });

  const pidNumber = Number(pid);
  if (!pidNumber) {
    shell.echo(
      `${symbols.warning} forge daemon not started yet, start with ${chalk.cyan('forge start')}`
    );
    shell.echo('');
    process.exit(0);
  }

  try {
    const processes = await pidUsageTree(pidNumber);
    const results = await Promise.all(
      Object.values(processes).map(async x => {
        try {
          const [info] = await pidInfo('pid', x.pid);
          Object.assign(x, info);
        } catch (err) {
          console.error(`Error getting pid info: ${x.pid}`, err);
        }

        return x;
      })
    );

    const table = new Table({
      head: ['Name', 'PID', 'Uptime', 'Memory', 'CPU'],
      style: { 'padding-left': 1, head: ['cyan', 'bold'], compact: true },
      colWidths: [15, 10, 15, 15, 20],
    });
    const rows = results
      .filter(x => /(forge|tendermint|ipfs)/.test(x.name))
      .map(x => ({
        Name: x.name,
        PID: x.pid,
        Uptime: prettyTime(x.elapsed),
        Memory: prettyBytes(x.memory),
        CPU: x.cpu,
      }));

    rows.forEach(x => table.push(Object.values(x)));
    console.log(table.toString());
    process.exit(0);
  } catch (err) {
    console.error(err);
  }
}

exports.run = main;
exports.execute = main;
