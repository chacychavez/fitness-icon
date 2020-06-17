import React from 'react';
import {
  HomeContainer,
  HomeSearchContainer,
  HomeSearchInput,
  HomeSearchButton,
  HomeBanner,
} from './styled';
import { HomeHeader } from '../../components/HomeHeader';
import { HomeArticles } from '../../components/HomeArticles';
import { HomeSportsNews } from '../../components/HomeSportsNews';
import { HomeEventCalendar } from '../../components/HomeEventCalendar';
import { HomeSubscriptionForm } from '../../components/HomeSubscriptionForm';

export const Home = () => {
  return (
    <HomeContainer>
      <HomeHeader>Find your next challenge.</HomeHeader>
      <HomeSearchContainer>
        <HomeSearchInput />
        <HomeSearchButton>Go</HomeSearchButton>
      </HomeSearchContainer>
      <HomeBanner src='https://via.placeholder.com/1680x512' />
      <HomeEventCalendar />
      <HomeSportsNews />
      <HomeArticles />
      <HomeSubscriptionForm />
    </HomeContainer>
  );
};
