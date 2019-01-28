const GraphqlClient = require('../src/client');

describe('forge-graphql-client', () => {
  test('should be a function', () => {
    expect(typeof GraphqlClient).toEqual('function');
  });
});
