const shell = require('shelljs');

// Execute the cli silently.
function main({ args: [command = ''] }) {
  if (!command) {
    shell.exec('forge -h');
  }

  shell.exec(`forge ${command} -h`);
}

exports.run = main;
exports.execute = main;
