const path = require('path');
const shell = require('shelljs');

const cli = path.resolve(__dirname, '../bin/forge');

async function runCommand(command, silent = true) {
  return new Promise((resolve, reject) => {
    const { code, stdout, stderr } = shell.exec(`${cli} ${command}`.trim(), { silent });
    if (code === 0) {
      resolve(stdout);
    } else {
      reject(stderr);
    }
  });
}

async function sleep(timeout = 1000) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

module.exports.runCommand = runCommand;
module.exports.sleep = sleep;
