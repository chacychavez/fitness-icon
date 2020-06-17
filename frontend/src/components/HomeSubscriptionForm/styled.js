import styled from 'styled-components/macro';

export const SubscriptionContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubscriptionForm = styled.div`
  display: grid;
`;

export const SubscriptionTitle = styled.header`
  font-size: 50px;
  font-weight: bold;
`;
export const SubscriptionInput = styled.input`
  border: none;
  border-bottom: 2px solid;
  padding: 10px;
  font-size: 20px;
  display: block;
  margin: 10px;

  &:focus {
    outline: none;
  }
`;
export const SubscriptionButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  width: 250px;
  cursor: pointer;
  background-color: orange;
  color: #fff;
  border-radius: 52px;
  font-weight: bold;
  margin: 0 auto;
`;
