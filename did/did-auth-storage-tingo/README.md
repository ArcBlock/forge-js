![did-auth-storage-tingo](https://www.arcblock.io/.netlify/functions/badge/?text=did-auth-storage-tingo)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Storage engine that uses tingo to store data, implements interfaces defined in `@arcblock/did-auth-storage`.


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)


## Install

```sh
npm install @arcblock/did-auth-storage-tingo
// or
yarn add @arcblock/did-auth-storage-tingo
```


## Usage

```js
const tingoStorage = require('@arcblock/did-auth-storage-tingo');

const storage = new tingoStorage({
  dbPath: '/some/local/path',
  collection: 'did_auth_tokens',
});

// Listen on events of the storage
storage.on('create', d => console.log('create', d));
storage.on('update', d => console.log('update', d));
storage.on('destroy', d => console.log('destroy', d));

(async () => {
  const token = '123456';
  const item = await storage.create(token);
})();
```


## Contributors

| Name             | Website                    |
| ---------------- | -------------------------- |
| **wangshijun**   | <https://ocap.arcblock.io> |
| **NateRobinson** | <https://ocap.arcblock.io> |
