import GraphqlClient from '@arcblock/graphql-client';
import { getGraphQLEndpoint } from './util';

const client = new GraphqlClient(getGraphQLEndpoint());

export default client;
