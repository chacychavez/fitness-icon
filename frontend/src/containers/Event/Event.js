import React, { useState } from 'react';

import PropTypes from 'prop-types';

import dropdownIcon from '../../assets/images/dropdown.svg';
import {
  EventMainContainer,
  EventBanner,
  EventContainer,
  EventHeader,
  EventAdContainer,
  EventDateLocationWebsiteContainer,
  EventDate,
  EventLocation,
  EventWebsite,
  EventWeatherParticipantsContainer,
  EventWeather,
  EventParticipants,
  EventOrganizer,
  EventArticle,
  EventCategories,
  EventCategoryHeader,
  EventCategoryContainer,
  EventCategoryRouteContainer,
  EventCategory,
  EventRoute,
  EventSchedules,
  EventSchedule,
  Time,
  Description,
  EventPrice,
  EventInclusionsContainer,
  EventInclusionHeader,
  EventInclusions,
  EventInclusion,
  EventInclusionImg,
  EventInclusionInfo,
  EventInclusionName,
  EventInclusionCondition,
  EventRegistration,
  EventRegistrationHeader,
  EventRegistrationPeriod,
  RegistrationPeriodHeader,
  RegistrationEarlyBird,
  RegistrationRegular,
  RegistrationOnsite,
  RegistrationSitesHeader,
  SiteContainer,
  Site,
  SiteBranches,
  SiteBranch,
  EventRegistrationSites,
  RegistrationSite,
  EventOnlineRegistration,
  EventOnlineRegistrationHeader,
  EventOnlineRegistrationDetails,
  EventOnlineRegistrationButton,
  EventDetails,
  EventDetailsHeader,
  EventDetail,
  EventDetailHeader,
  EventDetailContentHeader,
  EventDetailContent,
  AdContainer,
  AdBanner,
} from './styled';

