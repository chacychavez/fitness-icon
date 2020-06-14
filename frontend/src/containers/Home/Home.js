import React from 'react';
import {
  HomeContainer,
  HomeHeader,
  HomeSearchContainer,
  HomeSearchInput,
  HomeSearchButton,
  HomeBanner,
  EventCalendarContainer,
  EventsContainer,
  EventHeader,
  EventItemsContainer,
  EventItem,
  EventImage,
  EventName,
  EventDate,
  EventViewFullButton,
  SportsNewsContainer,
  SportsNewsBannerContainer,
  SportsNewsBannerImage,
  SportsNewsBannerDescriptionContainer,
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

export const Home = () => {
  return (
    <HomeContainer>
      <HomeHeader>Find your next challenge.</HomeHeader>
      <HomeSearchContainer>
        <HomeSearchInput />
        <HomeSearchButton>Go</HomeSearchButton>
      </HomeSearchContainer>
      <HomeBanner src='https://via.placeholder.com/1680x512' />
      <EventCalendarContainer>
        <HomeHeader>Upcoming events</HomeHeader>
        <span>Quezon City, Philippines</span>
        <span> - </span>
        <span>Select dates</span>
        {sportEvents.map((sportEvent) => (
          <EventsContainer>
            <EventHeader>{sportEvent.sport}</EventHeader>
            <EventItemsContainer>
              {sportEvent.events.map((event) => (
                <EventItem>
                  <EventImage src='https://via.placeholder.com/225x175' />
                  <EventName>{event.name}</EventName>
                  <EventDate>{event.date}</EventDate>
                </EventItem>
              ))}
            </EventItemsContainer>
          </EventsContainer>
        ))}
        <EventViewFullButton>View Full Calendar</EventViewFullButton>
      </EventCalendarContainer>
      <SportsNewsContainer>
        <HomeHeader>Sports news</HomeHeader>
        <SportsNewsBannerContainer>
          <SportsNewsBannerImage src='https://via.placeholder.com/1680x512' />
          <SportsNewsBannerDescriptionContainer>
            <header>Why are Obstacle-Course Races So Popular?</header>
            <span>
              As marathon participation declines, more people are signing up for
              extreme events such as Spartan and Tough Mudder.
            </span>
          </SportsNewsBannerDescriptionContainer>
        </SportsNewsBannerContainer>
      </SportsNewsContainer>
    </HomeContainer>
  );
};
