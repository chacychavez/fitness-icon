import React from 'react';

import dropdown from '../../assets/images/dropdown.svg';
import mapPin from '../../assets/images/map-pin.svg';
import HomeHeader from '../HomeHeader';
import {
  EventCalendarContainer,
  EventsContainer,
  EventHeader,
  EventCalendarLocationDateContainer,
  EventCalendarLocation,
  EventCalendarDate,
  EventItemsContainer,
  EventItem,
  EventImage,
  EventName,
  EventDate,
  EventViewFullButton,
} from './styled';

const sportEvents = [
  {
    sport: 'Running',
    events: [
      {
        name: 'PSE Bull Run 2020',
        date: 'Sun, March 8',
      },
      {
        name: 'TRILOGY RUN ASIA 2020 Leg 1',
        date: 'Sun, April 29',
      },
      {
        name: 'NATGEO Earth Day Run 2020',
        date: 'Sun, March 8',
      },
      {
        name: 'Big Blue Run 2020',
        date: 'Sun, June 16',
      },
      {
        name: 'The Great UP Run',
        date: 'Sun, July 4',
      },
    ],
  },
  {
    sport: 'Obstacle Course Racing',
    events: [
      {
        name: 'Spartan Race 2020',
        date: 'Sun, March 8',
      },
      {
        name: 'Savage Race 2020',
        date: 'Sun, April 29',
      },
      {
        name: 'Epic Series Obstacle Challenge 2020',
        date: 'Sun, March 8',
      },
      {
        name: 'BoneFrog Challenge 2020',
        date: 'Sun, June 16',
      },
      {
        name: 'Tough Mudder 2020',
        date: 'Sun, July 14',
      },
    ],
  },
  {
    sport: 'Fitness',
    events: [
      {
        name: 'Underdog Fitness Strength Class',
        date: 'Sun, March 8',
      },
      {
        name: 'Fitness First Circuit Training',
        date: 'Sun, April 29',
      },
      {
        name: "Anytime Fitness Beginner's Class",
        date: 'Sun, March 8',
      },
      {
        name: "Gold's Gym Session",
        date: 'Sun, June 16',
      },
      {
        name: 'Underdog Fitness HIIT Experience',
        date: 'Sun, July 4',
      },
    ],
  },
];

const HomeEventCalendar = () => (
  <EventCalendarContainer>
    <HomeHeader>Upcoming events</HomeHeader>
    <EventCalendarLocationDateContainer>
      <img src={mapPin} alt="Map Pin" width={16} height={16} />
      <EventCalendarLocation>Quezon City, Philippines</EventCalendarLocation>
    </EventCalendarLocationDateContainer>
    <EventCalendarLocationDateContainer>
      <EventCalendarDate>Select dates</EventCalendarDate>
      <img src={dropdown} alt="Map Pin" width={16} height={16} />
    </EventCalendarLocationDateContainer>
    {sportEvents.map((sportEvent) => (
      <EventsContainer key={sportEvent.sport}>
        <EventHeader>
          <img src={mapPin} width={24} height={24} alt="sport" />
          {sportEvent.sport}
        </EventHeader>
        <EventItemsContainer>
          {sportEvent.events.map((event) => (
            <EventItem key={event.name}>
              <EventImage src="https://via.placeholder.com/225x175" />
              <EventName
                to={`/event-calendar/sports-events/${event.name
                  .match(
                    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
                  )
                  .map((x) => x.toLowerCase())
                  .join('-')}`}
              >
                {event.name}
              </EventName>
              <EventDate>{event.date}</EventDate>
            </EventItem>
          ))}
        </EventItemsContainer>
      </EventsContainer>
    ))}
    <EventViewFullButton>View full calendar</EventViewFullButton>
  </EventCalendarContainer>
);

export default HomeEventCalendar;
