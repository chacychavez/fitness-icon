import styled from 'styled-components/macro';

export const EventMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;

  font-family: 'Exo', Arial, Helvetica, sans-serif;
  font-style: normal;
`;

export const EventBanner = styled.div`
  margin-top: 64px;
  width: 100%;
  height: 384px;
  background: #c4c4c4;
`;

export const EventAdContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 48px;
`;

export const EventContainer = styled.div`
  width: 620px;
  margin-right: 200px;
`;

export const EventHeader = styled.header`
  font-weight: 800;
  font-size: 36px;
`;

export const EventDateLocationWebsiteContainer = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 16px;
  margin: 30px 0;
`;

export const EventDate = styled.div`
  margin-right: 50px;
`;

export const EventLocation = styled.div`
  margin-right: 50px;
  text-decoration-line: underline;
`;

export const EventWebsite = styled.div`
  text-decoration-line: underline;
`;

export const EventWeatherParticipantsContainer = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 16px;
  margin: 30px 0;
`;

export const EventWeather = styled.div`
  text-decoration-line: underline;
  margin-right: 50px;
`;

export const EventParticipants = styled.div``;

export const EventOrganizer = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin: 30px 0;

  span {
    text-decoration-line: underline;
  }
`;

export const EventArticle = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  margin: 30px 0;
`;

export const EventCategories = styled.div`
  margin-top: 55px;
`;

export const EventCategoryHeader = styled.header`
  font-weight: bold;
  font-size: 28px;
`;

export const EventCategoryContainer = styled.div`
  background: #ffffff;
  border: 1px solid #dae1e4;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 22px;
  margin: 10px 0;
`;

export const EventCategoryRouteContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const EventCategory = styled.div`
  font-weight: bold;
  font-size: 28px;
`;

export const EventRoute = styled.div`
  text-decoration-line: underline;
`;

export const EventSchedules = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const EventSchedule = styled.div`
  display: grid;
  margin-right: 40px;
`;

export const Time = styled.span`
  font-weight: 600;
  font-size: 18px;
`;

export const Description = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #6d7577;
`;

export const EventPrice = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: #27aeae;
  margin-top: 16px;
`;

export const EventInclusionsContainer = styled.div`
  margin-top: 58px;
`;

export const EventInclusionHeader = styled.header`
  font-weight: bold;
  font-size: 28px;
`;

export const EventInclusions = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 32px;
  margin-top: 22px;
`;

export const EventInclusion = styled.div`
  text-align: center;
`;

export const EventInclusionImg = styled.div`
  width: 192px;
  height: 192px;
  background: #c4c4c4;
`;

export const EventInclusionInfo = styled.div`
  margin-top: 14px;
`;

export const EventInclusionName = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const EventInclusionCondition = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

export const EventRegistration = styled.div`
  margin-top: 85px;
  padding: 28px 36px 52px 36px;
  background: #fdfefe;
  border: 1px solid #dde8e8;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const EventRegistrationHeader = styled.header`
  font-weight: bold;
  font-size: 28px;
`;

export const EventRegistrationPeriod = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
`;

export const RegistrationPeriodHeader = styled.header`
  margin-top: 20px;
  font-weight: bold;
`;

export const RegistrationEarlyBird = styled.div``;

export const RegistrationRegular = styled.div``;

export const RegistrationOnsite = styled.div``;

export const EventRegistrationSites = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
`;

export const RegistrationSitesHeader = styled.header`
  font-weight: bold;
  margin-top: 30px;
`;

export const RegistrationSite = styled.span``;

export const SiteContainer = styled.div``;

export const Site = styled.div`
  font-weight: bold;
  margin-top: 30px;
`;

export const SiteBranches = styled.ul`
  margin: 0;
  padding: 0 20px;
`;

export const SiteBranch = styled.li``;

export const EventOnlineRegistration = styled.div`
  margin-top: 36px;
`;

export const EventOnlineRegistrationHeader = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

export const EventOnlineRegistrationDetails = styled.div`
  width: 271px;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #6f6f6f;
  margin-top: 10px;
`;

export const EventOnlineRegistrationButton = styled.a`
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
