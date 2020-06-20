import React from 'react';

import HomeArticles from '../../components/HomeArticles';
import HomeEventCalendar from '../../components/HomeEventCalendar';
import HomeHeader from '../../components/HomeHeader';
import HomeSportsNews from '../../components/HomeSportsNews';
import HomeSubscriptionForm from '../../components/HomeSubscriptionForm';
import {
  HomeContainer,
  HomeSearchContainer,
  HomeSearch,
  HomeSearchInput,
  HomeSearchButton,
  HomeBanner,
} from './styled';

const Home = () => (
  <HomeContainer>
    <HomeSearchContainer>
      <HomeHeader>Find your next challenge.</HomeHeader>
      <HomeSearch>
        <HomeSearchInput />
        <HomeSearchButton>Go!</HomeSearchButton>
      </HomeSearch>
    </HomeSearchContainer>
    {/* TODO: Improve how to display banner image */}
    <HomeBanner src="https://via.placeholder.com/1680x512" />
    <HomeEventCalendar />
    <HomeSportsNews />
    <HomeArticles />
    <HomeSubscriptionForm />
  </HomeContainer>
);

export default Home;