const Event = () => {
  const content =
    'The PSE will hold the 15th edition of the PSE Bull Run on May 24, 2020, at Mckinley West, Taguig.\nThe PSE Bull Run is an annual running event organized by the PSE to raise awareness about investing in the stock market and promote physical fitness alongside financial wellness.\nThe main running categories are: 21k, 16k, 10k, and 5k for this year’s run.\nAll runners will be given a race bib, timing chip, official singlet, finisher’s certificate and finisher’s shirt. Participating finishers from the 21k category will be getting a finisher’s medal.';

  const categories = [
    {
      name: '5k',
      route: '',
      assembly: '04:10 AM',
      start: '05:10 AM',
      cutoff: '07:00 AM',
      price: 'Php 800.00',
    },
    {
      name: '10k',
      route: '',
      assembly: '04:10 AM',
      start: '05:10 AM',
      cutoff: '07:00 AM',
      price: 'Php 900.00',
    },
    {
      name: '16k',
      route: '',
      assembly: '04:10 AM',
      start: '05:10 AM',
      cutoff: '07:00 AM',
      price: 'Php 100.00',
    },
    {
      name: '20k',
      route: '',
      assembly: '04:10 AM',
      start: '05:10 AM',
      cutoff: '07:00 AM',
      price: 'Php 1250.00',
    },
  ];

  const inclusions = [
    {
      item: 'Race Singlet',
      condition: 'All distances',
    },
    {
      item: 'Finisher Shirt',
      condition: 'All distances',
    },
    {
      item: 'Finisher Medal',
      condition: '21k',
    },
    {
      item: 'Drawstring bag',
      condition: 'All distances',
    },
    {
      item: 'Finisher’s certificate',
      condition: 'All distances',
    },
    {
      item: 'Hydration bottle',
      condition: 'All distances',
    },
  ];

  const registration = {
    period: {
      earlyBird: 'January 15-January 22',
      regular: 'On going',
      onsite: 'TBA',
    },
    sites: {
      malls: {
        schedule: '12NN- 8PM',
        branches: [
          {
            name: 'Olympic Village',
            malls: [
              'Alabang Town Center',
              'Market Market',
              'Glorietta 2',
              'Trinoma',
            ],
          },
          {
            name: 'Sports House',
            malls: ['Mall of Asia'],
          },
        ],
      },
      other: {
        location: 'PSE Tower, BGC',
        schedule: 'Monday-Friday 9AM - 6PM',
      },
    },
  };

  const details = [
    {
      title: 'Race kit claiming',
      contents: [
        {
          header: 'How does a wave start work?',
          content:
            'Wave starts are designed to reduce race start congestion and improve your race day running experience. In a wave start, runners start in groups at 2 minute intervals. This way you can run with others who are similar in speed. A wave start will allow you plenty of space along the course, at the aid stations and at the finish line, without affecting your chip time or the time you have to complete the race. On race day you will line up under / behind the banner that best fits your estimated running pace per mile.',
        },
      ],
    },
    {
      title: 'Competition rules',
      contents: [
        {
          header: 'How does a wave start work??',
          content:
            'Wave starts are designed to reduce race start congestion and improve your race day running experience. In a wave start, runners start in groups at 2 minute intervals. This way you can run with others who are similar in speed. A wave start will allow you plenty of space along the course, at the aid stations and at the finish line, without affecting your chip time or the time you have to complete the race. On race day you will line up under / behind the banner that best fits your estimated running pace per mile.',
        },
      ],
    },
    {
      title: 'Frqequently Asked Questions',
      contents: [
        {
          header: 'How does a wave start work???',
          content:
            'Wave starts are designed to reduce race start congestion and improve your race day running experience. In a wave start, runners start in groups at 2 minute intervals. This way you can run with others who are similar in speed. A wave start will allow you plenty of space along the course, at the aid stations and at the finish line, without affecting your chip time or the time you have to complete the race. On race day you will line up under / behind the banner that best fits your estimated running pace per mile.',
        },
      ],
    },
  ];

  return (
    <EventMainContainer>
      <EventBanner src="https://via.placeholder.com/1680x512" />
      <EventAdContainer>
        <EventContainer>
          <EventHeader>PSE Bull Run 2020</EventHeader>
          <EventDateLocationWebsiteContainer>
            <EventDate>May 24, 2020</EventDate>
            <EventLocation>Mckinely West, Taguig City</EventLocation>
            <EventWebsite>www.psebullrun.ph</EventWebsite>
          </EventDateLocationWebsiteContainer>
          <EventWeatherParticipantsContainer>
            <EventWeather>Partly cloudy throughout the day</EventWeather>
            <EventParticipants>13,000 participants</EventParticipants>
          </EventWeatherParticipantsContainer>
          <EventOrganizer>
            Organized by <span>Runrio Events Inc.</span>
          </EventOrganizer>
          {content.split('\n').map((paragraph) => (
            <EventArticle key={paragraph}>{paragraph}</EventArticle>
          ))}
          <EventCategories>
            <EventCategoryHeader>Categories</EventCategoryHeader>
            {categories.map((category) => (
              <EventCategoryContainer key={category.name}>
                <EventCategoryRouteContainer>
                  <EventCategory>{category.name}</EventCategory>
                  <EventRoute>View race route</EventRoute>
                </EventCategoryRouteContainer>
                <EventSchedules>
                  <EventSchedule>
                    <Time>{category.assembly}</Time>
                    <Description>Assembly</Description>
                  </EventSchedule>
                  <EventSchedule>
                    <Time>{category.start}</Time>
                    <Description>Gun Start</Description>
                  </EventSchedule>
                  <EventSchedule>
                    <Time>{category.cutoff}</Time>
                    <Description>Cut-Off</Description>
                  </EventSchedule>
                </EventSchedules>
                <EventPrice>{category.price}</EventPrice>
              </EventCategoryContainer>
            ))}
          </EventCategories>
          <EventInclusionsContainer>
            <EventInclusionHeader>Inclusions</EventInclusionHeader>
            <EventInclusions>
              {inclusions.map((inclusion) => (
                <EventInclusion key={inclusion.item}>
                  <EventInclusionImg src="https://via.placeholder.com/192x192" />
                  <EventInclusionInfo>
                    <EventInclusionName>{inclusion.item}</EventInclusionName>
                    <EventInclusionCondition>
                      {inclusion.condition}
                    </EventInclusionCondition>
                  </EventInclusionInfo>
                </EventInclusion>
              ))}
            </EventInclusions>
          </EventInclusionsContainer>
          <EventRegistration>
            <EventRegistrationHeader>Registration</EventRegistrationHeader>
            <EventRegistrationPeriod>
              <RegistrationPeriodHeader>
                Registration Period
              </RegistrationPeriodHeader>
              <RegistrationEarlyBird>
                Online Early Bird: {registration.period.earlyBird}
              </RegistrationEarlyBird>
              <RegistrationRegular>
                Online Regular: {registration.period.regular}
              </RegistrationRegular>
              <RegistrationOnsite>
                Onsite: {registration.period.onsite}
              </RegistrationOnsite>
            </EventRegistrationPeriod>
            <EventRegistrationSites>
              <RegistrationSitesHeader>
                Registration sites
              </RegistrationSitesHeader>
              <RegistrationSite>
                Malls ({registration.sites.malls.schedule})
              </RegistrationSite>
              {registration.sites.malls.branches.map((branch) => (
                <SiteContainer key={branch.name}>
                  <Site>{branch.name}</Site>
                  <SiteBranches>
                    {branch.malls.map((mall) => (
                      <SiteBranch key={mall}>{mall}</SiteBranch>
                    ))}
                  </SiteBranches>
                </SiteContainer>
              ))}
              <Site>
                {registration.sites.other.location} (
                {registration.sites.other.schedule})
              </Site>
            </EventRegistrationSites>
            <EventOnlineRegistration>
              <EventOnlineRegistrationHeader>
                Online registration
              </EventOnlineRegistrationHeader>
              <EventOnlineRegistrationDetails>
                To register online, visit the event website by clicking the
                button below.
              </EventOnlineRegistrationDetails>
              <EventOnlineRegistrationButton>
                Sign me up!
              </EventOnlineRegistrationButton>
            </EventOnlineRegistration>
          </EventRegistration>
          <EventDetails>
            <EventDetailsHeader>Event Details</EventDetailsHeader>
            {details.map((detail) => (
              <EventDetailsCollapsible
                key={detail.title}
                title={detail.title}
                contents={detail.contents}
              />
            ))}
          </EventDetails>
        </EventContainer>
        <AdContainer>
          <AdBanner src="https://via.placeholder.com/300x600" />
        </AdContainer>
      </EventAdContainer>
    </EventMainContainer>
  );
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
      map: PropTypes.func,
    }),
  ),
};

EventDetailsCollapsible.defaultProps = {
  title: 'PropTypes.string',
  contents: {},
};

export default Event;
