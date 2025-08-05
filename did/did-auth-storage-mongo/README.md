![did-auth-storage-mongo](https://www.arcblock.io/.netlify/functions/badge/?text=did-auth-storage-mongo)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Storage engine that uses mongo to store data, implements interfaces defined in `@arcblock/did-connect-storage`.


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)


## Install

```sh
npm install @arcblock/did-connect-storage-mongo
// or
yarn add @arcblock/did-connect-storage-mongo
```


## Usage

```js
const MongoStorage = require('@arcblock/did-connect-storage-mongo');

const storage = new MongoStorage({
  url: 'mongodb://localhost/forge-web-starter',
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

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
