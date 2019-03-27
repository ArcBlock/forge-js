# [**@arcblock/forge-config**](https://github.com/arcblock/forge-js)

[![build status](https://img.shields.io/travis/ArcBlock/forge-js.svg)](https://travis-ci.org/ArcBlock/forge-js)
[![code coverage](https://img.shields.io/codecov/c/github/ArcBlock/forge-js.svg)](https://codecov.io/gh/ArcBlock/forge-js)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/github/license/ArcBlock/forge-js.svg)](LICENSE)

> gRPC client to read/write data on forge powered blockchain

## Table of Contents

- [**@arcblock/forge-config**](#arcblockforge-config)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
  - [Documentation](#documentation)
  - [License](#license)


## Install

```sh
npm install @arcblock/forge-config
// or
yarn add @arcblock/forge-config
```


## Usage

```js
const { parseConfig } = require('@arcblock/forge-config');

const config = parseConfig('./forge.toml');
```
