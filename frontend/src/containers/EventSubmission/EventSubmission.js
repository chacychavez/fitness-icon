import React, { useState } from 'react';

import EventSubmissionDetails from '../../components/EventSubmissionDetails';
import GettingStarted from '../../components/GettingStarted';
import ReviewSubmit from '../../components/ReviewSubmit';
import {
  EventSubmissionMainContainer,
  EventSubmissionContainer,
  EventSubmissionHeader,
  EventSubmissionTabs,
  EventSubmissionTab,
  EventSubmissionNavigations,
  NavigationButton,
} from './styled';

const EventSubmission = () => {
  const [page, setPage] = useState(1);
  const pages = ['Getting started', 'Event details', 'Review & submit'];

  const renderPage = () => {
    if (page === 1) {
      return <GettingStarted />;
    }
    if (page === 2) {
      return <EventSubmissionDetails />;
    }
    if (page === 3) {
      return <ReviewSubmit />;
    }
    return null;
  };
  return (
    <EventSubmissionMainContainer>
      <EventSubmissionContainer>
        <EventSubmissionHeader>Submit an Event</EventSubmissionHeader>
        <EventSubmissionTabs>
          {pages.map((_page, index) => (
            <EventSubmissionTab
              key={_page}
              onClick={() => {
                setPage(index + 1);
              }}
              active={page === index + 1}
            >
              <span>{index + 1}</span>
              <header>{_page}</header>
            </EventSubmissionTab>
          ))}
        </EventSubmissionTabs>
        {renderPage()}
        <EventSubmissionNavigations>
          {page > 1 && (
            <NavigationButton
              onClick={() => {
                setPage(page - 1);
              }}
            >
              Back
            </NavigationButton>
          )}
          {page < 3 && (
            <NavigationButton
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Next
            </NavigationButton>
          )}
          {page === 3 && <NavigationButton>Submit</NavigationButton>}
        </EventSubmissionNavigations>
      </EventSubmissionContainer>
    </EventSubmissionMainContainer>
  );
};

export default EventSubmission;
