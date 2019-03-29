import GraphqlClient from '@arcblock/graphql-client';
import { getGraphQLEndpoint } from './util';

const clients = {};
const getClient = () => {
  const endpoint = getGraphQLEndpoint();
  if (!clients[endpoint]) {
    clients[endpoint] = new GraphqlClient(endpoint);
  }

  return clients[endpoint];
};

export default getClient;
