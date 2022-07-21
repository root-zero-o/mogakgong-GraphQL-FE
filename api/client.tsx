import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import userInfo from "../store/user";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getUserInfo: {
          read() {
            return userInfo();
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "",
  cache,
});

export default client;
