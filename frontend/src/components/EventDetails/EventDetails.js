import React, { useState } from 'react';

import PropTypes from 'prop-types';

import dropdownIcon from '../../assets/images/dropdown.svg';
import {
  EventDetailsContainer,
  EventDetailsHeader,
  EventDetail,
  EventDetailHeader,
  EventDetailContentHeader,
  EventDetailContent,
} from './styled';

const EventDetails = ({ details }) => (
  <EventDetailsContainer>
    <EventDetailsHeader>Event Details</EventDetailsHeader>
    {details.map((detail) => (
      <EventDetailsCollapsible
        key={detail.title}
        title={detail.title}
        contents={detail.contents}
      />
    ))}
  </EventDetailsContainer>
);

EventDetails.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      contents: PropTypes.array,
    }),
  ),
};

EventDetails.defaultProps = {
  details: [],
};

const EventDetailsCollapsible = ({ title, contents }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <EventDetail>
      <EventDetailHeader onClick={() => setCollapsed(!collapsed)}>
        <span>{title}</span>
        <img src={dropdownIcon} alt="dropdown" width={20} height={20} />
      </EventDetailHeader>
      {collapsed &&
        contents.map((content) => (
          <EventDetailContent key={content.header}>
            <EventDetailContentHeader>
              {content.header}
            </EventDetailContentHeader>
            {content.content}
          </EventDetailContent>
        ))}
    </EventDetail>
  );
};

EventDetailsCollapsible.propTypes = {
  title: PropTypes.string,
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string,
      content: PropTypes.string,
    }),
  ),
};

EventDetailsCollapsible.defaultProps = {
  title: 'PropTypes.string',
  contents: [],
};

export default EventDetails;
