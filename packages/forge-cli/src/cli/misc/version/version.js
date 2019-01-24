const shell = require('shelljs');
const { version: forgeCliVersion } = require('../../../../package.json');
const { config, debug, createFileFinder, getPlatform } = require('core/env');
const { symbols } = require('core/ui');

async function main() {
  const { releaseDir, releaseVersion } = config.get('cli');
  const { storageEngine, consensusEngine } = config.get('forge');
  const storageEnginePath = createFileFinder('storage', `priv/${storageEngine}/${storageEngine}`)(
    releaseDir
  );
  const consensusEnginePath = createFileFinder(
    'consensus',
    `priv/${consensusEngine}/${consensusEngine}`
  )(releaseDir);

  // core
  shell.echo(`${symbols.success} forge-core version ${releaseVersion} on ${await getPlatform()}`);
  shell.echo(`${symbols.success} forge-cli version ${forgeCliVersion}`);

  // tendermint
  if (storageEnginePath) {
    debug(`storage engine path: ${storageEnginePath}`);
    const { code, stdout, stderr } = shell.exec(`${storageEnginePath} version`, { silent: true });
    if (code === 0) {
      shell.echo(`${symbols.success} storage engine: ${stdout.trim()}`);
    } else {
      debug(`${storageEngine} version error: ${stderr.trim()}`);
    }
  }

  // ipfs
  if (consensusEnginePath) {
    debug(`storage engine path: ${consensusEnginePath}`);
    const { code, stdout, stderr } = shell.exec(`${consensusEnginePath} version`, { silent: true });
    if (code === 0) {
      shell.echo(
        `${symbols.success} consensus engine: ${consensusEngine} version ${stdout.trim()}`
      );
    } else {
      debug(`${consensusEngine} version error: ${stderr.trim()}`);
    }
  }

  const app = config.get('app');
  if (app && app.name && app.version) {
    shell.echo(`${symbols.success} app: ${app.name} version ${app.version}`);
  }
}

exports.run = main;
exports.execute = main;
