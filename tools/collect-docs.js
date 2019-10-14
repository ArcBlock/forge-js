/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const { getPackages } = require('./util');

const packages = getPackages({ publicOnly: true });

packages.forEach(x => {
  const sourcePath = path.join(x.path, 'docs/README.md');
  const targetPath = path.join(__dirname, '../docs/src/', `${x.name.split('/').pop()}.md`);
  const sourceContent = fs.readFileSync(sourcePath).toString();

  const targetContent = `---
title: '@arcblock/${x}'
description: '${x.description}'
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
