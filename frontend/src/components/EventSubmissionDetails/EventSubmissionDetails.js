import React, { useState, useRef } from 'react';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import addField from '../../assets/images/add-field.svg';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import CustomGoogleMap from '../CustomGoogleMap';
import RichTextEditor from '../RichTextEditor';
import {
  EventDetailsContainer,
  EventDetailsDescription,
  EventDetailsHeader,
  InputGroup,
  InputLabelSpan,
  Container,
  Input,
  InputError,
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

const InputContainer = ({
  name,
  label,
  size,
  required,
  onFocus,
  register,
  error,
  errorMessage,
  readOnly,
  type = 'text',
}) => (
  <Container>
    <label htmlFor={name}>
      {label}
      {required && <span>*</span>}
    </label>
    <Input
      size={size}
      name={name}
      type="text"
      id={name}
      onFocus={onFocus}
      ref={register}
      error={error}
      readOnly={readOnly}
      type={type}
      required={required}
    />
    {error && <InputError>{errorMessage}</InputError>}
  </Container>
);

InputContainer.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  onFocus: PropTypes.func,
  readOnly: PropTypes.bool,
};

InputContainer.defaultProps = {
  id: '',
  label: '',
  size: 'large',
  onFocus: null,
  readOnly: false,
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

const EventSubmissionDetails = ({ google }) => {
  const [categories, setCategories] = useState([category]);
  const [inclusions, setInclusions] = useState([inclusion]);
  const [additionalInfos, setAdditionalInfos] = useState([additionalInfo]);
  const [faqs, setFaqs] = useState([faq]);
  const [visibleMap, setVisibleMap] = useState(false);
  const ref = useRef();

  const { register, handleSubmit, errors } = useForm(); // initialize the hook

  const onSubmit = (data) => {
    console.log(data);
  };

  useOnClickOutside(ref, () => {
    if (!visibleMap) setVisibleMap(false);
  });

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

  const onConfirm = (state) => {
    console.log(state);
    setVisibleMap(false);
  };

  const onCancel = () => {
    setVisibleMap(false);
  };

  const onVenueFocus = () => {
    setVisibleMap(true);
  };

  return (
    <EventDetailsContainer>
      <EventDetailsDescription>
        Feature your running event in all its glory by providing all the little
        details. Make sure to fill out fields that are marked as
        <small>
          {' '}
          Required<span>*</span>
        </small>
        . If you are not sure what to put, click on this
        <small> sample photo</small> to view an example of an event with
        complete info.
      </EventDetailsDescription>
      <GeneralDetailsContainer>
        <EventDetailsHeader>General details</EventDetailsHeader>
        <InputGroup>
          <InputContainer
            name="eventName"
            label="Event name"
            size="large"
            required
            register={register({ required: true })}
            error={errors.eventName}
            errorMessage="Event name is required."
          />
        </InputGroup>
        <InputGroup>
          {
            // Use Controller for controlled input like this
          }
          <InputContainer
            name="venue"
            label="Venue"
            id="venue"
            size="large"
            onFocus={onVenueFocus}
            required
            register={register({ required: true })}
            error={errors.venue}
            errorMessage="Venue is required."
            readOnly
          />
          <InputContainer
            name="eventDates"
            label="Dates"
            id="dates"
            size="medium"
            required
            register={register({ required: true })}
            error={errors.eventDates}
            errorMessage="Dates is required."
          />
        </InputGroup>
        {visibleMap && (
          <CustomGoogleMap
            google={google}
            center={{ lat: 14.5813, lng: 120.9762 }}
            height={300}
            width={550}
            zoom={15}
            onConfirm={onConfirm}
            onCancel={onCancel}
          />
        )}
        <InputGroup>
          <InputContainer
            name="eventWdisabledebsite"
            label="Event website URL"
            id="event-website"
            size="large"
            register={register}
            error={errors.eventWebsite}
          />
          <InputContainer
            name="eventNumOfParticipants"
            label="Target # of participants"
            id="participants"
            size="medium"
            required
            register={register({ required: true })}
            error={errors.eventNumOfParticipants}
            errorMessage="Target # of participants is required."
          />
        </InputGroup>
        <Container>
          <InputLabelSpan>
            Description<span>*</span>
          </InputLabelSpan>
          <RichTextEditor placeholder="Provide a short description for your event..." />
        </Container>
      </GeneralDetailsContainer>
      <button
        onClick={() => {
          console.log('DONE');
          // Use this to have submitted flag for input border color
          handleSubmit(onSubmit)();
        }}
      >
        Submit
      </button>
      <Separator />
      <RegistrationDetailsContainer>
        <EventDetailsHeader>Registration</EventDetailsHeader>
        <Container>
          <InputLabelSpan>Registration details*</InputLabelSpan>
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
          <InputLabelSpan>Banner image*</InputLabelSpan>
          <div>
            This is the hero image that goes on top of your event page.
            Dimensions should be <small>2000 x 4000</small> and maximum file
            size of <small>2MB</small>
          </div>
          <ChooseFileButton>Choose file</ChooseFileButton>
        </Container>
        <Container>
          <InputLabelSpan>Thumbnail image*</InputLabelSpan>
          <div>
            This will be your image for lists and search results. Dimensions
            should be <small>800 x 400</small> with a maximum file size of{' '}
            <small>1MB</small>
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
          categories.map((_, index) => (
            <div key={index}>
              <InputGroup>
                <InputContainer
                  name="categoryName"
                  label="Category name"
                  id="category-name"
                  size="large"
                  required
                  register={register({ required: true })}
                  error={errors.categoryName}
                  errorMessage="Category name is required"
                />
                <InputContainer
                  name="regPrice"
                  label="Reg. price"
                  id="reg-price"
                  size="small"
                  required
                  register={register({ required: true })}
                  error={errors.regPrice}
                  errorMessage="Registration price is required"
                  type="number"
                />
              </InputGroup>
              <InputGroup>
                <InputContainer
                  name="assemblyTime"
                  label="Assembly time"
                  id="assembly-time"
                  size="medium"
                  required
                  register={register({ required: true })}
                  error={errors.assemblyTime}
                  errorMessage="Assembly time is required"
                  type="time"
                />
                <InputContainer
                  name="gunStart"
                  label="Gun Start"
                  id="gun-start"
                  size="medium"
                  required
                  register={register({ required: true })}
                  error={errors.gunStart}
                  errorMessage="Gun start is required"
                  type="time"
                />
                <InputContainer
                  name="cutOffTime"
                  label="Cut-Off time"
                  id="cut-off-time"
                  size="medium"
                  required
                  register={register({ required: true })}
                  error={errors.cutOffTime}
                  errorMessage="Cut-Off time is required"
                  type="time"
                />
              </InputGroup>
              <Container>
                <InputLabelSpan>Route map</InputLabelSpan>
                <div>
                  Upload a route map for this category. Maximum file size:{' '}
                  <small>1 MB</small>
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
          inclusions.map((_, index) => (
            <div key={index}>
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
            name="eventOrganizerName"
            label="Name/Company name"
            id="name-company"
            size="large"
            required
            register={register({ required: true })}
            error={errors.eventOrganizerName}
            errorMessage="Name/Company name is required."
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
          additionalInfos.map((_, index) => (
            <div key={index}>
              <InputGroup>
                <InputContainer
                  label="Section heading"
                  id="section-heading"
                  size="large"
                />
              </InputGroup>
              <Container>
                <InputLabelSpan>Section text</InputLabelSpan>
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
          faqs.map((_, index) => (
            <div key={index}>
              <InputGroup>
                <InputContainer label="Question" id="question" size="large" />
              </InputGroup>
              <Container>
                <InputLabelSpan>Answer</InputLabelSpan>
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

EventSubmissionDetails.propTypes = {
  google: PropTypes.shape({}),
};

EventSubmissionDetails.defaultProps = {
  google: null,
};

export default EventSubmissionDetails;
