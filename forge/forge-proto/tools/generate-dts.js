/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { enums, messages } = require('../index');

const generateEnums = (enums, ns) => `
declare namespace ${ns} {
  ${Object.keys(enums)
    .map(
      x => `
export enum ${x} {
  ${Object.keys(enums[x])
    .map(k => `  ${k} = ${enums[x][k]},`)
    .join('\n')}
}`
    )
    .join('\n')}

export interface main {
  ${Object.keys(enums)
    .map(x => `${x}: typeof ${ns}.${x};`)
    .join('\n')}
}
}`;

const filePath = path.join(__dirname, '../index.d.ts');
let fileContent = fs.readFileSync(filePath).toString();
fileContent += generateEnums(enums, 'Enums');
fileContent += generateEnums(messages, 'Messages');

fs.writeFileSync(filePath, fileContent);
console.log('enums and message types generated');
