/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const packages = fs.readdirSync(path.join(__dirname, '../packages'));
const packageList = packages.map(x => {
  const packageFile = path.join(__dirname, '../packages', x, 'package.json');
  if (fs.existsSync(packageFile)) {
    const packageJson = require(packageFile);
    return `- [${packageJson.name} v${packageJson.version}](./packages/${x})`;
  }
});

const apps = fs.readdirSync(path.join(__dirname, '../apps'));
const appList = apps.map(x => {
  const packageFile = path.join(__dirname, '../apps', x, 'package.json');
  if (fs.existsSync(packageFile)) {
    const packageJson = require(packageFile);
    return `- [${packageJson.name} v${packageJson.version}](./apps/${x})`;
  }
});

const readmeFile = path.join(__dirname, '../README.md');
const readmeContent = `# forge-js

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![docs](https://img.shields.io/badge/powered%20by-arcblock-green.svg)](https://docs.arcblock.io)

> Javascript SDK for [forge](https://docs.arcblock.io/forge/latest/), which is an awesome framework to write distributed blockchain applications.

> Last updated at ${new Date().toLocaleString()}

## Packages Included

${packageList.concat(appList).join('\n')}

## Documentation

[https://docs.arcblock.io/forge/sdks/javascript/latest/](https://docs.arcblock.io/forge/sdks/javascript/latest/)

## Contribution

Checkout [CONTRIBUTION.md](./CONTRIBUTION.md)

## Report a Bug?

Bugs and feature requests please create new issues [here](/issues)
`;

fs.writeFileSync(readmeFile, readmeContent);
console.log('README.md updated');
