# [**@arcblock/app-agent-storage-memory**](https://github.com/arcblock/abt-did-js)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Storage engine that uses mongo to store data, implements interfaces defined in `@arcblock/did-auth-storage`.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contributors](#contributors)

## Install

```sh
npm install @arcblock/app-agent-storage-memory
// or
yarn add @arcblock/app-agent-storage-memory
```

## Usage

```js
const MemoryStorage = require('@arcblock/app-agent-storage-memory');

const storage = new MemoryStorage();

(async () => {
  const token = '123456';
  const item = await storage.create(token);
})();
```

## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
