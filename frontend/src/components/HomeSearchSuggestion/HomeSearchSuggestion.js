import React from 'react';

import PropTypes from 'prop-types';

import {
  HomeSearchSuggestionContainer,
  SearchText,
  SearchEventsSuggestions,
  SearchEventsHeader,
  SearchEvents,
  SearchEvent,
  SearchEventImg,
  SearchEventInfo,
  SearchEventName,
  SearchEventDateLocation,
  SearchClassesSuggestions,
  SearchClassesHeader,
  SearchClasses,
  SearchClass,
  SearchClassImg,
  SearchClassInfo,
  SearchClassName,
  SearchClassDateLocation,
  SearchSeeAll,
} from './styled';

const HomeSearchSuggestion = React.forwardRef((props, ref) => {
  const eventsSuggestions = [
    {
      name: 'Power UP Novice Competition',
      date: 'Sun, April 29',
      location: 'Quezon City, NCR',
    },
    {
      name: 'Cento Atletico Climbing Festival',
      date: 'Sun, May 31',
      location: 'Quezon City, NCR',
    },
    {
      name: 'Climb Central Manila Climbing Competition',
      date: 'Mon, Jun 1',
      location: 'Pasig City, NCR',
    },
  ];

  const classesSuggestions = [
    {
      name: 'The Bouldering Hive Beginner’s Clinic',
      date: 'Sun, May 31',
      location: 'Quezon City, NCR',
    },
    {
      name: 'Power UP Climbing Lessons',
      date: 'Mon, Jun 1',
      location: 'Pasig City, NCR',
    },
  ];

  return (
    <HomeSearchSuggestionContainer ref={ref}>
      <SearchText>
        <img src="https://via.placeholder.com/32x32" alt="search-img" />
        {props.searchText}
      </SearchText>
      <SearchEventsSuggestions>
        <SearchEventsHeader>Sports Events</SearchEventsHeader>
        <SearchEvents>
          {eventsSuggestions.map((eventSuggestion) => (
            <SearchEvent>
              <SearchEventImg src="https://via.placeholder.com/32x32" />
              <SearchEventInfo>
                <SearchEventName>{eventSuggestion.name}</SearchEventName>
                <SearchEventDateLocation>
                  {eventSuggestion.date} - {eventSuggestion.location}
                </SearchEventDateLocation>
              </SearchEventInfo>
            </SearchEvent>
          ))}
        </SearchEvents>
      </SearchEventsSuggestions>
      <SearchClassesSuggestions>
        <SearchClassesHeader>Classes</SearchClassesHeader>
        <SearchClasses>
          {classesSuggestions.map((classesSuggestion) => (
            <SearchClass>
              <SearchClassImg src="https://via.placeholder.com/32x32" />
              <SearchClassInfo>
                <SearchClassName>{classesSuggestion.name}</SearchClassName>
                <SearchClassDateLocation>
                  {classesSuggestion.date} - {classesSuggestion.location}
                </SearchClassDateLocation>
              </SearchClassInfo>
            </SearchClass>
          ))}
        </SearchClasses>
      </SearchClassesSuggestions>
      <SearchSeeAll>
        See all 134 results for &apos;{props.searchText}&apos;
      </SearchSeeAll>
    </HomeSearchSuggestionContainer>
  );
});

HomeSearchSuggestion.propTypes = {
  searchText: PropTypes.string,
};

HomeSearchSuggestion.defaultProps = {
  searchText: '',
};

export default HomeSearchSuggestion;
