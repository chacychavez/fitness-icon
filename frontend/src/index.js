import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Home } from './containers/Home';
import { Navbar } from './components/Navbar';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from 'react-apollo';
import client from './utils/apolloClient';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Navbar />
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </ApolloProvider>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
