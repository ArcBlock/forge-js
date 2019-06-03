/* eslint-disable no-console */
const fs = require('fs');
const os = require('os');
const util = require('util');
const path = require('path');
const getos = require('getos');
const chalk = require('chalk');
const yaml = require('yaml');
const shell = require('shelljs');
const semver = require('semver');
const inquirer = require('inquirer');
const pidUsageTree = require('pidusage-tree');
const pidInfo = require('find-process');
const prettyTime = require('pretty-ms');
const prettyBytes = require('pretty-bytes');
const figlet = require('figlet');
const { get, set } = require('lodash');
const GRpcClient = require('@arcblock/grpc-client');
const { parse } = require('@arcblock/forge-config');
const { name, version, engines } = require('../../package.json');
// eslint-disable-next-line import/order
const debug = require('debug')(name);

const { symbols, hr } = require('./ui');

let baseDir = path.join(os.homedir(), '.forge_cli');
if (process.env.FORGE_CLI_DIR) {
  try {
    const dir = path.resolve(process.env.FORGE_CLI_DIR);
    if (!fs.existsSync(dir)) {
      shell.mkdir(dir, { silent: true });
    }
    baseDir = dir;
    debug(`${symbols.info} use custom baseDir: ${baseDir}`);
  } catch (err) {
    shell.echo(
      `${symbols.warning} invalid or cannot create custom baseDir: ${process.env.FORGE_CLI_DIR}`
    );
  }
}

const requiredDirs = {
  tmp: path.join(baseDir, 'tmp'),
  bin: path.join(baseDir, 'bin'),
  cache: path.join(baseDir, 'cache'),
  release: path.join(baseDir, 'release'),
};

const config = { cli: { requiredDirs } }; // global shared forge-cli run time config

/**
 * Setup running env for various commands, the check order for each requirement is important
 * Since a running node requires a release directory
 * An unlocked wallet requires a valid config
 *
 * @param {*} args
 * @param {*} requirements
 */
async function setupEnv(args, requirements) {
  // Support evaluating requirements at runtime
  Object.keys(requirements).forEach(x => {
    if (typeof requirements[x] === 'function') {
      requirements[x] = requirements[x](args);
    }
  });

  debug('setupEnv.args', { args, requirements });

  ensureRequiredDirs();
  checkUpdate();

  if (requirements.forgeRelease || requirements.runningNode) {
    await ensureForgeRelease(args);
  }

  ensureSetupScript(args);

  if (requirements.wallet || requirements.rpcClient || requirements.runningNode) {
    await ensureRpcClient(args);
  }

  if (requirements.runningNode) {
    await ensureRunningNode(args);
  }

  if (requirements.wallet) {
    await ensureWallet(args);
  }
}

function isDirectory(x) {
  return fs.existsSync(x) && fs.statSync(x).isDirectory();
}

function isFile(x) {
  return fs.existsSync(x) && fs.statSync(x).isFile();
}

