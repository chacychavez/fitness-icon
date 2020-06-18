import React from 'react';

import HomeArticles from '../../components/HomeArticles';
import HomeEventCalendar from '../../components/HomeEventCalendar';
import HomeHeader from '../../components/HomeHeader';
import HomeSportsNews from '../../components/HomeSportsNews';
import HomeSubscriptionForm from '../../components/HomeSubscriptionForm';
import {
  HomeContainer,
  HomeSearchContainer,
  HomeSearchInput,
  HomeSearchButton,
  HomeBanner,
} from './styled';

const Home = () => (
  <HomeContainer>
    <HomeHeader>Find your next challenge.</HomeHeader>
    <HomeSearchContainer>
      <HomeSearchInput />
      <HomeSearchButton>Go</HomeSearchButton>
    </HomeSearchContainer>
    <HomeBanner src="https://via.placeholder.com/1680x512" />
    <HomeEventCalendar />
    <HomeSportsNews />
    <HomeArticles />
    <HomeSubscriptionForm />
  </HomeContainer>
);

export default Home;
