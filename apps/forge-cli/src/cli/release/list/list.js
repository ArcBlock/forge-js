const fs = require('fs');
const path = require('path');
const yaml = require('yaml');
const chalk = require('chalk');
const shell = require('shelljs');
const { config, debug, isDirectory } = require('core/env');

function printList(title, list, current) {
  shell.echo(`${title}:`);
  list.forEach(x => shell.echo(x === current ? chalk.cyan(`  ✓ ${x}`) : `  - ${x}`));
  shell.echo('');
}

function listReleases() {
  const { release } = config.get('cli').requiredDirs;

  const forgeReleases = fs
    .readdirSync(path.join(release, 'forge'))
    .filter(x => isDirectory(path.join(release, 'forge', x)));
  const starterReleases = fs
    .readdirSync(path.join(release, 'forge_starter'))
    .filter(x => isDirectory(path.join(release, 'forge_starter', x)));
  const simulatorReleases = fs
    .readdirSync(path.join(release, 'simulator'))
    .filter(x => isDirectory(path.join(release, 'simulator', x)));

  return {
    forge: forgeReleases,
    starter: starterReleases,
    simulator: simulatorReleases,
  };
}

function main() {
  let current = '';
  try {
    const { release } = config.get('cli').requiredDirs;
    const filePath = path.join(release, 'forge', 'release.yml');
    const yamlObj = fs.existsSync(filePath)
      ? yaml.parse(fs.readFileSync(filePath).toString()) || {}
      : {};
    current = yamlObj.current;
  } catch (err) {
    debug.error(err);
  }

  const { forge, starter, simulator } = listReleases();
  debug({ forge, starter, simulator, current });

  printList('Forge Kernel', forge, current);
  printList('Forge Starter', starter, current);
  printList('Simulator', simulator, current);
}

exports.run = main;
exports.execute = main;
exports.listReleases = listReleases;
