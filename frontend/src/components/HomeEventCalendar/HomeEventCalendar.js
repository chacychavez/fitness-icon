import React, { useRef, useState } from 'react';

import dateSearch from '../../assets/images/date-search-filter.svg';
import mapPin from '../../assets/images/map-pin.svg';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import CustomDateRangePicker from '../CustomDateRangePicker';
import HomeHeader from '../HomeHeader';
import {
  EventCalendarContainer,
  EventsContainer,
  EventHeaderContainer,
  EventHeader,
  EventViewAllSpan,
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

const HomeEventCalendar = () => {
  const [dates, setDates] = useState(null);
  const [openPicker, setOpenPicker] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => {
    if (!openPicker) setOpenPicker(false);
  });

  const onApply = (_dates) => {
    setDates(_dates);
    setOpenPicker(false);
  };

  return (
    <EventCalendarContainer>
      <HomeHeader>Upcoming events</HomeHeader>
      <EventCalendarLocationDateContainer>
        <EventCalendarDate
          onClick={() => {
            setOpenPicker(!openPicker);
          }}
        >
          Filter by date
          <img
            src={dateSearch}
            alt="Date search filter"
            width={16}
            height={16}
          />
        </EventCalendarDate>
        {openPicker && (
          <CustomDateRangePicker
            ref={ref}
            onApply={onApply}
            onClear={() => {
              setOpenPicker(false);
            }}
          />
        )}
      </EventCalendarLocationDateContainer>
      <EventCalendarLocationDateContainer>
        <EventCalendarLocation
          type="text"
          placeholder="Filter by location..."
          icon={mapPin}
        />
      </EventCalendarLocationDateContainer>
      <div>
        <span>{dates && dates.start.format()}</span>
        <span>{dates && dates.end.format()}</span>
      </div>
      {sportEvents.map((sportEvent) => (
        <EventsContainer key={sportEvent.sport}>
          <EventHeaderContainer>
            <EventHeader>
              <img src={dateSearch} width={24} height={24} alt="sport" />
              {sportEvent.sport}
            </EventHeader>
            <EventViewAllSpan>View all</EventViewAllSpan>
          </EventHeaderContainer>
          <EventItemsContainer>
            {sportEvent.events.map((event) => (
              <EventItem key={event.name}>
                <EventImage src="https://via.placeholder.com/225x175" />
                <EventName
                  to={`/event-calendar/${
                    sportEvent.sport === 'Fitness' ? 'classes' : 'sports-events'
                  }/${event.name
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
};

export default HomeEventCalendar;
