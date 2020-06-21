import styled from 'styled-components/macro';

export const SubscriptionContainer = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
`;

export const SubscriptionForm = styled.div`
  display: grid;
`;

export const SubscriptionTitle = styled.header`
  font-family: 'Exo';
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
`;

export const SubscriptionInput = styled.input`
  border: none;
  width: 566px;
  border-bottom: 2px solid;
  padding: 10px 0;
  font-family: 'Exo';
  font-weight: bold;
  font-size: 20px;
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
  margin: 30px auto;
`;
