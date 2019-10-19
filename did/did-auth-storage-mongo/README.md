# [**@arcblock/did-auth-storage-mongo**](https://github.com/arcblock/abt-did-js)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Storage engine that uses mongo to store data, implements interfaces defined in `@arcblock/did-auth-storage`.


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)


## Install

```sh
npm install @arcblock/did-auth-storage-mongo
// or
yarn add @arcblock/did-auth-storage-mongo
```


## Usage

```js
const MongoStorage = require('@arcblock/did-auth-storage-mongo');

const storage = new MongoStorage({
  url: 'mongodb://localhost/forge-web-starter',
  collection: 'did_auth_tokens',
});

(async () => {
  const token = '123456';
  const item = await storage.create(token);
})();
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
