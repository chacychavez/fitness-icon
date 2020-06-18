import React from 'react';

import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import client from '../../utils/apolloClient';
import Advertise from '../Advertise';
import Articles from '../Articles';
import EventCalendar from '../EventCalendar';
import EventSubmission from '../EventSubmission';
import Home from '../Home';
import ProductReviews from '../ProductReviews';
import SportsDirectory from '../SportsDirectory';

const App = () => (
  <Router>
    <ApolloProvider client={client}>
      <Navbar />
      <Switch>
        <Route path="/">
          <Route exact path="/" component={Home} />
          <Route exact path="/event-calendar" component={EventCalendar} />
          <Route exact path="/sports-directory" component={SportsDirectory} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/product-reviews" component={ProductReviews} />
          <Route exact path="/submit-an-event" component={EventSubmission} />
          <Route exact path="/advertise" component={Advertise} />
        </Route>
      </Switch>
    </ApolloProvider>
  </Router>
);

export default App;
