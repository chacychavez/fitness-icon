import React from 'react';

import {
  SubscriptionContainer,
  SubscriptionForm,
  SubscriptionTitle,
  SubscriptionInput,
  SubscriptionButton,
} from './styled';

const HomeSubscriptionForm = () => (
  <SubscriptionContainer>
    <SubscriptionForm>
      <SubscriptionTitle>Subscribe to our newsletter</SubscriptionTitle>
      <SubscriptionInput placeholder="Name" />
      <SubscriptionInput placeholder="Email" />
      <SubscriptionButton> Yes, please!</SubscriptionButton>
    </SubscriptionForm>
  </SubscriptionContainer>
);

export default HomeSubscriptionForm;
