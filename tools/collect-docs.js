/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const packages = fs
  .readdirSync(path.join(__dirname, '../packages'))
  .filter(x => x.startsWith('.') === false);

packages.forEach(x => {
  const sourcePath = path.join(__dirname, '../packages', x, 'docs/README.md');
  const targetPath = path.join(__dirname, '../docs/src/', `${x}.md`);
  const sourceContent = fs.readFileSync(sourcePath).toString();
  const jsonPath = path.join(__dirname, '../packages', x, 'package.json');

  const targetContent = `---
title: '@arcblock/${x}'
description: '${require(jsonPath).description}'
keywords: 'forge, sdk, javascript'
author: 'wangshijun'
category: 'packages'
layout: 'documentation'
tags:
  - 'forge'
---

${sourceContent}
  `;

  fs.writeFileSync(targetPath, targetContent);
  console.log('copied doc file', { sourcePath, targetPath });
});
