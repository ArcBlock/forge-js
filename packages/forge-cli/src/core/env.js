const fs = require('fs');
const os = require('os');
const path = require('path');
const inquirer = require('inquirer');
const shell = require('shelljs');
const { RpcClient, parseConfig } = require('@arcblock/forge-sdk');
const debug = require('debug')(require('../../package.json').name);

const { symbols } = require('./ui');

const requiredDirs = {
  cache: path.join(os.homedir(), '.forge-cli/cache'),
  release: path.join(os.homedir(), '.forge-cli/release'),
};

const client = {}; // global shared rpc client
const config = { cli: {} }; // global shared forge-cli run time config

function setupEnv(args, requirements) {
  debug('setupEnv.args', { args, requirements });

  const hasRequirements = Object.keys(requirements).some(x => requirements[x]);
  if (hasRequirements) {
    shell.echo(new inquirer.Separator().line);
  }
  ensureRequiredDirs();

  if (requirements.forgeRelease) {
    ensureForgeRelease(args);
  }

  if (requirements.rpcClient) {
    ensureRpcClient(args);
  }

  if (hasRequirements) {
    shell.echo(new inquirer.Separator().line);
  }
}

/**
 * Ensure we have a forge release to work with, in which we find forge bin
 *
 * @param {*} args
 * @param {boolean} [exitOn404=true]
 * @returns
 */
function ensureForgeRelease(args, exitOn404 = true) {
  const envReleaseDir = process.env.FORGE_RELEASE_DIR;
  const cliReleaseDir = requiredDirs.release;
  const argReleaseDir = args.releaseDir;

  const releaseDir = argReleaseDir || envReleaseDir || cliReleaseDir;
  if (fs.existsSync(releaseDir)) {
    const forgeBinPath = path.join(releaseDir, './bin/forge');
    if (fs.existsSync(forgeBinPath) && fs.statSync(forgeBinPath).isFile()) {
      config.cli.releaseDir = releaseDir;
      config.cli.forgeBinPath = forgeBinPath;
      shell.echo(`${symbols.success} Using forge release dir: ${releaseDir}`);
      shell.echo(`${symbols.success} Using forge executable: ${forgeBinPath}`);
      return true;
    } else {
      shell.echo(`${symbols.error} forge release dir invalid, non forge executable found`);
      if (exitOn404) {
        process.exit(1);
      }
    }
  } else {
    shell.echo(`${symbols.error} forge release dir does not exist`);
    if (exitOn404) {
      process.exit(1);
    }
  }

  return false;
}

/**
 * Ensure we have an global rpc client <forge-sdk instance> before command run
 * Configure file priority: cli > env > release bundled
 *
 * @param {*} args
 */
function ensureRpcClient(args) {
  const releaseConfig = path.join(path.dirname(requiredDirs.release), 'forge_release.toml');
  const configPath = args.configPath || process.env.FORGE_CONFIG || releaseConfig;
  if (configPath && fs.existsSync(configPath)) {
    const forgeConfig = parseConfig(configPath);
    config.cli.forgeConfigPath = configPath;
    shell.echo(`${symbols.success} Using forge config: ${configPath}`);
    createRpcClient(forgeConfig);
  } else if (args.socketGrpc) {
    const forgeConfig = {
      forge: {
        decimal: 16,
        sockGrpc: args.socketGrpc,
      },
    };
    shell.echo(`${symbols.info} using forge-cli with remote node ${args.socketGrpc}`);
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
function findReleaseConfig(releaseDir) {
  if (!releaseDir) {
    return '';
  }

  const libDir = path.join(releaseDir, 'lib');
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

function runNativeForgeCommand(subCommand) {
  return function() {
    const { forgeBinPath, forgeConfigPath } = config.cli;
    if (!forgeBinPath) {
      shell.echo(`${symbols.error} forgeBinPath not found, abort!`);
      return;
    }

    return shell.exec(`FORGE_CONFIG=${forgeConfigPath} ${forgeBinPath} ${subCommand}`);
  };
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

module.exports = {
  client,
  config,
  cache: {
    write: writeCache,
    read: readCache,
  },

  setupEnv,
  requiredDirs,
  findReleaseConfig,
  ensureRequiredDirs,
  ensureForgeRelease,
  ensureRpcClient,
  runNativeForgeCommand,
};
