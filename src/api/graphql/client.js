import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {BASE_API_URL} from '../../helpers/utils';

const link = createHttpLink({
  uri: `${BASE_API_URL}/graphql`,
  credentials: 'same-origin'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      'x-auth-token': token ? `Bearer ${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  uri: `${BASE_API_URL}/graphql`,
  cache: new InMemoryCache()
});