function isEmptyDirectory(x) {
  return isDirectory(x) && fs.readdirSync(x).length === 0;
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
    const releaseYamlPath = path.join(releaseDir, './forge/release.yml');
    if (!fs.existsSync(releaseYamlPath)) {
      if (exitOn404) {
        shell.echo(`${symbols.error} required config file ${releaseYamlPath} not found`);
        shell.echo(
          `${symbols.info} if you have not setup forge yet, please run ${chalk.cyan(
            'forge init'
          )} first`
        );
        process.exit(1);
      }
      return false;
    }

    try {
      const releaseYamlObj = yaml.parse(fs.readFileSync(releaseYamlPath).toString());
      if (!releaseYamlObj || !releaseYamlObj.current) {
        throw new Error('no current forge release selected');
      }

      config.cli.currentVersion = releaseYamlObj.current;
    } catch (err) {
      debug.error(err);
      if (exitOn404) {
        shell.echo(`${symbols.error} config file ${releaseYamlPath} invalid`);
        process.exit(1);
      }

      return false;
    }

    // simulator
    // eslint-disable-next-line prefer-destructuring
    const currentVersion = config.cli.currentVersion;
    const simulatorBinPath = path.join(releaseDir, 'simulator', currentVersion, './bin/simulator');
    if (fs.existsSync(simulatorBinPath) && fs.statSync(simulatorBinPath).isFile()) {
      debug(`${symbols.success} Using simulator executable: ${simulatorBinPath}`);
      config.cli.simulatorBinPath = simulatorBinPath;
    }

    // forge_starter
    const starterBinPath = path.join(
      releaseDir,
      'forge_starter',
      currentVersion,
      './bin/forge_starter'
    );
    if (fs.existsSync(starterBinPath) && fs.statSync(starterBinPath).isFile()) {
      debug(`${symbols.success} Using forge_starter executable: ${starterBinPath}`);
      config.cli.starterBinPath = starterBinPath;
    } else {
      if (exitOn404) {
        shell.echo(
          `${symbols.error} forge_starter binary not found, please run ${chalk.cyan(
            'forge init'
          )} first`
        );
        process.exit(1);
      }
      return false;
    }

    // forge_web
    const webBinPath = path.join(releaseDir, 'forge_web', currentVersion, './bin/forge_web');
    if (fs.existsSync(webBinPath) && fs.statSync(webBinPath).isFile()) {
      debug(`${symbols.success} Using forge_web executable: ${webBinPath}`);
      config.cli.webBinPath = webBinPath;
    }

    // forge_kernel
    const forgeBinPath = path.join(releaseDir, 'forge', currentVersion, './bin/forge');
    if (fs.existsSync(forgeBinPath) && fs.statSync(forgeBinPath).isFile()) {
      config.cli.releaseDir = releaseDir;
      config.cli.forgeBinPath = forgeBinPath;
      config.cli.forgeReleaseDir = path.join(releaseDir, 'forge');
      debug(`${symbols.success} Using forge release dir: ${releaseDir}`);
      debug(`${symbols.success} Using forge executable: ${forgeBinPath}`);

      if (semver.satisfies(currentVersion, engines.forge)) {
        return releaseDir;
      }
      if (exitOn404) {
        shell.echo(
          `${symbols.error} forge-cli@${version} requires forge@${
            engines.forge
          } to work, but got ${currentVersion}!`
        );
        shell.echo(
          `${symbols.info} if you want to use forge-cli@${version}, please following below steps:`
        );
        shell.echo(hr);
        shell.echo(`1. stop running forge instance: ${chalk.cyan('forge stop')}`);
        shell.echo(`2. cleanup forge release dir: ${chalk.cyan('rm -rf ~/.forge_cli')}`);
        shell.echo(`3. install latest version of forge: ${chalk.cyan('forge init')}`);
        process.exit(1);
      }
    } else if (exitOn404) {
      shell.echo(
        `${symbols.error} forge release binary not found, please run ${chalk.cyan(
          'forge init'
        )} first`
      );
      process.exit(1);
    }
  } else if (exitOn404) {
    shell.echo(`${symbols.error} forge release dir does not exist

  You can either run ${chalk.cyan('forge init')} to get the latest forge release.
  Or start node with custom forge release folder
  > ${chalk.cyan('forge start --release-dir ~/Downloads/forge/')}
  > ${chalk.cyan('FORGE_RELEASE_DIR=~/Downloads/forge/ forge start')}
      `);
    process.exit(1);
  }

  return false;
}

async function ensureRunningNode() {
  const { starterBinPath, forgeConfigPath } = config.cli;
  const { stdout: pid } = shell.exec(`FORGE_CONFIG=${forgeConfigPath} ${starterBinPath} pid`, {
    silent: true,
  });

  const pidNumber = Number(pid);
  if (!pidNumber) {
    shell.echo(`${symbols.error} forge is not started yet!`);
    shell.echo(`${symbols.info} Please run ${chalk.cyan('forge start')} first!`);
    process.exit(0);
  }

  return true;
}

/**
 * Ensure we have an global rpc client <grpc-client instance> before command run
 * Configure file priority: cli > env > release bundled
 *
 * @param {*} args
 */
