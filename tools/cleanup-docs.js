/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const { getPackages, sleep } = require('./util');

const [, , markdownFile, moduleName] = process.argv;

(async () => {
  sleep(1000);
  const packages = getPackages({ publicOnly: true });
  if (!packages.find(x => x.name === moduleName)) {
    throw new Error('Invalid moduleName provided when cleanup doc file');
  }

  const filePath = path.join(process.cwd(), markdownFile);
  const packageName = moduleName.replace(/^@/, '');
  const anchorName = packageName.replace(/\//g, '').toLowerCase();

  const externalReplacements = packages
    .filter(x => x !== moduleName)
    .reduce((list, x) => {
      const name = x.name.replace(/^@/, '');
      const newItems = [
        [
          `\`[**${x}**](https://github.com/${name})\``,
          `[${x}](/${x.group}/${name.split('/').pop()}/)`,
        ],
        [`\`module:${x}\``, `[${x}](/${x.group}/${name.split('/').pop()}/)`],
      ];
      return list.concat(newItems);
    }, [])
    .sort((a, b) => b[0].length - a[0].length);

  const replacements = [
    [`[**${moduleName}**](https://github.com/${packageName}).`, ''],
    [`## [**${moduleName}**](https://github.com/${packageName})`, `## ${moduleName}`],
    [`* [${moduleName}](#module_${moduleName})`, ''],
    [`of [<code>${moduleName}</code>](#module_${moduleName})`, ''],
    ['[**@see**](https://github.com/see)', '@see'],
    [`module_${moduleName}.`, ''],
    [`**${moduleName}**.`, ''],
    [`#${anchorName}`, '#'],
    [`${moduleName}.`, ''],
    ['<code>', '`'],
    ['</code>', '`'],
    ['[.', '['],
    ['  * [', '* ['],
  ].concat(externalReplacements);

  const fileSource = fs.readFileSync(filePath).toString();
  const newSource = replacements
    .reduce((content, x) => {
      const [find, replace] = x;
      return content.split(find).join(replace);
    }, fileSource)
    .replace(/<a[\s]+([^>]+)><\/a>/g, '');

  fs.writeFileSync(filePath, newSource);
  console.log('Cleanup doc file', filePath);
})();
