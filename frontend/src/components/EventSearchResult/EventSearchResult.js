import React from 'react';

import PropTypes from 'prop-types';

import {
  EventSearchResultContainer,
  EventDate,
  EventMonth,
  EventDay,
  EventImg,
  EventInfo,
  EventName,
  EventLevels,
  EventLocation,
  EventPrice,
} from './styled';

const EventSearchResult = ({
  date, name, levels, location, price,
}) => (
  <EventSearchResultContainer>
    <EventDate>
      <EventDay>{date.day}</EventDay>
      <EventMonth>{date.month}</EventMonth>
    </EventDate>
    <EventImg src="https://via.placeholder.com/112x96" />
    <EventInfo>
      <EventName>{name}</EventName>
      <EventLevels>{levels.join(', ')}</EventLevels>
      <EventLocation>{location}</EventLocation>
      <EventPrice>{price}</EventPrice>
    </EventInfo>
  </EventSearchResultContainer>
);

EventSearchResult.propTypes = {
  date: PropTypes.string,
  name: PropTypes.string,
  levels: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.string,
  price: PropTypes.string,
};

EventSearchResult.defaultProps = {
  date: '',
  name: '',
  levels: [],
  location: '',
  price: '',
};

export default EventSearchResult;
