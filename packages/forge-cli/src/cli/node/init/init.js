// const wget = require('wget');
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const chalk = require('chalk');
const github = require('octonode');
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
const { GITHUB_TOKEN } = process.env;

const client = github.client(GITHUB_TOKEN);

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
  if (ensureForgeRelease({}, false)) {
    shell.echo(`${symbols.warning} forge already initialized!`);
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

function fetchRelease(platform) {
  return new Promise((resolve, reject) => {
    const spinner = getSpinner('Fetching forge release info...');
    spinner.start();

    const repo = client.repo('ArcBlock/forge');
    repo.releases((err, releases) => {
      if (err) {
        debug.error(err);
        spinner.fail(`Forge release info fetched error: ${err.message}`);
        return reject(err);
      }

      const forgePattern = new RegExp(`forge_${platform}_`, 'i');
      const simulatorPattern = new RegExp(`simulator_${platform}_`, 'i');
      const release = releases.find(x => x.assets.some(a => forgePattern.test(a.name)));
      if (release) {
        spinner.succeed(
          `Latest forge release is ${release.tag_name}(#${release.id} on ${release.created_at})`
        );
        const forgeAsset = release.assets.find(x => forgePattern.test(x.name));
        const simulatorAsset = release.assets.find(x => simulatorPattern.test(x.name));
        resolve({ release, forgeAsset, simulatorAsset });
      } else {
        spinner.fail(`No suitable forge release found for platform ${platform}`);
        reject(new Error('No compatible release found'));
      }
    });
  });
}

function downloadAsset(release, asset) {
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
      `fetch --repo="https://github.com/arcblock/forge" \
      --tag="${release.tag_name}" \
      --release-asset="${asset.name}" \
      --github-oauth-token="${GITHUB_TOKEN}" \
      /tmp`,
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

function ensureFetchCLI() {
  const { stdout } = shell.exec('which fetch', { silent: true });
  if (!stdout) {
    shell.echo(`${symbols.error} Fetch command not found!`);
    shell.echo(
      `${symbols.error} Please install at: https://github.com/gruntwork-io/fetch/releases`
    );
    process.exit(1);
  }
}

function ensureGithubToken() {
  if (!process.env.GITHUB_TOKEN) {
    shell.echo(`${symbols.error} GITHUB_TOKEN environment variable not set!`);
    shell.echo(
      `${symbols.info} Generate new GITHUB_TOKEN at: https://github.com/settings/tokens/new`
    );
    shell.echo(
      `${symbols.info} Then run command ${chalk.green('GITHUB_TOKEN=<TOKEN> forge init')}`
    );
    process.exit(1);
  }
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
    const platform = await getPlatform();
    shell.echo(`${symbols.info} Detected platform is: ${platform}`);

    if (releaseDirExists()) {
      return process.exit(1);
    }

    ensureGithubToken();
    ensureFetchCLI();

    const { release, forgeAsset, simulatorAsset } = await fetchRelease(platform);
    const forgeTarball = await downloadAsset(release, forgeAsset);
    // const forgeTarball = `/tmp/${forgeAsset.name}`;
    expandReleaseTarball(forgeTarball, 'forge');
    copyReleaseConfig();

    const simulatorTarball = await downloadAsset(release, simulatorAsset);
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
