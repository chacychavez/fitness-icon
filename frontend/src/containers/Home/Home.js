import React from 'react';
import {
  HomeContainer,
  HomeHeader,
  HomeSearchContainer,
  HomeSearchInput,
  HomeSearchButton,
  HomeBanner,
} from './styled';

export const Home = () => {
  return (
    <HomeContainer>
      <HomeHeader>Find your next challenge.</HomeHeader>
      <HomeSearchContainer>
        <HomeSearchInput />
        <HomeSearchButton>Go</HomeSearchButton>
      </HomeSearchContainer>
      <HomeBanner src='https://via.placeholder.com/1680x512' />
    </HomeContainer>
  );
};
