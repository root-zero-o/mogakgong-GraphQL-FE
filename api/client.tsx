import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "",
  cache: new InMemoryCache(),
});

export default client;
