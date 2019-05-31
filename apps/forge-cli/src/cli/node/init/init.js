/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
// const wget = require('wget');
const fs = require('fs');
const path = require('path');
const yaml = require('yaml');
const shell = require('shelljs');
const chalk = require('chalk');
const semver = require('semver');
const findProcess = require('find-process');
const { symbols, hr, getSpinner, getProgress } = require('core/ui');
const {
  config,
  debug,
  requiredDirs,
  ensureForgeRelease,
  findReleaseConfig,
  findReleaseConfigOld,
  getPlatform,
  printLogo,
  RELEASE_ASSETS,
  DEFAULT_MIRROR,
} = require('core/env');

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
    const version = config.get('cli.currentVersion');
    shell.echo(`${symbols.warning} forge version ${version} already initialized: ${releaseDir}`);
    return true;
  }

  return false;
}

function fetchReleaseVersion(mirror = DEFAULT_MIRROR) {
  const spinner = getSpinner('Fetching forge release version...');
  spinner.start();

  try {
    const url = `${mirror}/forge/latest.json`;
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

function fetchAssetInfo(platform, version, key, mirror = DEFAULT_MIRROR) {
  const name = `${key}_${platform}_amd64.tgz`;
  const url = `${mirror}/forge/${version}/${name}`;
  const defaultSize = {
    forge: 60 * 1024 * 1024,
    simulator: 20 * 1024 * 1024,
  };

  const spinner = getSpinner(`Fetching release asset info: ${name}...`);
  spinner.start();

  try {
    const { code, stdout, stderr } = shell.exec(`curl -I --silent "${url}"`, { silent: true });
    debug('fetchAssetInfo', { url, platform, version, code, stdout, stderr });
    if (code === 0 && stdout) {
      const notFound = stdout
        .split('\r\n')
        .find(x => x.indexOf('HTTP/1.1 404') === 0 || x.indexOf('HTTP/2 404') === 0);
      if (notFound) {
        spinner.fail(`Release asset "${url}" not found`);
        process.exit(1);
      }
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
    const assetOutput = path.join(requiredDirs.tmp, asset.name);
    try {
      shell.rm(assetOutput);
    } catch (err) {
      // Do nothing
    }
    shell.echo(`${symbols.info} Start download ${asset.url}`);
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
      `curl ${asset.url} --silent --out ${assetOutput}`,
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

function expandReleaseTarball(filePath, subFolder, version) {
  const fileName = path.basename(filePath);
  const targetDir = path.join(requiredDirs.release, subFolder, version);
  shell.exec(`mkdir -p ${targetDir}`);
  shell.exec(`cp ${filePath} ${targetDir}`);
  shell.exec(`cd ${targetDir} && tar -zxf ${fileName} && rm -f ${fileName}`);
  shell.echo(`${symbols.success} Expand release asset ${filePath} to ${targetDir}`);
}

function copyReleaseConfig(version) {
  const configPath =
    findReleaseConfig(requiredDirs.release, version) ||
    findReleaseConfigOld(requiredDirs.release, version);
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

function updateReleaseYaml(asset, version) {
  const filePath = path.join(requiredDirs.release, asset, 'release.yml');
  try {
    shell.exec(`touch ${filePath}`, { silent: true });
    debug('updateReleaseYaml', { asset, version, filePath });
    const yamlObj = fs.existsSync(filePath)
      ? yaml.parse(fs.readFileSync(filePath).toString()) || {}
      : {};
    if (yamlObj.current) {
      yamlObj.old = yamlObj.current;
    }
    yamlObj.current = version;
    fs.writeFileSync(filePath, yaml.stringify(yamlObj));
  } catch (err) {
    debug.error(err);
  }
}

async function main({ args: [userVersion], opts: { mirror } }) {
  try {
    printLogo();

    const platform = await getPlatform();
    shell.echo(`${symbols.info} Detected platform is: ${platform}`);

    const userVer =
      userVersion && semver.coerce(userVersion) ? semver.coerce(userVersion).version : '';
    const version = userVer || fetchReleaseVersion(mirror);

    if (releaseDirExists()) {
      if (version === config.get('cli.currentVersion')) {
        shell.echo(`${symbols.info} already initialized latest version: ${version}`);
        shell.echo(hr);
        shell.echo(chalk.cyan('Current forge release'));
        shell.echo(hr);
        if (config.get('cli.forgeBinPath')) {
          shell.exec('forge version');
        }
        return process.exit(1);
      }
    }

    // Ensure forge is stopped, because init on an running node may cause some mess
    const isStopped = await isForgeStopped();
    if (!isStopped) {
      return process.exit(1);
    }

    // Start download and unzip
    for (const asset of RELEASE_ASSETS) {
      const assetInfo = fetchAssetInfo(platform, version, asset, mirror);
      debug(asset, assetInfo);
      // eslint-disable-next-line no-await-in-loop
      const assetTarball = await downloadAsset(assetInfo);
      expandReleaseTarball(assetTarball, asset, version);
      if (asset === 'forge') {
        // FIXME: copy the latest config as shared config on each release?
        copyReleaseConfig(version);
      }
      if (asset === 'forge' || asset === 'simulator') {
        updateReleaseYaml(asset, version);
      }
    }

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
exports.isForgeStopped = isForgeStopped;
exports.releaseDirExists = releaseDirExists;
exports.fetchReleaseVersion = fetchReleaseVersion;
exports.fetchAssetInfo = fetchAssetInfo;
exports.downloadAsset = downloadAsset;
exports.expandReleaseTarball = expandReleaseTarball;
exports.updateReleaseYaml = updateReleaseYaml;

// exports.run = () => updateReleaseYaml('forge', '0.16.0');
// exports.execute = () => updateReleaseYaml('forge', '0.16.0');
