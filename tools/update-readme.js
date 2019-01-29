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

const readmeFile = path.join(__dirname, '../README.md');
const readmeContent = `# forge-js

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

> Javascript libraries to work with forge, an awesome framework to write distributed blockchain applications, last updated at ${new Date().toLocaleString()}

## Packages Included

${packageList.join('\n')}

`;

fs.writeFileSync(readmeFile, readmeContent);
console.log('README.md upated');
