/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const fs = require('fs');
const path = require('path');

const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));
const { workspaces } = require(path.join(__dirname, '../package.json'));

const getPackages = ({ grouped = false, publicOnly = false } = {}) => {
  let packages = [];
  workspaces.forEach(async w => {
    const group = w.split('/').shift();
    const dir = path.join(__dirname, '..', group);
    if (fs.existsSync(dir) === false) {
      return;
    }

    const items = fs
      .readdirSync(dir)
      .filter(x => x.startsWith('.') === false)
      .filter(x => fs.statSync(path.join(dir, x)).isDirectory())
      .map(x => require(path.join(dir, x, 'package.json')));

    packages = packages.concat(
      items.map(x => ({
        group,
        version: x.version,
        description: x.description,
        name: x.name,
        public: x.publishConfig ? x.publishConfig.access === 'public' : false,
        path: path.join(dir, x.name),
      }))
    );
  });

  const filtered = publicOnly ? packages.filter(x => x.public) : packages;
  if (grouped === false) {
    return filtered;
  }

  const groupedPackages = {};
  filtered.forEach(x => {
    if (!groupedPackages[x.group]) {
      groupedPackages[x.group] = [];
    }

    groupedPackages[x.group].push(x);
  });

  return groupedPackages;
};

module.exports = {
  sleep,
  getPackages,
};

// console.log(getPackages({ publicOnly: true, grouped: true }));
