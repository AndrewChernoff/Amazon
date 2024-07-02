import { ApolloClient, InMemoryCache, ApolloProvider, gql, HttpLink } from '@apollo/client';

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clxyhtz9100tr07w8ms9812ck/master',
        useGETForQueries: true,
    }),
    
    cache: new InMemoryCache(),
});

export default client