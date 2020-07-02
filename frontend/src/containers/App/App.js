import React, { useEffect } from 'react';

import { ApolloProvider } from 'react-apollo';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';

import Navbar from '../../components/Navbar';
import client from '../../utils/apolloClient';
import Advertise from '../Advertise';
import Article from '../Article';
import Articles from '../Articles';
import Class from '../Class';
import Event from '../Event';
import EventCalendar from '../EventCalendar';
import EventSubmission from '../EventSubmission';
import Home from '../Home';
import ProductReviews from '../ProductReviews';
import SearchResults from '../SearchResults';
import SportsDirectory from '../SportsDirectory';

import '../../assets/fonts/fonts.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <Router>
    <ApolloProvider client={client}>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/">
          <Route exact path="/" component={Home} />
          <Route path="/event-calendar">
            <Route exact path="/event-calendar" component={EventCalendar} />
            <Route
              exact
              path="/event-calendar/sports-events/:id"
              component={Event}
            />
            <Route exact path="/event-calendar/classes/:id" component={Class} />
          </Route>
          <Route exact path="/sports-directory" component={SportsDirectory} />
          <Route path="/articles">
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/articles/:id" component={Article} />
          </Route>
          <Route exact path="/product-reviews" component={ProductReviews} />
          <Route exact path="/submit-an-event" component={EventSubmission} />
          <Route exact path="/advertise" component={Advertise} />
          <Route exact path="/search" component={SearchResults} />
        </Route>
      </Switch>
    </ApolloProvider>
  </Router>
);

export default App;
