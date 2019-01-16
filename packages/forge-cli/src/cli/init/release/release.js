// const wget = require('wget');
// const progress = require('progress');
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const chalk = require('chalk');
const github = require('octonode');
const args = require('yargs').argv;
const { symbols, getSpinner } = require('core/ui');
const { requiredDirs, findReleaseConfig } = require('core/env');
const { GITHUB_TOKEN } = process.env;

const client = github.client(GITHUB_TOKEN);

// TODO: release dir rewrite warning and confirm
// TODO: guess forge release name and confirm with user

function fetchRelease() {
  return new Promise((resolve, reject) => {
    const spinner = getSpinner('Fetching forge release info...');
    spinner.start();

    const repo = client.repo('ArcBlock/forge');
    repo.releases((err, releases) => {
      if (err) {
        console.trace(err);
        spinner.fail(`Forge release info fetched error: ${err.message}`);
        return reject(err);
      }

      const pattern = new RegExp(`_${process.platform}_`, 'i');
      const release = releases.find(x => x.assets.some(a => pattern.test(a.name)));
      if (release) {
        spinner.succeed(
          `Latest forge release is ${release.tag_name}(#${release.id} on ${release.created_at})`
        );
        const asset = release.assets.find(x => pattern.test(x.name));
        resolve({ release, asset });
      } else {
        spinner.fail(`No suitable forge release found for platform ${process.platform}`);
        reject(new Error('No compatible release found'));
      }
    });
  });
}

function downloadAsset(release, asset) {
  return new Promise((resolve, reject) => {
    const assetOutput = `/tmp/${asset.name}`;
    shell.exec(`rm -f ${assetOutput}`);
    const spinner = getSpinner(`Download forge release ${asset.name}...`);
    spinner.start();
    shell.exec(
      `fetch --repo="https://github.com/arcblock/forge" \
      --tag="${release.tag_name}" \
      --release-asset="${asset.name}" \
      --github-oauth-token="${GITHUB_TOKEN}" \
      /tmp`,
      { async: true },
      (code, _, stderr) => {
        if (code === 0) {
          spinner.succeed(`Forge release downloaded to ${assetOutput}`);
          return resolve(assetOutput);
        }

        spinner.fail(stderr);
        reject(new Error('release download failed'));
      }
    );
  });
}

function ensureFetchCLI() {
  const { stdout } = shell.exec('which fetch');
  if (!stdout) {
    shell.echo(`${symbols.error} fetch command not found!`);
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

function expandReleaseTarball(filePath) {
  const fileName = path.basename(filePath);
  shell.exec(`cp ${filePath} ${requiredDirs.release}/`);
  shell.exec(`cd ${requiredDirs.release} && tar -zxf ${fileName} && rm -f ${fileName}`);
}

function copyReleaseConfig() {
  const configPath = findReleaseConfig(requiredDirs.release);
  if (configPath) {
    const baseDir = path.dirname(requiredDirs.release);
    shell.echo(`${symbols.success} extract forge config from ${configPath}`);
    shell.exec(`cp ${configPath} ${baseDir}/`);
    shell.echo(
      `${symbols.success} forge config written to ${baseDir}/${path.basename(configPath)}`
    );
  } else {
    shell.echo(`${symbols.error} forge config not found under release folder`);
    process.exit(1);
  }
}

async function main() {
  try {
    const { releaseTarball } = args;
    let releaseFilePath = '';
    if (releaseTarball && fs.existsSync(releaseTarball) && fs.statSync(releaseTarball).isFile()) {
      shell.echo(`${symbols.info} use existing forge release tarball: ${releaseTarball}`);
      releaseFilePath = releaseTarball;
    } else {
      ensureGithubToken();
      ensureFetchCLI();
      const { release, asset } = await fetchRelease();
      releaseFilePath = await downloadAsset(release, asset);
    }

    expandReleaseTarball(releaseFilePath);
    copyReleaseConfig();
    shell.echo(`${symbols.success} Congratulations! forge initialized successfully!`);
    shell.echo('');
    shell.echo(`Now you can start a forge node with ${chalk.cyan('forge start')}`);
    shell.echo('');
  } catch (err) {
    console.error(err);
    shell.echo(`${symbols.error} forge initialize failed, please try again later`);
  }
}

exports.run = main;
exports.execute = main;
