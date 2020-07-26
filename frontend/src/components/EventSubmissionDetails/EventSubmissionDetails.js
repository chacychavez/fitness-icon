import React, { useState } from 'react';

import PropTypes from 'prop-types';

import addField from '../../assets/images/add-field.svg';
import RichTextEditor from '../RichTextEditor';
import {
  EventDetailsContainer,
  EventDetailsDescription,
  EventDetailsHeader,
  InputGroup,
  Container,
  ChooseFileButton,
  Separator,
  GeneralDetailsContainer,
  RegistrationDetailsContainer,
  DisplayImagesContainer,
  CategoriesContainer,
  InclusionsContainer,
  EventOrganizerContainer,
  AdditionalInformationContainer,
  FAQContainer,
  AddItem,
} from './styled';

const InputContainer = ({ label, id, size }) => (
  <Container size={size}>
    <label htmlFor={id}>{label}</label>
    <input type="text" id={id} />
  </Container>
);

InputContainer.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
};

InputContainer.defaultProps = {
  id: '',
  label: '',
  size: 'large',
};

const category = {
  name: '',
  regPrice: '',
  assemblyTime: '',
  gunStart: '',
  cutOffTime: '',
  routeMap: '',
};

const inclusion = {
  name: '',
  url: '',
};

const additionalInfo = {
  heading: '',
  content: '',
};

const faq = {
  question: '',
  answer: '',
};

