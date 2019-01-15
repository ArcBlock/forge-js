const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const shell = require('shelljs');
const { RpcClient, parseConfig } = require('@arcblock/forge-sdk');

const { crossMark, checkMark, getSpinner } = require('./ui');

const dataDir = path.resolve('~/.forge-cli');
const requiredDirs = {
  cache: path.join(dataDir, 'cache'),
  release: path.join(dataDir, 'release'),
};

const ensureRequiredDirs = () => {
  Object.keys(requiredDirs).forEach(x => {
    if (!fs.existsSync(requiredDirs[x])) {
      try {
        mkdirp.sync(requiredDirs[x]);
        console.log(`${checkMark} initialized ${x} dir!`);
      } catch (err) {
        console.log(`${crossMark} initializing ${x} dir!`, err);
      }
    } else {
      console.log(`${checkMark} ${x} dir already initialized!`);
    }
  });
};

let client;
const createRpcClient = () => {
  client = new RpcClient(parseConfig(process.env.FORGE_CONFIG));
  console.log(`${checkMark} rpc client created!`);
};

const writeCache = (key, data) => {
  try {
    fs.writeFileSync(path.join(requiredDirs.cache, `${key}.json`), JSON.stringify(data));
    console.log(`${checkMark} cache ${key} write success!`);
    return true;
  } catch (err) {
    console.log(`${checkMark} cache ${key} write failed!`, err);
    return false;
  }
};

const readCache = key => {
  try {
    const filePath = path.join(requiredDirs.cache, `${key}.json`);
    return JSON.parse(fs.readFileSync(filePath));
  } catch (err) {
    console.log(`${checkMark} cache ${key} read failed!`, err);
    return null;
  }
};

const downloadRelease = async () => {
  const spinner = getSpinner('Install github release downloader...');
  spinner.start();
  shell.exec('npm install -g download-github-release');
  spinner.text = 'Download github release...';
  shell.exec('download-github-release -s darwin ArcBlock forge');
  spinner.stopAndPersist();
};

const selectRelease = async () => {};

const unzipRelease = async () => {};

module.exports = {
  ensureRequiredDirs,
  createRpcClient,
  client,
  cache: {
    write: writeCache,
    read: readCache,
  },
  release: {
    download: downloadRelease,
    select: selectRelease,
    unzip: unzipRelease,
  },
};
