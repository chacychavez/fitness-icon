import React, { useState } from 'react';

import radioActive from '../../assets/images/radio-active.svg';
import radio from '../../assets/images/radio.svg';
import {
  GettingStartedContainer,
  GettingStartedDescription,
  GettingStartedQuestions,
  GettingStartedQuestion,
  QuestionHeader,
  Options,
  Option,
  OptionHeader,
  OptionDescription,
} from './styled';

const GettingStarted = () => {
  const [eventType, setEventType] = useState('sports-event');

  const eventTypes = [
    {
      id: 'sports-event',
      name: 'Sports event',
      description:
        'It is an open competition that any interested athlete can join like races, tournaments, throwdowns, etc.',
    },
    {
      id: 'class',
      name: 'Class',
      description:
        'It is an enrichment activity in which an athlete can learn, practice, or train in a specific discipline. Ex: yoga, spinning, gym classes.',
    },
    {
      id: 'showcase',
      name: 'Showcase',
      description:
        'It is a spectacle featuring preselected participants. Registration is for viewing rather than joining. Ex: UAAP, NCAA, Concerts',
    },
  ];

  return (
    <GettingStartedContainer>
      <GettingStartedDescription>
        Submit your events to Takbo.ph using this online form. Please allow 1-2
        days before your events will appear at the website. Be sure to complete
        all the information. We may not include events with missing information.
      </GettingStartedDescription>
      <GettingStartedQuestions>
        <GettingStartedQuestion>
          <QuestionHeader>1. How would you classify your event?</QuestionHeader>
          <Options>
            {eventTypes.map((type) => (
              <Option
                key={type.id}
                onClick={() => {
                  setEventType(type.id);
                }}
              >
                <OptionHeader>
                  <img
                    src={eventType === type.id ? radioActive : radio}
                    alt="radio"
                  />
                  {type.name}
                </OptionHeader>
                <OptionDescription>{type.description}</OptionDescription>
              </Option>
            ))}
          </Options>
        </GettingStartedQuestion>
        <GettingStartedQuestion>
          <QuestionHeader>
            2. What sport or discpline does your event feature?
          </QuestionHeader>
          <select name="sport-discipline" id="sport-discipline">
            <option value="yoga">Yoga</option>
            <option value="boxing">Boxing</option>
            <option value="running">Running</option>
            <option value="climbing">Climbing</option>
          </select>
        </GettingStartedQuestion>
        <GettingStartedQuestion />
      </GettingStartedQuestions>
    </GettingStartedContainer>
  );
};

export default GettingStarted;
