import React, { useState, useRef } from 'react';

import { useHistory } from 'react-router-dom';

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
  HomeSearchForm,
  HomeSearchInput,
  HomeSearchButton,
  HomeBanner,
} from './styled';

const Home = () => {
  const history = useHistory();
  const ref = useRef();
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState(null);

  useOnClickOutside(ref, () => setIsFocused(false));

  const handleSubmit = () => {
    history.push(`/search?text=${searchText}`);
  };

  return (
    <HomeContainer>
      <HomeSearchContainer>
        <HomeHeader>Find your next challenge.</HomeHeader>
        <HomeSearchForm onSubmit={handleSubmit}>
          <HomeSearchInput
            onFocus={() => {
              setIsFocused(true);
            }}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <HomeSearchButton type="submit" value="Go!" />
        </HomeSearchForm>
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
