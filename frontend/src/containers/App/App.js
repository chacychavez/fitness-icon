import React from 'react';
import { Home } from '../Home';
import { EventCalendar } from '../EventCalendar';
import { SportsDirectory } from '../SportsDirectory';
import { Articles } from '../Articles';
import { ProductReviews } from '../ProductReviews';
import { EventSubmission } from '../EventSubmission';
import { Advertise } from '../Advertise';
import { Navbar } from '../../components/Navbar';
import { ApolloProvider } from 'react-apollo';
import client from '../../utils/apolloClient';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Navbar />
        <Switch>
          <Route path='/'>
            <Route exact path='/' component={Home} />
            <Route exact path='/event-calendar' component={EventCalendar} />
            <Route exact path='/sports-directory' component={SportsDirectory} />
            <Route exact path='/articles' component={Articles} />
            <Route exact path='/product-reviews' component={ProductReviews} />
            <Route exact path='/submit-an-event' component={EventSubmission} />
            <Route exact path='/advertise' component={Advertise} />
          </Route>
        </Switch>
      </ApolloProvider>
    </Router>
  );
};
