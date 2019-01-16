const fs = require('fs');
const os = require('os');
const path = require('path');
const shell = require('shelljs');
const { RpcClient, parseConfig } = require('@arcblock/forge-sdk');
const debug = require('debug')(require('../../package.json').name);

const { symbols, getSpinner } = require('./ui');

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
        config.cli.forgeReleaseDir = args.forgeReleaseDir;
        config.cli.forgeBinPath = forgeBinPath;
        shell.echo(`Using forge bin path ${forgeBinPath}`);
      } else {
        shell.echo(`${symbols.warning} --forge-release-dir is invalid, non forge bin found`);
        process.exit(1);
      }
    } else {
      shell.echo(`${symbols.warning} --forge-release-dir does not exist`);
      process.exit(1);
    }
  } else {
    const releaseDir = requiredDirs.release;
    const forgeBinPath = path.join(releaseDir, './bin/forge');
    if (fs.existsSync(forgeBinPath) && fs.statSync(forgeBinPath).isFile()) {
      config.cli.forgeReleaseDir = releaseDir;
      config.cli.forgeBinPath = forgeBinPath;
      shell.echo(`Using forge bin path ${forgeBinPath}`);
    } else {
      shell.echo(
        `${
          symbols.warning
        } forge release not found under ${releaseDir}, If you are maintaining a node with forge-cli, please run \`forge init:core\` first`
      );
    }
  }

  // RPC Client
  // configure file priority: cli > env > release bundled
  const configPath = args.forgeConfigPath || process.env.FORGE_CONFIG || findReleaseConfig();
  if (configPath && fs.existsSync(configPath)) {
    const forgeConfig = parseConfig(configPath);
    shell.echo(`${symbols.success} using forge config from ${configPath}`);
    createRpcClient(forgeConfig);
  } else if (args.forgeSocketGrpc) {
    const forgeConfig = {
      forge: {
        decimal: 16,
        sockGrpc: args.forgeSocketGrpc,
      },
    };
    shell.echo(`${symbols.warning} using forge-cli with remote node ${args.forgeSocketGrpc}`);
    createRpcClient(forgeConfig);
  } else {
    shell.echo(`${symbols.error} forge-cli requires an forge config file to start`);
    process.exit();
  }
}

/**
 * Search forge release config under forge_sdk/prev folder
 *
 * @returns String
 */
function findReleaseConfig() {
  const { forgeReleaseDir } = config.cli;
  if (!forgeReleaseDir) {
    return '';
  }

  const libDir = path.join(forgeReleaseDir, 'lib');
  if (!fs.existsSync(libDir) || !fs.statSync(libDir).isDirectory()) {
    return '';
  }

  const sdkDir = fs.readdirSync(libDir).find(x => /^forge_sdk/.test(x));
  if (sdkDir) {
    const releaseConfigPath = path.join(libDir, sdkDir, 'priv/forge_release.toml');
    if (fs.existsSync(releaseConfigPath) && fs.statSync(releaseConfigPath).isFile()) {
      return releaseConfigPath;
    }
  }

  return '';
}

/**
 * Ensure we have required directories done
 */
function ensureRequiredDirs() {
  Object.keys(requiredDirs).forEach(x => {
    const dir = requiredDirs[x];
    if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
      debug(`${symbols.info} ${x} dir already initialized: ${dir}`);
    } else {
      try {
        shell.mkdir('-p', dir);
        shell.echo(`${symbols.success} initialized ${x} dir for forge-cli: ${dir}`);
      } catch (err) {
        shell.echo(`${symbols.success} failed to initialize ${x} dir for forge-cli: ${dir}`, err);
      }
    }
  });
}

function createRpcClient(forgeConfig) {
  Object.assign(client, new RpcClient(forgeConfig));
  Object.assign(config, forgeConfig);
  debug(`${symbols.info} rpc client created!`);
}

function writeCache(key, data) {
  try {
    fs.writeFileSync(path.join(requiredDirs.cache, `${key}.json`), JSON.stringify(data));
    debug(`${symbols.success} cache ${key} write success!`);
    return true;
  } catch (err) {
    shell.echo(`${symbols.error} cache ${key} write failed!`, err);
    return false;
  }
}

function readCache(key) {
  try {
    const filePath = path.join(requiredDirs.cache, `${key}.json`);
    return JSON.parse(fs.readFileSync(filePath));
  } catch (err) {
    shell.echo(`${symbols.error} cache ${key} read failed!`, err);
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
