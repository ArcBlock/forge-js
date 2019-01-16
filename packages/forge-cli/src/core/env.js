const fs = require('fs');
const os = require('os');
const path = require('path');
const shell = require('shelljs');
const { RpcClient, parseConfig } = require('@arcblock/forge-sdk');
const debug = require('debug')(require('../../package.json').name);

const { crossMark, checkMark, warnMark, getSpinner } = require('./ui');
const dataDir = path.resolve(os.homedir(), '.forge-cli');
const requiredDirs = {
  cache: path.join(dataDir, 'cache'),
  release: path.join(dataDir, 'release'),
};

const client = {}; // global shared rpc client
const config = { cli: {} }; // global shared forge-cli run time config

function setupEnv(args) {
  debug('setupEnv.args', args);
  ensureRequiredDirs();

  // forge bin path
  if (args.forgeReleaseDir) {
    if (fs.existsSync(args.forgeReleaseDir)) {
      const forgeBinPath = path.join(args.forgeReleaseDir, './bin/forge');
      if (fs.existsSync(forgeBinPath) && fs.statSync(forgeBinPath).isFile()) {
        config.cli.forgeBinPath = forgeBinPath;
        debug(`Using forge bin path ${forgeBinPath}`);
      } else {
        shell.echo(`${warnMark} --forge-release-dir is invalid, non forge bin found`);
        process.exit(1);
      }
    } else {
      shell.echo(`${warnMark} --forge-release-dir does not exist`);
      process.exit(1);
    }
  } else {
    const releaseDir = requiredDirs.release;
    const forgeBinPath = path.join(releaseDir, './bin/forge');
    if (fs.existsSync(forgeBinPath) && fs.statSync(forgeBinPath).isFile()) {
      config.cli.forgeBinPath = forgeBinPath;
      debug(`Using forge bin path ${forgeBinPath}`);
    } else {
      shell.echo(`${warnMark} forge release not found under ${releaseDir}`);
      shell.echo(
        'If you are maintaining a node with forge-cli, please run `forge init:core` first'
      );
    }
  }

  // RPC Client
  const configPath = args.forgeConfigPath || process.env.FORGE_CONFIG;
  if (configPath && fs.existsSync(configPath)) {
    createRpcClient(configPath);
  }
}

function ensureRequiredDirs() {
  Object.keys(requiredDirs).forEach(x => {
    const dir = requiredDirs[x];
    if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
      debug(`${checkMark} ${x} dir already initialized: ${dir}`);
    } else {
      try {
        shell.mkdir('-p', dir);
        shell.echo(`${checkMark} initialized ${x} dir for forge-cli: ${dir}`);
      } catch (err) {
        shell.echo(`${crossMark} failed to initialize ${x} dir for forge-cli: ${dir}`, err);
      }
    }
  });
}

function createRpcClient(configPath) {
  const forgeConfig = parseConfig(configPath);
  debug(`${checkMark} using forge config from ${configPath}`);
  Object.assign(client, new RpcClient(forgeConfig));
  Object.assign(config, forgeConfig);
  debug(`${checkMark} rpc client created!`);
}

function writeCache(key, data) {
  try {
    fs.writeFileSync(path.join(requiredDirs.cache, `${key}.json`), JSON.stringify(data));
    debug(`${checkMark} cache ${key} write success!`);
    return true;
  } catch (err) {
    shell.echo(`${checkMark} cache ${key} write failed!`, err);
    return false;
  }
}

function readCache(key) {
  try {
    const filePath = path.join(requiredDirs.cache, `${key}.json`);
    return JSON.parse(fs.readFileSync(filePath));
  } catch (err) {
    shell.echo(`${checkMark} cache ${key} read failed!`, err);
    return null;
  }
}

function downloadRelease() {
  const spinner = getSpinner('Install github release downloader...');
  spinner.start();
  shell.exec('npm install -g download-github-release');
  spinner.text = 'Download github release...';
  shell.exec('download-github-release -s darwin ArcBlock forge');
  spinner.stopAndPersist();
}

module.exports = {
  client,
  config,
  cache: {
    write: writeCache,
    read: readCache,
  },
  release: {
    download: downloadRelease,
  },

  setupEnv,
  ensureRequiredDirs,
};
