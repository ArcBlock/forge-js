/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
/* eslint no-console:"off" */
const fs = require('fs');
const path = require('path');
const jsonpack = require('jsonpack');
const { request } = require('graphql-request');
const { introspectionQuery } = require('graphql');

const httpEndpoint = () => 'http://localhost:8210/api';
// const httpEndpoint = () => 'https://zinc.abtnetwork.io/api';

(async () => {
  const dataSource = 'graphql';
  try {
    const result = await request(httpEndpoint(dataSource), introspectionQuery);
    if (result.__schema) {
      const schemaFile = path.join(__dirname, '../src/schema', `${dataSource}.json`);
      const schemaFilePacked = path.join(__dirname, '../src/schema', `${dataSource}.txt`);
      const schemaJson = JSON.stringify(result.__schema, true, '  ');
      fs.writeFileSync(schemaFile, schemaJson);
      fs.writeFileSync(schemaFilePacked, jsonpack.pack(schemaJson));
      console.log(`${dataSource} update success`, schemaFile);
    } else {
      console.log(`${dataSource} fetch failure`);
    }
  } catch (err) {
    console.error(err);
    console.log(`${dataSource} update error`);
  }
})();