const EventSubmissionDetails = () => {
  const [categories, setCategories] = useState([category]);
  const [inclusions, setInclusions] = useState([inclusion]);
  const [additionalInfos, setAdditionalInfos] = useState([additionalInfo]);
  const [faqs, setFaqs] = useState([faq]);

  const addCategory = () => {
    setCategories((_categories) => [..._categories, category]);
  };

  const addInclusion = () => {
    setInclusions((_inclusions) => [..._inclusions, inclusion]);
  };

  const addAdditionalInfo = () => {
    setAdditionalInfos((_additionalInfos) => [
      ..._additionalInfos,
      additionalInfo,
    ]);
  };

  const addFaq = () => {
    setFaqs((_faqs) => [..._faqs, faq]);
  };

  return (
    <EventDetailsContainer>
      <EventDetailsDescription>
        Feature your running event in all its glory by providing all the little
        details. Make sure to fill out fields that are marked as
        <span>
          {' '}
          Required<span>*</span>
        </span>
        . If you are not sure what to put, click on this
        <span> sample photo</span> to view an example of an event with complete
        info.
      </EventDetailsDescription>
      <GeneralDetailsContainer>
        <EventDetailsHeader>General details</EventDetailsHeader>
        <InputGroup>
          <InputContainer label="Event name" id="event-name" size="large" />
        </InputGroup>
        <InputGroup>
          <InputContainer label="Venue" id="venue" size="large" />
          <InputContainer label="Dates" id="dates" size="medium" />
        </InputGroup>
        <InputGroup>
          <InputContainer label="Event website URL" id="website" size="large" />
          <InputContainer
            label="Target # of participants*"
            id="participants"
            size="medium"
          />
        </InputGroup>
        <Container>
          <span>Description*</span>
          <RichTextEditor placeholder="Provide a short description for your event..." />
        </Container>
      </GeneralDetailsContainer>
      <Separator />
      <RegistrationDetailsContainer>
        <EventDetailsHeader>Registration</EventDetailsHeader>
        <Container>
          <span>Registration details*</span>
          <RichTextEditor placeholder="Describe when, where, and how to register..." />
        </Container>
        <InputGroup>
          <InputContainer
            label="Online registration website URL"
            id="online-registration-url"
            size="large"
          />
        </InputGroup>
      </RegistrationDetailsContainer>
      <Separator />
      <DisplayImagesContainer>
        <EventDetailsHeader>Display images</EventDetailsHeader>
        <Container>
          <span>Banner image*</span>
          <div>
            This is the hero image that goes on top of your event page.
            Dimensions should be <span>2000 x 4000</span> and maximum file size
            of <span>2MB</span>
          </div>
          <ChooseFileButton>Choose file</ChooseFileButton>
        </Container>
        <Container>
          <span>Thumbnail image*</span>
          <div>
            This will be your image for lists and search results. Dimensions
            should be <span>800 x 400</span> with a maximum file size of{' '}
            <span>1MB</span>
          </div>
          <ChooseFileButton>Choose file</ChooseFileButton>
        </Container>
      </DisplayImagesContainer>
      <Separator />
      <CategoriesContainer>
        <EventDetailsHeader>Categories</EventDetailsHeader>
        <EventDetailsDescription>
          Highlight the offerings of your running event.
        </EventDetailsDescription>
        {
          // TODO: Remove comment below then fix eslint error.
          // eslint-disable-next-line
          categories.map((_) => (
            <div>
              <InputGroup>
                <InputContainer
                  label="Category name"
                  id="category-name"
                  size="large"
                />
                <InputContainer
                  label="Reg. price"
                  id="reg-price"
                  size="small"
                />
              </InputGroup>
              <InputGroup>
                <InputContainer
                  label="Assembly time*"
                  id="assembly-time"
                  size="medium"
                />
                <InputContainer
                  label="Gun Start*"
                  id="gun-start"
                  size="medium"
                />
                <InputContainer
                  label="Cut-Off time*"
                  id="cut-off-time"
                  size="medium"
                />
              </InputGroup>
              <Container>
                <span>Route map</span>
                <div>
                  Upload a route map for this category. Maximum file size:{' '}
                  <span>1 MB</span>
                </div>
                <ChooseFileButton>Choose file</ChooseFileButton>
              </Container>
            </div>
          ))
        }
        <AddItem onClick={addCategory}>
          <img src={addField} alt="Add field" />
          <span>Add a category</span>
        </AddItem>
      </CategoriesContainer>
      <Separator />
      <InclusionsContainer>
        <EventDetailsHeader>Inclusions</EventDetailsHeader>
        <EventDetailsDescription>
          Entice participants by featuring photos of items they’ll receive by
          joining.
        </EventDetailsDescription>
        {
          // TODO: Remove comment below then fix eslint error.
          // eslint-disable-next-line
          inclusions.map((_) => (
            <div>
              <InputContainer label="Item name" id="item-name" size="large" />
              <Container>
                <div>
                  Upload a route map for this category. Maximum file size:{' '}
                  <span>1 MB</span>
                </div>
                <ChooseFileButton>Choose file</ChooseFileButton>
              </Container>
            </div>
          ))
        }
        <AddItem onClick={addInclusion}>
          <img src={addField} alt="Add field" />
          <span>Add an item</span>
        </AddItem>
      </InclusionsContainer>
      <Separator />
      <EventOrganizerContainer>
        <EventDetailsHeader>Event organizer</EventDetailsHeader>
        <InputGroup>
          <InputContainer
            label="Name/Company name*"
            id="name-company"
            size="large"
          />
        </InputGroup>
        <InputGroup>
          <InputContainer
            label="Organizer’s website URL"
            id="website"
            size="large"
          />
        </InputGroup>
      </EventOrganizerContainer>
      <Separator />
      <AdditionalInformationContainer>
        <EventDetailsHeader>Additional information</EventDetailsHeader>
        <EventDetailsDescription>
          Use this section to discusss topics like compeition rules, flow, etc.
        </EventDetailsDescription>
        {
          // TODO: Remove comment below then fix eslint error.
          // eslint-disable-next-line
          additionalInfos.map((_) => (
            <div>
              <InputGroup>
                <InputContainer
                  label="Section heading"
                  id="section-heading"
                  size="large"
                />
              </InputGroup>
              <Container>
                <span>Section text</span>
                <RichTextEditor placeholder="Provide a description for the topic..." />
              </Container>
            </div>
          ))
        }
        <AddItem onClick={addAdditionalInfo}>
          <img src={addField} alt="Add field" />
          <span>Add a section</span>
        </AddItem>
      </AdditionalInformationContainer>
      <Separator />
      <FAQContainer>
        <EventDetailsHeader>Frequently Asked Questions</EventDetailsHeader>
        <EventDetailsDescription>
          Use this section to address recurring questions in running events.
        </EventDetailsDescription>
        {
          // TODO: Remove comment below then fix eslint error.
          // eslint-disable-next-line
          faqs.map((_) => (
            <div>
              <InputGroup>
                <InputContainer label="Question" id="question" size="large" />
              </InputGroup>
              <Container>
                <span>Answer</span>
                <RichTextEditor placeholder="Provide a short description for your event..." />
              </Container>
            </div>
          ))
        }
        <AddItem onClick={addFaq}>
          <img src={addField} alt="Add field" />
          <span>Add a question</span>
        </AddItem>
      </FAQContainer>
      <Separator />
    </EventDetailsContainer>
  );
};

export default EventSubmissionDetails;
