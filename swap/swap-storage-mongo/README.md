# [**@arcblock/swap-storage-mongo**](https://github.com/arcblock/forge-js)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Storage engine that uses mongo to store data, implements interfaces defined in `@arcblock/swap-storage`.

## Table of Contents

- [**@arcblock/swap-storage-mongo**](#arcblockswap-storage-mongo)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)

## Install

```sh
npm install @arcblock/swap-storage-mongo
// or
yarn add @arcblock/swap-storage-mongo
```

## Usage

```js
const MongoStorage = require('@arcblock/swap-storage-mongo');

const storage = new MongoStorage({
  url: 'mongodb://localhost/forge-web-starter',
  collection: 'did_auth_tokens',
});

(async () => {
  const item = await storage.create({});
})();
```
