/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const [, , markdownFile, moduleName] = process.argv;
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

(async () => {
  sleep(1000);
  const packages = fs
    .readdirSync(path.join(__dirname, '../packages'))
    .filter(x => x.startsWith('.') === false)
    .map(x => `@arcblock/${x}`);
  if (packages.includes(moduleName) === false) {
    throw new Error('Invalid moduleName provided when cleanup doc file');
  }

  const filePath = path.join(process.cwd(), markdownFile);
  const packageName = moduleName.replace(/^@/, '');
  const anchorName = packageName.replace(/\//g, '').toLowerCase();

  const externalReplacements = packages
    .filter(x => x !== moduleName)
    .reduce((list, x) => {
      const name = x.replace(/^@/, '');
      const newItems = [
        [
          `\`[**${x}**](https://github.com/${name})\``,
          `[${x}](/packages/${name.split('/').pop()}/)`,
        ],
        [`\`module:${x}\``, `[${x}](/packages/${name.split('/').pop()}/)`],
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

  console.log(replacements);

  const fileSource = fs.readFileSync(filePath).toString();
  const newSource = replacements.reduce((content, x) => {
    const [find, replace] = x;
    return content.split(find).join(replace);
  }, fileSource);

  fs.writeFileSync(filePath, newSource);
  console.log('Cleanup doc file', filePath);
})();
