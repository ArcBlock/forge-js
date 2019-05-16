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
const readmeContent = `# [forge-javascript-sdk](https://github.com/ArcBlock/forge-js)

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

## Compatibility

Forge javascript sdk works with node.js v8.x or above, checkout [Travis](https://travis-ci.com/ArcBlock/forge-js/builds) for status.

## Report a Bug?

Bugs and feature requests please create new issues [here](https://github.com/ArcBlock/forge-js/issues)

## License

Copyright 2018-2019 ArcBlock

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
`;

fs.writeFileSync(readmeFile, readmeContent);
console.log('README.md updated');
