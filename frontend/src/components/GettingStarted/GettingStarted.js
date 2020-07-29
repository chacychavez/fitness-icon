import React, { useRef, useState } from 'react';

import PropTypes from 'prop-types';

import dropdownIcon from '../../assets/images/dropdown.svg';
import radioActive from '../../assets/images/radio-active.svg';
import radio from '../../assets/images/radio.svg';
import useOnClickOutside from '../../hooks/useOnClickOutside';
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
  DropdownContainer,
  DropdownValue,
  DropdownOptions,
  DropdownOption,
} from './styled';

const sportsDiscipline = [
  { id: 'yoga', text: 'Yoga' },
  { id: 'basketball', text: 'Basketball' },
];

const GettingStarted = () => {
  const [eventType, setEventType] = useState('sports-event');
  const [sportDiscipline, setSportDiscipline] = useState(sportsDiscipline[0]);

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
          <Dropdown
            options={sportsDiscipline}
            value={sportDiscipline}
            onSelect={setSportDiscipline}
          />
        </GettingStartedQuestion>
        <GettingStartedQuestion />
      </GettingStartedQuestions>
    </GettingStartedContainer>
  );
};

const Dropdown = ({ options, onSelect, value }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const toggle = (option) => {
    onSelect(option);
    setOpen(false);
  };

  useOnClickOutside(dropdownRef, () => {
    setOpen(false);
  });

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownValue
        onClick={() => {
          setOpen(!open);
        }}
      >
        {value.text}
        <img src={dropdownIcon} width={20} height={20} alt="Dropdown" />
      </DropdownValue>
      {open && (
        <DropdownOptions>
          {options.map((option) => (
            <DropdownOption
              onClick={() => {
                toggle(option);
              }}
              key={option.id}
            >
              {option.text}
            </DropdownOption>
          ))}
        </DropdownOptions>
      )}
    </DropdownContainer>
  );
};

Dropdown.propTypes = {
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  value: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default GettingStarted;
