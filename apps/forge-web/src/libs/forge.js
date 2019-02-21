import GraphqlClient from '@arcblock/forge-graphql-client';

// TODO: is it enough to only support local
const client = new GraphqlClient('http://localhost:8210/api'); // local
// const client = new GraphqlClient('http://abt-test.arcblock.co:8210/api'); // abt testnet

export default client;
