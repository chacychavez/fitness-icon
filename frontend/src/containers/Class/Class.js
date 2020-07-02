import React from 'react';

import ChallengeShareLinks from '../../components/ChallengeShareLinks';
import EventDetails from '../../components/EventDetails';
import {
  ClassMainContainer,
  ClassBanner,
  ClassContainer,
  ClassHeader,
  ClassAdContainer,
  ClassScheduleLocationContainer,
  ClassSchedule,
  ClassLocation,
  ClassOrganizerParticipantsContainer,
  ClassOrganizer,
  ClassCoach,
  ClassParticipants,
  ClassOrganizerContact,
  OrganizerContactNumber,
  OrganizerInstagram,
  OrganizerFacebook,
  ClassArticle,
  ClassOffers,
  ClassOffersHeader,
  ClassOfferContainer,
  ClassOffer,
  ClassOfferDetails,
  ClassPrice,
  ClassBooking,
  ClassBookingHeader,
  ClassBookingDetails,
  ClassBookingButton,
  AdContainer,
  AdBanner,
} from './styled';

const Class = () => {
  const content =
    'Overcome the odds with Underdog Fitness! Featuring a great community of instructors and trainees along with modern day amenities, Underdog Fitness can mold any fitness underdog into a bona fide health hero.';
  const offers = [
    {
      name: 'Single pass',
      details: 'Avail a single admission pass to join the strength class',
      price: 'Php 500.00',
    },
    {
      name: 'Buddy Promo',
      details: 'Avail a single admission pass to join the strength class',
      price: 'Php 750.00',
    },
    {
      name: '5-Session pass',
      details: 'Avail a single admission pass to join the strength class',
      price: 'Php 500.00',
    },
  ];

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
    <ClassMainContainer>
      <ClassBanner src="https://via.placeholder.com/1680x512" />
      <ClassAdContainer>
        <ClassContainer>
          <ClassHeader>Underdog Fitness Strength Class</ClassHeader>
          <ClassScheduleLocationContainer>
            <ClassSchedule>Every Sunday, 4:00 PM - 4:30 PM</ClassSchedule>
            <ClassLocation>South Triangle, Quezon City</ClassLocation>
          </ClassScheduleLocationContainer>
          <ClassOrganizerParticipantsContainer>
            <ClassOrganizer>by Underdog Fitness</ClassOrganizer>
            <ClassCoach>Led by Coach Mark Reyes</ClassCoach>
            <ClassParticipants>13,000 participants</ClassParticipants>
          </ClassOrganizerParticipantsContainer>
          <ClassOrganizerContact>
            <OrganizerContactNumber>+639278205956</OrganizerContactNumber>
            <OrganizerInstagram>@underdogfitnessph</OrganizerInstagram>
            <OrganizerFacebook>/underdogfitnessph</OrganizerFacebook>
          </ClassOrganizerContact>
          {content.split('\n').map((paragraph) => (
            <ClassArticle key={paragraph}>{paragraph}</ClassArticle>
          ))}
          <ClassOffers>
            <ClassOffersHeader>Class Offers</ClassOffersHeader>
            {offers.map((offer) => (
              <ClassOfferContainer key={offer.name}>
                <ClassOffer>{offer.name}</ClassOffer>
                <ClassOfferDetails>{offer.details}</ClassOfferDetails>
                <ClassPrice>{offer.price}</ClassPrice>
              </ClassOfferContainer>
            ))}
          </ClassOffers>
          <ClassBooking>
            <ClassBookingHeader>Booking</ClassBookingHeader>
            <ClassBookingDetails>
              To join this class, click on the button below. You will be
              redirected to the gym website for checkout.
            </ClassBookingDetails>
            <ClassBookingButton>Book this class</ClassBookingButton>
          </ClassBooking>
          <EventDetails details={details} />
          <ChallengeShareLinks />
        </ClassContainer>
        <AdContainer>
          <AdBanner src="https://via.placeholder.com/300x600" />
        </AdContainer>
      </ClassAdContainer>
    </ClassMainContainer>
  );
};

export default Class;