function ensureRpcClient(args) {
  const socketGrpc = args.socketGrpc || process.env.FORGE_CLI_SOCKET_GRPC;
  const releaseConfig = path.join(path.dirname(requiredDirs.release), 'forge_release.toml');
  const configPath = args.configPath || process.env.FORGE_CONFIG || releaseConfig;
  if (socketGrpc) {
    const forgeConfig = {
      forge: {
        sockGrpc: socketGrpc,
        unlockTtl: 300,
        web: {
          port: 8210,
        },
      },
    };
    debug(`${symbols.info} using forge-cli with remote node ${socketGrpc}`);
    Object.assign(config, forgeConfig);
  } else if (configPath && fs.existsSync(configPath)) {
    const forgeConfig = parse(configPath);
    config.cli.forgeConfigPath = configPath;
    Object.assign(config, forgeConfig);
    debug(`${symbols.success} Using forge config: ${configPath}`);
    debug(
      `${symbols.success} Using forge config: ${util.inspect(config, { depth: 5, colors: true })}`
    );
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
      type: 'password',
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
  try {
    const { token } = await client.loadWallet({ address, passphrase });
    writeCache('wallet', {
      address,
      token,
      expireAt: Date.now() + (config.forge.unlockTtl || 300) * 1e3,
    });
    config.cli.wallet = { address, token };
    debug(`${symbols.success} Use unlocked wallet ${address}`);
  } catch (err) {
    debug.error('Wallet Unlock Error', err);
    shell.echo(`${symbols.error} wallet unlock failed, please check wallet address and passphrase`);
    process.exit(1);
  }
}

/**
 * If we have application specific protobuf, we need to load that into sdk
 *
 * @param {*} args
 */
function ensureSetupScript(args) {
  const setupScript = args.setupScript || process.env.FORGE_SDK_SETUP_SCRIPT;
  if (setupScript && fs.existsSync(setupScript) && fs.statSync(setupScript).isFile()) {
    debug(`${symbols.warning} loading custom scripts: ${setupScript}`);
    // eslint-disable-next-line
    require(path.resolve(setupScript));
  }
}

/**
 * Search forge release config under forge_sdk/prev folder
 *
 * @returns String
 */
function createFileFinder(keyword, filePath) {
  return function fileFinder(releaseDir, ver) {
    if (!releaseDir) {
      return '';
    }

    const libDir = path.join(releaseDir, 'forge', ver, 'lib');
    debug('createFileFinder', { keyword, filePath, libDir });
    if (!isDirectory(libDir)) {
      return '';
    }

    const pattern = new RegExp(`^${keyword}`, 'i');
    const sdkDir = fs.readdirSync(libDir).find(x => pattern.test(x));
    debug('createFileFinder', { keyword, filePath, sdkDir });
    if (sdkDir) {
      const releaseFile = path.join(libDir, sdkDir, filePath);
      if (fs.existsSync(releaseFile) && fs.statSync(releaseFile).isFile()) {
        return releaseFile;
      }
    }

    return '';
  };
}
const findReleaseConfig = createFileFinder('forge', 'priv/forge_release.toml');
const findReleaseConfigOld = createFileFinder('forge_sdk', 'priv/forge_release.toml');

/**
 * Find version of current forge release
 *
 * @param {*} releaseDir
 * @returns String
 */
function findReleaseVersion(releaseDir) {
  if (!releaseDir) {
    return '';
  }

  const parentDir = path.join(releaseDir, 'forge/releases');
  if (!isDirectory(parentDir)) {
    return '';
  }

  return fs
    .readdirSync(parentDir)
    .find(x => fs.statSync(path.join(parentDir, x)).isDirectory() && semver.valid(x));
}

/**
 * Ensure we have required directories done
 */
function ensureRequiredDirs() {
  Object.keys(requiredDirs).forEach(x => {
    const dir = requiredDirs[x];
    if (isDirectory(dir)) {
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

  client = new GRpcClient(config.forge.sockGrpc);
  return client;
}

function makeNativeCommandRunner(executable) {
  return function runNativeForgeCommand(subCommand, options = {}) {
    return function rumCommand() {
      // eslint-disable-next-line prefer-destructuring
      const forgeConfigPath = config.cli.forgeConfigPath;
      const binPath = config.cli[executable];

      if (!binPath) {
        shell.echo(`${symbols.error} ${executable} not found, abort!`);
        shell.echo(`${symbols.info} we recommend a clean setup from scratch with following steps:`);
        shell.echo(hr);
        shell.echo(`${chalk.cyan('forge stop')}`);
        shell.echo(`${chalk.cyan('rm -rf ~/.forge_cli')}`);
        shell.echo(`${chalk.cyan('rm -rf ~/.forge_release')}`);
        shell.echo(`${chalk.cyan('npm install -g @arcblock/forge-cli')}`);
        shell.echo(`${chalk.cyan('forge init')}`);
        shell.echo('');
        return process.exit(1);
      }

      const sockGrpc =
        process.env.FORGE_SOCK_GRPC ||
        process.env.FORGE_CLI_SOCKET_GRPC ||
        get(config, 'forge.sock_grpc') ||
        'tcp://127.0.0.1:28210';

      let command = `FORGE_CONFIG=${forgeConfigPath} ${binPath} ${subCommand}`;
      if (['webBinPath', 'simulatorBinPath'].includes(executable)) {
        command = `FORGE_CONFIG=${forgeConfigPath} FORGE_SOCK_GRPC=${sockGrpc} ${binPath} ${subCommand}`;
      }
      debug(`runNativeCommand.${executable}`, command);
      return shell.exec(command, options);
    };
  };
}

async function getForgeProcesses() {
  const { starterBinPath, forgeConfigPath } = config.cli;
  const { stdout: pid } = shell.exec(`FORGE_CONFIG=${forgeConfigPath} ${starterBinPath} pid`, {
    silent: true,
  });

  const pidNumber = Number(pid);
  if (!pidNumber) {
    return [];
  }

  debug(`${symbols.info} forge pid: ${pidNumber}`);
  try {
    const processes = await pidUsageTree(pidNumber);
    const results = await Promise.all(
      Object.values(processes).map(async x => {
        try {
          const [info] = await pidInfo('pid', x.pid);
          Object.assign(x, info);
          debug(`${symbols.info} forge managed process info: `, x);
        } catch (err) {
          console.error(`Error getting pid info: ${x.pid}`, err);
        }

        return x;
      })
    );

    // Find app process with app command
    const command = config.app ? config.app.executable : '';
    const pattern = new RegExp(command, 'i');

    return results
      .filter(x => /(forge|tendermint|ipfs)/.test(x.name) || (command && pattern.test(x.cmd)))
      .map(x => ({
        name: x.name.replace(path.extname(x.name), '').replace(/^forge_/, ''),
        pid: x.pid,
        uptime: prettyTime(x.elapsed),
        memory: prettyBytes(x.memory),
        cpu: `${x.cpu.toFixed(2)} %`,
        // cmd: x.cmd,
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

        if (/centos/i.test(info.dist)) {
          return resolve('centos');
        }

        // Amazon linux
        if (/amzn/i.test(os.release())) {
          return resolve('centos');
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
    debug.error(`${symbols.error} cache ${key} write failed!`, err);
    return false;
  }
}

function readCache(key) {
  try {
    const filePath = path.join(requiredDirs.cache, `${key}.json`);
    return JSON.parse(fs.readFileSync(filePath));
  } catch (err) {
    debug.error(`${symbols.error} cache ${key} read failed!`);
    return null;
  }
}

function sleep(timeout = 1000) {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function printLogo() {
  shell.echo('');
  shell.echo(chalk.red(figlet.textSync('By ArcBlock', { font: 'ANSI Shadow' })));
}

function checkUpdate() {
  const lastCheck = readCache('check-update');
  const now = Math.floor(Date.now() / 1000);
  const secondsOfDay = 24 * 60 * 60;
  debug('check update', { lastCheck, now });
  if (lastCheck && lastCheck + secondsOfDay > now) {
    return;
  }
  writeCache('check-update', now);

  const { stdout: latest } = shell.exec('npm view @arcblock/forge-cli version', { silent: true });
  const { stdout: installed } = shell.exec('forge --version', { silent: true });
  debug('check update', { latest, installed });

  if (semver.gt(latest.trim(), installed.trim())) {
    shell.echo('');
    shell.echo(
      chalk.red(
        `${
          symbols.info
        } Latest forge-cli version is v${latest.trim()}, your local version v${installed.trim()}`
      )
    );
    shell.echo(
      chalk.red(
        `${symbols.info} Please upgrade with ${chalk.cyan('npm install -g @arcblock/forge-cli')}`
      )
    );
    shell.echo('');
  }
}

debug.error = (...args) => {
  if (debug.enabled) {
    console.error(...args);
  }
};

module.exports = {
  config: {
    get: (key, defaultValue) => get(config, key, defaultValue),
    set: (key, value) => set(config, key, value),
  },
  cache: {
    write: writeCache,
    read: readCache,
  },

  webUrl() {
    return `http://localhost:${get(config, 'forge.web.port') || 8210}`;
  },

  DEFAULT_MIRROR: 'https://releases.arcblock.io',
  RELEASE_ASSETS: ['forge', 'forge_starter', 'simulator', 'forge_web'],

  debug,
  sleep,
  setupEnv,
  requiredDirs,
  findReleaseConfig,
  findReleaseConfigOld,
  findReleaseVersion,
  createFileFinder,
  ensureRequiredDirs,
  ensureForgeRelease,
  ensureRpcClient,
  runNativeForgeCommand: makeNativeCommandRunner('forgeBinPath'),
  runNativeWebCommand: makeNativeCommandRunner('webBinPath'),
  runNativeStarterCommand: makeNativeCommandRunner('starterBinPath'),
  runNativeSimulatorCommand: makeNativeCommandRunner('simulatorBinPath'),
  getForgeProcesses,
  getPlatform,
  createRpcClient,
  isDirectory,
  isFile,
  isEmptyDirectory,
  printLogo,
};
