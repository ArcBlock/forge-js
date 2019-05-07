const os = require('os');
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const { config, debug } = require('core/env');
const { symbols } = require('core/ui');

function resolveLogPath(folder, file) {
  return folder ? path.resolve(`${folder.replace('~', os.homedir())}/${file}`) : '';
}

function findLogFiles() {
  return {
    app: resolveLogPath(config.get('app.path'), config.get('app.logfile', 'logs/app.log')),
    error: resolveLogPath(
      config.get('forge.path'),
      config.get('forge.logfile', 'logs/forge_error.log')
    ),
    transaction: resolveLogPath(
      config.get('forge.path'),
      config.get('forge.logfile', 'logs/forge_transaction.log')
    ),
    ipfs: resolveLogPath(config.get('ipfs.path'), config.get('ipfs.logfile', 'logs/ipfs.log')),
    tendermint: resolveLogPath(
      config.get('tendermint.path'),
      config.get('tendermint.logfile', 'logs/tendermint.log')
    ),
  };
}

function tailLogFile(logs, type) {
  if (type !== 'all' && !logs[type]) {
    shell.echo(`${symbols.error} Log file for ${type} is not found!`);
    return [];
  }
  if (logs[type]) {
    if (!fs.existsSync(logs[type])) {
      shell.touch(logs[type]);
    }

    return [logs[type]];
  }

  Object.keys(logs).forEach(key => {
    if (!fs.existsSync(logs[key])) {
      shell.touch(logs[key]);
    }
  });

  return Object.values(logs).filter(Boolean);
}

async function main({ args: [type = 'all'] }) {
  const logs = findLogFiles();
  debug('LogFiles', logs);
  const targetLogs = tailLogFile(logs, type);
  targetLogs.forEach(x => shell.echo(`${symbols.success} tail log ${x}`));
  shell.exec(`tail -f ${targetLogs.join(' ')}`);
}

exports.run = main;
exports.execute = main;
