import React from 'react';
import {
  SubscriptionContainer,
  SubscriptionForm,
  SubscriptionTitle,
  SubscriptionInput,
  SubscriptionButton,
} from './styled';

export const HomeSubscriptionForm = () => {
  return (
    <SubscriptionContainer>
      <SubscriptionForm>
        <SubscriptionTitle>Subscribe to our newsletter</SubscriptionTitle>
        <SubscriptionInput placeholder='Name' />
        <SubscriptionInput placeholder='Email' />
        <SubscriptionButton> Yes, please!</SubscriptionButton>
      </SubscriptionForm>
    </SubscriptionContainer>
  );
};
