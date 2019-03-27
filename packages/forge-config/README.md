# [**@arcblock/forge-config**](https://github.com/arcblock/forge-js)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> gRPC client to read/write data on forge powered blockchain

## Table of Contents

- [**@arcblock/forge-config**](#arcblockforge-config)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)


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
