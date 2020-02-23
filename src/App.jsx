import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { GlobalStyle } from './GlobalStyles';
import { Home } from './pages/Home';
import { Scanner } from './pages/Scanner';

const httpLink = {
  uri: 'https://damp-inlet-09248.herokuapp.com/graphql'
};

const client = new ApolloClient({
  link: new HttpLink(httpLink),
  cache: new InMemoryCache()
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Home />
    </ApolloProvider>
  );
};
