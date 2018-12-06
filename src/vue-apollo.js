import Vue from "vue";
import VueApollo from "vue-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: process.env.VUE_APP_GRAPHQL_ENDPOINT
});

// Create the apollo client
export const defaultClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
  onError: ({ graphQLErrors, networkError }) => {
    if (networkError) {
      console.log("[networkError]", networkError);
    }
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        console.dir(err);
      }
    }
  }
});

const apolloProvider = new VueApollo({
  defaultClient
});

// Install the vue plugin
Vue.use(VueApollo);

export default apolloProvider;
