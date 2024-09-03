"use client"

import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
<<<<<<< HEAD
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
=======
  uri: "http://localhost:3000/graphql",
>>>>>>> mauricio
  credentials: "include"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
  },
  connectToDevTools: true
});

export default client;