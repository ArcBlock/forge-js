const shell = require('shelljs');
const chalk = require('chalk');
const semver = require('semver');
const { symbols } = require('core/ui');
const { config, debug, getPlatform, RELEASE_ASSETS } = require('core/env');
const {
  releaseDirExists,
  fetchAssetInfo,
  downloadAsset,
  expandReleaseTarball,
  fetchReleaseVersion,
} = require('cli/node/init/init');

async function main({ args: [userVersion], opts: { mirror } }) {
  try {
    const platform = await getPlatform();
    shell.echo(`${symbols.info} Detected platform is: ${platform}`);

    const userVer =
      userVersion && semver.coerce(userVersion) ? semver.coerce(userVersion).version : '';
    const version = userVer || fetchReleaseVersion(mirror);
    if (releaseDirExists()) {
      if (version === config.get('cli.currentVersion')) {
        return process.exit(1);
      }
    }

    if (!userVer) {
      shell.echo(`${symbols.info} Download latest version: v${version}`);
    }

    // Start download and unzip
    for (const asset of RELEASE_ASSETS) {
      const assetInfo = fetchAssetInfo(platform, version, asset, mirror);
      debug(asset, assetInfo);
      const assetTarball = await downloadAsset(assetInfo);
      expandReleaseTarball(assetTarball, asset, version);
    }

    shell.echo(`${symbols.success} Congratulations! forge v${version} download successfully!`);
    shell.echo('');
    shell.echo(`Now you can use this version with ${chalk.cyan(`forge use ${version}`)}`);
    shell.echo('');
  } catch (err) {
    debug.error(err);
    shell.echo(`${symbols.error} Forge release download failed, please try again later`);
  }
}

exports.run = main;
exports.execute = main;
