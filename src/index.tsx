import React from 'react';
import ReactDOM from 'react-dom';
import 'nprogress/nprogress.css';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./graphql/graphql";

import { store } from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
