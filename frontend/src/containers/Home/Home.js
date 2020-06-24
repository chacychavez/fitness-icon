import React, { useState, useRef } from 'react';

import HomeArticles from '../../components/HomeArticles';
import HomeEventCalendar from '../../components/HomeEventCalendar';
import HomeHeader from '../../components/HomeHeader';
import HomeSearchSuggestion from '../../components/HomeSearchSuggestion';
import HomeSportsNews from '../../components/HomeSportsNews';
import HomeSubscriptionForm from '../../components/HomeSubscriptionForm';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import {
  HomeContainer,
  HomeSearchContainer,
  HomeSearch,
  HomeSearchInput,
  HomeSearchButton,
  HomeBanner,
} from './styled';

const Home = () => {
  const ref = useRef();
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState(null);

  useOnClickOutside(ref, () => setIsFocused(false));

  return (
    <HomeContainer>
      <HomeSearchContainer>
        <HomeHeader>Find your next challenge.</HomeHeader>
        <HomeSearch>
          <HomeSearchInput
            onFocus={() => {
              setIsFocused(true);
            }}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <HomeSearchButton>Go!</HomeSearchButton>
        </HomeSearch>
        {isFocused && searchText && (
          <HomeSearchSuggestion ref={ref} searchText={searchText} />
        )}
      </HomeSearchContainer>
      {/* TODO: Improve how to display banner image */}
      <HomeBanner src="https://via.placeholder.com/1680x512" />
      <HomeEventCalendar />
      <HomeSportsNews />
      <HomeArticles />
      <HomeSubscriptionForm />
    </HomeContainer>
  );
};

export default Home;
