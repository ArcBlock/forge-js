import GraphqlClient from '@arcblock/forge-graphql-client';

// TODO: is it enough to only support local
const client = new GraphqlClient('http://localhost:8210/api');

export default client;
