import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache : new InMemoryCache()
});

export default client