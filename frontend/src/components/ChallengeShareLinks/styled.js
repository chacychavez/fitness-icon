import styled from 'styled-components/macro';

export const ChallengeLinksContainer = styled.div`
  margin-top: 46px;
`;

export const ChallengeLinkHeader = styled.div`
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 8px;
`;

export const ChallengeLinkDetails = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 12px;
`;

export const ChallengeLinks = styled.div`
  display: flex;
`;

const bgColors = {
  fb: '#1877F2',
  twitter: '#1DA1F2',
  email: '#EF3535',
};

export const ChallengeLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 201px;
  height: 52px;
  background-color: ${(props) => bgColors[props.type]};
  background-image: ${(props) => `url(${props.src})`};
  background-repeat: no-repeat;
  background-size: 32px;
  background-position: 6px center;
  border-radius: 3px;
  margin-right: 12px;
  padding: 0 4px;

  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
`;
