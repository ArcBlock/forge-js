/* eslint no-console:"off" */
const fs = require('fs');
const path = require('path');
const { request } = require('graphql-request');
const { introspectionQuery } = require('graphql');

const httpEndpoint = () => 'http://localhost:8210/api';
// const httpEndpoint = () => 'https://test.abtnetwork.io/api';

(async () => {
  const dataSource = 'graphql';
  try {
    const result = await request(httpEndpoint(dataSource), introspectionQuery);
    if (result.__schema) {
      const schemaFile = path.join(__dirname, '../src/schema', `${dataSource}.json`);
      const schemaJson = JSON.stringify(result.__schema, true, '  ');
      fs.writeFileSync(schemaFile, schemaJson);
      console.log(`${dataSource} update success`, schemaFile);
    } else {
      console.log(`${dataSource} fetch failure`);
    }
  } catch (err) {
    console.error(err);
    console.log(`${dataSource} update error`);
  }
})();
