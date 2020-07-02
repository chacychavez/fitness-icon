import styled from 'styled-components/macro';

export const ClassMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;

  font-family: 'Exo', Arial, Helvetica, sans-serif;
  font-style: normal;
`;

export const ClassBanner = styled.div`
  margin-top: 64px;
  width: 100%;
  height: 384px;
  background: #c4c4c4;
`;

export const ClassAdContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 48px;
`;

export const ClassContainer = styled.div`
  width: 620px;
  margin-right: 200px;
`;

export const ClassHeader = styled.header`
  font-weight: 800;
  font-size: 36px;
`;

export const ClassScheduleLocationContainer = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 16px;
  margin: 30px 0;
`;

export const ClassSchedule = styled.div`
  margin-right: 50px;
`;

export const ClassLocation = styled.div`
  margin-right: 50px;
  text-decoration-line: underline;
`;

export const ClassOrganizerParticipantsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
  margin: 30px 0;
`;

export const ClassOrganizer = styled.div`
  font-weight: 600;
  font-size: 16px;

  span {
    text-decoration-line: underline;
  }
`;

export const ClassCoach = styled.div``;

export const ClassParticipants = styled.div``;

export const ClassOrganizerContact = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OrganizerContactNumber = styled.div``;

export const OrganizerInstagram = styled.div``;

export const OrganizerFacebook = styled.div``;

export const ClassArticle = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  margin: 30px 0;
`;

export const ClassOffers = styled.div`
  margin-top: 55px;
`;

export const ClassOffersHeader = styled.header`
  font-weight: bold;
  font-size: 28px;
`;

export const ClassOfferContainer = styled.div`
  background: #ffffff;
  border: 1px solid #dae1e4;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 22px;
  margin: 10px 0;
`;

export const ClassOffer = styled.div`
  font-weight: bold;
  font-size: 28px;
`;

export const ClassOfferDetails = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #6f6f6f;
  margin-top: 8px;
`;

export const ClassPrice = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: #27aeae;
  margin-top: 16px;
`;

export const ClassBooking = styled.div`
  margin-top: 85px;
  padding: 28px 36px 52px 36px;
  background: #fdfefe;
  border: 1px solid #dde8e8;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const ClassBookingHeader = styled.div`
  font-weight: bold;
  font-size: 28px;
`;

export const ClassBookingDetails = styled.div`
  width: 452px;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  margin-top: 10px;
`;

export const ClassBookingButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 51px;
  background: #fd5b00;
  border-radius: 50px;
  font-weight: 600;
  font-size: 18px;
  color: #ffffff;
  margin-top: 20px;
`;

export const AdContainer = styled.div``;

export const AdBanner = styled.div`
  width: 300px;
  height: 600px;
  background: #c4c4c4;
`;
