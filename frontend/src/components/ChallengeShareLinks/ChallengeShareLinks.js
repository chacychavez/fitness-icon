import React from 'react';

import emailLogo from '../../assets/images/email-square.svg';
import fbLogo from '../../assets/images/fb-square.svg';
import twitterLogo from '../../assets/images/twitter-square.svg';
import {
  ChallengeLinksContainer,
  ChallengeLinkHeader,
  ChallengeLinkDetails,
  ChallengeLinks,
  ChallengeLink,
} from './styled';

const ChallengeShareLinks = () => (
  <ChallengeLinksContainer>
    <ChallengeLinkHeader>Challlenge your friends!</ChallengeLinkHeader>
    <ChallengeLinkDetails>
      Share this event on social media or through email.
    </ChallengeLinkDetails>
    <ChallengeLinks>
      <ChallengeLink type="fb" src={fbLogo}>
        Facebook
      </ChallengeLink>
      <ChallengeLink type="twitter" src={twitterLogo}>
        Twitter
      </ChallengeLink>
      <ChallengeLink type="email" src={emailLogo}>
        Email
      </ChallengeLink>
    </ChallengeLinks>
  </ChallengeLinksContainer>
);

export default ChallengeShareLinks;
