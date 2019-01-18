const fs = require('fs');
const os = require('os');
const getos = require('getos');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const shell = require('shelljs');
const pidUsageTree = require('pidusage-tree');
const pidInfo = require('find-process');
const prettyTime = require('pretty-ms');
const prettyBytes = require('pretty-bytes');
const { RpcClient, parseConfig } = require('@arcblock/forge-sdk');
const debug = require('debug')(require('../../package.json').name);

const { symbols } = require('./ui');

const requiredDirs = {
  cache: path.join(os.homedir(), '.forge-cli/cache'),
  release: path.join(os.homedir(), '.forge-cli/release'),
};

const config = { cli: {} }; // global shared forge-cli run time config

async function setupEnv(args, requirements) {
  debug('setupEnv.args', { args, requirements });

  ensureRequiredDirs();

  if (requirements.forgeRelease) {
    await ensureForgeRelease(args);
  }

  if (requirements.wallet || requirements.rpcClient) {
    await ensureRpcClient(args);
  }

  if (requirements.wallet) {
    await ensureWallet(args);
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
      debug(`${symbols.success} Using forge release dir: ${releaseDir}`);
      debug(`${symbols.success} Using forge executable: ${forgeBinPath}`);
      return true;
    } else {
      shell.echo(`${symbols.error} forge release dir invalid, non forge executable found`);
      if (exitOn404) {
        process.exit(1);
      }
    }
  } else {
    shell.echo(`${symbols.error} forge release dir does not exist

Init with downloaded forge release tarball, will extract to ~/.forge-cli/release
> ${chalk.cyan('forge init --release-tarball ~/Downloads/forge_darwin_amd64.tgz')}

Start node with custom forge release folder
> ${chalk.cyan('forge start --release-dir ~/Downloads/forge/')}
> ${chalk.cyan('FORGE_RELEASE_DIR=~/Downloads/forge/ forge start')}
    `);
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
    debug(`${symbols.success} Using forge config: ${configPath}`);
    Object.assign(config, forgeConfig);
  } else if (args.socketGrpc) {
    const forgeConfig = {
      forge: {
        decimal: 16,
        sockGrpc: args.socketGrpc,
        unlockTtl: 300,
      },
    };
    debug(`${symbols.info} using forge-cli with remote node ${args.socketGrpc}`);
    Object.assign(config, forgeConfig);
  } else {
    shell.echo(`${symbols.error} forge-cli requires an forge config file to start

If you have not setup any forge core release on this machine, run this first:
> ${chalk.cyan('forge init')}

Or you can run forge-cli with custom config path
> ${chalk.cyan('forge start --config-path ~/Downloads/forge/forge_release.toml')}
> ${chalk.cyan('FORGE_CONFIG=~/Downloads/forge/forge_release.toml forge start')}
    `);
    process.exit();
  }
}

/**
 * Ensure we have an unlocked wallet before run actual command { address, token }
 */
async function ensureWallet() {
  const wallet = readCache('wallet');
  if (wallet && wallet.expireAt && wallet.expireAt > Date.now()) {
    debug(`${symbols.success} Use cached wallet ${wallet.address}`);
    config.cli.wallet = wallet;
    return;
  }

  debug(`${symbols.warning} no unlocked wallet found!`);

  const cachedAddress = wallet ? wallet.address : '';
  const questions = [
    {
      type: 'confirm',
      name: 'useCachedAddress',
      message: `Use cached wallet <${cachedAddress}>?`,
      when: !!cachedAddress,
    },
    {
      type: 'text',
      name: 'address',
      default: answers => (answers.useCachedAddress ? cachedAddress : ''),
      when: answers => !cachedAddress || !answers.useCachedAddress,
      message: 'Please enter wallet address:',
      validate: input => {
        if (!input) return 'The address should not empty';
        return true;
      },
    },
    {
      type: 'text',
      name: 'passphrase',
      message: 'Please enter passphrase of the wallet:',
      validate: input => {
        if (!input) return 'The passphrase should not empty';
        if (!/^.{6,15}$/.test(input)) return 'The passphrase must be 6~15 chars long';
        return true;
      },
    },
  ];

  const client = createRpcClient();
  const { address: userAddress, passphrase, useCachedAddress } = await inquirer.prompt(questions);
  const address = useCachedAddress ? cachedAddress : userAddress;
  const { token } = await client.loadWallet({ address, passphrase });
  writeCache('wallet', { address, token, expireAt: Date.now() + config.forge.unlockTtl * 1e3 });
  config.cli.wallet = { address, token };
  debug(`${symbols.success} Use unlocked wallet ${address}`);
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

let client = null;
function createRpcClient() {
  if (client) {
    return client;
  }

  client = new RpcClient(config);
  return client;
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

async function getForgeProcesses() {
  const { forgeBinPath, forgeConfigPath } = config.cli;
  const { stdout: pid } = shell.exec(`FORGE_CONFIG=${forgeConfigPath} ${forgeBinPath} pid`, {
    silent: true,
  });

  const pidNumber = Number(pid);
  if (!pidNumber) {
    return [];
  }

  try {
    const processes = await pidUsageTree(pidNumber);
    const results = await Promise.all(
      Object.values(processes).map(async x => {
        try {
          const [info] = await pidInfo('pid', x.pid);
          Object.assign(x, info);
        } catch (err) {
          console.error(`Error getting pid info: ${x.pid}`, err);
        }

        return x;
      })
    );

    // FIXME: support finding the app process
    return results
      .filter(x => /(forge|tendermint|ipfs)/.test(x.name))
      .map(x => ({
        name: x.name,
        pid: x.pid,
        uptime: prettyTime(x.elapsed),
        memory: prettyBytes(x.memory),
        cpu: x.cpu,
      }));
  } catch (err) {
    console.error(err);
    return [];
  }
}

function getPlatform() {
  return new Promise((resolve, reject) => {
    getos((err, info) => {
      if (err) {
        console.error(err);
        return reject(err);
      }

      if (info.os === 'darwin') {
        return resolve(info.os);
      }

      if (info.os === 'linux') {
        if (/ubuntu/i.test(info.dist)) {
          return resolve('ubuntu');
        }

        return resolve('linux');
      }

      return resolve(info.os);
    });
  });
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
  getForgeProcesses,
  getPlatform,
  createRpcClient,
};
