import React from 'react';

import PropTypes from 'prop-types';

import {
  ClassSearchResultContainer,
  ClassImg,
  ClassInfo,
  ClassSchedule,
  ClassNamePlace,
  ClassLocation,
  ClassPrice,
} from './styled';

const ClassSearchResult = ({ name, place, schedule, location, price }) => (
  <ClassSearchResultContainer>
    <ClassImg src="https://via.placeholder.com/112x96" />
    <ClassInfo>
      <ClassNamePlace>
        {name}
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        {place}
      </ClassNamePlace>
      <ClassSchedule>
        {schedule.dates.join(', ')}
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        {schedule.time}
      </ClassSchedule>
      <ClassLocation>{location}</ClassLocation>
      <ClassPrice>{price}</ClassPrice>
    </ClassInfo>
  </ClassSearchResultContainer>
);

ClassSearchResult.propTypes = {
  name: PropTypes.string,
  place: PropTypes.string,
  schedule: PropTypes.shape({
    dates: PropTypes.arrayOf(PropTypes.string),
    time: PropTypes.string,
  }),
  location: PropTypes.string,
  price: PropTypes.string,
};

ClassSearchResult.defaultProps = {
  name: '',
  place: '',
  schedule: {
    dates: [],
    time: '',
  },
  location: '',
  price: '',
};

export default ClassSearchResult;
