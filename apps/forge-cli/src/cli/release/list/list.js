const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const { config, debug } = require('core/env');

function isDirectory(x) {
  return fs.existsSync(x) && fs.statSync(x).isDirectory();
}

function printList(title, list) {
  shell.echo(`${title}:`);
  list.forEach(x => shell.echo(`  - ${x}`));
  shell.echo('');
}

function main() {
  const { release } = config.get('cli').requiredDirs;

  const forgeReleases = fs
    .readdirSync(path.join(release, 'forge'))
    .filter(x => isDirectory(path.join(release, 'forge', x)));
  const starterReleases = fs
    .readdirSync(path.join(release, 'forge_starter'))
    .filter(x => isDirectory(path.join(release, 'forge', x)));
  const simulatorReleases = fs
    .readdirSync(path.join(release, 'simulator'))
    .filter(x => isDirectory(path.join(release, 'forge', x)));

  debug({ forgeReleases, starterReleases, simulatorReleases });

  printList('Forge Core', forgeReleases);
  printList('Forge Starter', starterReleases);
  printList('Simulator', simulatorReleases);
}

exports.run = main;
exports.execute = main;
