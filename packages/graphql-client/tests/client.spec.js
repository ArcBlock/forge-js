const GraphqlClient = require('../src/client');

describe('GraphqlClient', () => {
  test('should be a function', () => {
    expect(typeof GraphqlClient).toEqual('function');
  });

  const client = new GraphqlClient('http://localhost:8210/api');

  test('should have many query methods', () => {
    expect(client.getQueries().length).toBeGreaterThan(0);
  });

  test('should have many mutation methods', () => {
    expect(client.getMutations().length).toBeGreaterThan(0);
  });

  test('should have many subscription methods', () => {
    expect(client.getSubscriptions().length).toBeGreaterThan(0);
  });

  test('should support getBlock', async () => {
    const { getBlock } = await client.getBlock({ height: 2 });
    expect(getBlock.code).toEqual('OK');
    expect(getBlock.block.height).toEqual(2);
  });
});
