import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import userInfoVar from "../store/user";
import userValidVar from "../store/user";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getUserInfo: {
          read() {
            return userInfoVar();
          },
        },
        getValid: {
          read() {
            return userValidVar();
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
