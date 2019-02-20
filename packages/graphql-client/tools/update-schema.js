/* eslint no-console:"off" */
const fs = require('fs');
const path = require('path');
const { request } = require('graphql-request');
const { introspectionQuery } = require('graphql');

// const httpEndpoint = () => 'http://localhost:8210/api';
const httpEndpoint = () => 'http://abt-test.arcblock.co:8210/api';
// const httpEndpoint = () => 'https://auth.arcblock.co/api';

const dataSources = ['schema'];
dataSources.map(async dataSource => {
  try {
    const result = await request(httpEndpoint(dataSource), introspectionQuery);
    if (result.__schema) {
      const schemaFile = path.join(__dirname, '../src', `${dataSource}.json`);
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
});
