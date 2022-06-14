import styled from 'styled-components/macro';

export const EventDetailsContainer = styled.div``;

export const EventDetailsDescription = styled.article`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #6d7577;
  margin-top: 10px;

  small {
    font-size: 14px;
    color: #000000;

    span {
      color: #ef3535;
    }
  }
`;

export const EventDetailsHeader = styled.header`
  font-weight: bold;
  font-size: 28px;
  margin-top: 24px;
`;

export const InputGroup = styled.div`
  display: flex;

  input[type='time']::-webkit-clear-button {
    display: none;
  }

  input[type='time']::-webkit-calendar-picker-indicator {
    background: none;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

const inputSizes = {
  small: '80px',
  medium: '160px',
  large: '270px',
};

export const InputLabelSpan = styled.span`
  font-weight: 600;
  font-size: 16px;

  span {
    color: red;
  }
`;

export const Container = styled.div`
  display: inline-block;
  margin: 12px 24px 12px 0;

  label {
    font-weight: 600;
    font-size: 16px;

    span {
      color: red;
    }
  }

  textarea {
    margin-top: 8px;
    font-family: 'Source Sans Pro';
    font-weight: normal;
    font-size: 16px;
    padding: 10px 8px;
  }

  div {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    margin-top: 10px;
    color: #6d7577;

    small {
      font-weight: 500;
      font-size: 14px;
      color: #000000;
    }
  }
`;

export const Input = styled.input`
  margin-top: 8px;
  display: block;
  width: ${(props) => inputSizes[props.size]};
  font-family: 'Source Sans Pro';
  font-weight: normal;
  font-size: 16px;
  padding: 6px 15px;
  /* border-color: ${(props) => (props.error ? 'red' : 'green')}; */
  border: 1px solid #a7aeaf;
  box-sizing: border-box;
  box-shadow: inset 1px 3px 4px rgba(0, 0, 0, 0.02);
  border-radius: 3px;

  &:focus {
    outline: none;
  }
`;

export const InputError = styled.span`
  font-size: 14px;
  color: red;
`;

export const ChooseFileButton = styled.a`
  margin-top: 14px;
  display: flex;
  width: 108px;
  height: 36px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  background: #000;
  color: #ffffff;
  cursor: pointer;
`;

export const Separator = styled.hr`
  border: 1px dashed #dce2e2;
  margin: 60px 0 44px 0;
`;

export const GeneralDetailsContainer = styled.div``;

export const RegistrationDetailsContainer = styled.div``;

export const DisplayImagesContainer = styled.div``;

export const CategoriesContainer = styled.div``;

export const InclusionsContainer = styled.div``;

export const EventOrganizerContainer = styled.div``;

export const AdditionalInformationContainer = styled.div``;

export const FAQContainer = styled.div``;

export const AddItem = styled.div`
  display: flex;
  margin-top: 26px;
  cursor: pointer;

  span {
    font-weight: bold;
    font-size: 16px;
    text-decoration-line: underline;
  }
`;
