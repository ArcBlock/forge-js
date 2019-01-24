// const wget = require('wget');
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const chalk = require('chalk');
const findProcess = require('find-process');
const { symbols, hr, getSpinner, getProgress } = require('core/ui');
const {
  config,
  debug,
  requiredDirs,
  ensureForgeRelease,
  findReleaseConfig,
  getPlatform,
} = require('core/env');

// TODO: release dir cleanup

async function isForgeStopped() {
  const processes = await findProcess('name', 'forge.sh');
  debug('Running forge process', processes);
  if (processes.length) {
    shell.echo(`${symbols.error} forge is running, reinitialize will break things!`);
    shell.echo(`${symbols.info} To reinitialize, please run ${chalk.cyan('forge stop')} first!`);
    return false;
  }

  return true;
}

function releaseDirExists() {
  const releaseDir = ensureForgeRelease({}, false);
  if (releaseDir) {
    shell.echo(`${symbols.warning} forge already initialized: ${releaseDir}`);
    shell.echo(
      `${symbols.warning} to upgrade forge release, please run ${chalk.cyan(
        'rm -rf ~/.forge_cli'
      )} first`
    );
    shell.echo(hr);
    shell.echo(chalk.cyan('Current forge release'));
    shell.echo(hr);
    if (config.get('cli.forgeBinPath')) {
      shell.exec('forge version');
    }
    return true;
  }

  return false;
}

function fetchReleaseVersion() {
  const spinner = getSpinner('Fetching forge release version...');
  spinner.start();

  try {
    const url = 'http://releases.arcblock.io/forge/latest.json';
    const { code, stdout, stderr } = shell.exec(`curl "${url}"`, { silent: true });
    // debug('fetchReleaseVersion', { code, stdout, stderr, url });
    if (code === 0) {
      const { latest: version } = JSON.parse(stdout.trim()) || {};
      spinner.succeed(`Latest forge release version: v${version}`);
      return version;
    }
    spinner.fail(`Release version fetch error: ${stderr}`);
  } catch (err) {
    spinner.fail(`Release version fetch error: ${err.message}`);
  }

  process.exit(1);
}

function fetchAssetInfo(platform, version, key) {
  const name = `${key}_${platform}_amd64.tgz`;
  const url = `http://releases.arcblock.io/forge/${version}/${name}`;
  const defaultSize = {
    forge: 60 * 1024 * 1024,
    simulator: 20 * 1024 * 1024,
  };

  const spinner = getSpinner(`Fetching release asset info: ${name}...`);
  spinner.start();

  try {
    const { code, stdout, stderr } = shell.exec(`curl -I --silent "${url}"`, { silent: true });
    // debug('fetchAssetInfo', { url, platform, version, code, stdout, stderr });
    if (code === 0) {
      spinner.succeed(`Release asset info fetch success ${name}`);
      const header = stdout.split('\r\n').find(x => x.indexOf('Content-Length:') === 0);
      const size = header ? Number(header.split(':').pop().trim()) : defaultSize[key]; // prettier-ignore
      return { key, name, url, size, header };
    }
    spinner.fail(`Release asset info error: ${stderr}`);
  } catch (err) {
    spinner.fail(`Release asset info error: ${err.message}`);
  }

  process.exit(1);
}

function downloadAsset(asset) {
  return new Promise((resolve, reject) => {
    debug('Download asset', asset);
    const assetOutput = `/tmp/${asset.name}`;
    shell.exec(`rm -f ${assetOutput}`);
    const progress = getProgress({
      title: `${symbols.info} Downloading ${asset.name}`,
      unit: 'MB',
    });
    const total = (asset.size / 1024 / 1024).toFixed(2);
    progress.start(total, 0);

    // update progress bar
    const timer = setInterval(() => {
      if (fs.existsSync(assetOutput)) {
        const stat = fs.statSync(assetOutput);
        progress.update((stat.size / 1024 / 1024).toFixed(2));
      }
    }, 500);

    shell.exec(
      `curl ${asset.url} --silent --out /tmp/${asset.name}`,
      { async: true, silent: true },
      (code, _, stderr) => {
        clearInterval(timer);
        progress.update(total);
        progress.stop();

        if (code === 0) {
          shell.echo(`${symbols.success} Downloaded ${asset.name} to ${assetOutput}`);
          return resolve(assetOutput);
        }

        shell.echo(`${symbols.error} ${stderr}`);
        reject(new Error(`${asset.name} download failed`));
      }
    );
  });
}

function expandReleaseTarball(filePath, subFolder) {
  const fileName = path.basename(filePath);
  const targetDir = path.join(requiredDirs.release, subFolder);
  shell.exec(`mkdir -p ${targetDir}`);
  shell.exec(`cp ${filePath} ${targetDir}`);
  shell.exec(`cd ${targetDir} && tar -zxf ${fileName} && rm -f ${fileName}`);
  shell.echo(`${symbols.success} Expand release asset ${filePath} to ${targetDir}`);
}

function copyReleaseConfig() {
  const configPath = findReleaseConfig(requiredDirs.release);
  if (configPath) {
    const baseDir = path.dirname(requiredDirs.release);
    shell.echo(`${symbols.success} Extract forge config from ${configPath}`);
    shell.exec(`cp ${configPath} ${baseDir}/`);
    shell.echo(
      `${symbols.success} Forge config written to ${baseDir}/${path.basename(configPath)}`
    );
  } else {
    shell.echo(`${symbols.error} Forge config not found under release folder`);
    process.exit(1);
  }
}

async function main() {
  const isStopped = await isForgeStopped();
  if (!isStopped) {
    return process.exit(1);
  }

  try {
    if (releaseDirExists()) {
      return process.exit(1);
    }

    const platform = await getPlatform();
    shell.echo(`${symbols.info} Detected platform is: ${platform}`);

    const version = fetchReleaseVersion();
    const forgeAsset = fetchAssetInfo(platform, version, 'forge');
    debug('forgeAsset', forgeAsset);
    const forgeTarball = await downloadAsset(forgeAsset);
    // const forgeTarball = `/tmp/${forgeAsset.name}`;
    expandReleaseTarball(forgeTarball, 'forge');
    copyReleaseConfig();

    const simulatorAsset = fetchAssetInfo(platform, version, 'simulator');
    debug('simulatorAsset', simulatorAsset);
    const simulatorTarball = await downloadAsset(simulatorAsset);
    // const simulatorTarball = `/tmp/${simulatorAsset.name}`;
    expandReleaseTarball(simulatorTarball, 'simulator');

    shell.echo(`${symbols.success} Congratulations! forge initialized successfully!`);
    shell.echo('');
    shell.echo(`Now you can start a forge node with ${chalk.cyan('forge start')}`);
    shell.echo('');
  } catch (err) {
    debug.error(err);
    shell.echo(`${symbols.error} Forge initialize failed, please try again later`);
  }
}

exports.run = main;
exports.execute = main;
