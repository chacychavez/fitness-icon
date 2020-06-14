import styled from 'styled-components/macro';

export const HomeContainer = styled.div`
  padding: 64px 0;
  text-align: center;
`;

export const HomeHeader = styled.header`
  font-size: 48px;
  margin: 24px;
  font-weight: bold;
  color: #000;
`;

export const HomeSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeSearchInput = styled.input`
  height: 48px;
  width: 500px;
  padding: 0 16px;
  border-radius: 48px 0 0 48px;
  border-color: #000;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

export const HomeSearchButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  width: 80px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  border-radius: 0 48px 48px 0;
`;

export const HomeBanner = styled.img`
  margin-top: 64px;
`;

export const EventCalendarContainer = styled.div`
  padding: 50px 175px;
`;

export const EventsContainer = styled.div`
  margin: 40px 0;
`;

export const EventHeader = styled.header`
  text-align: left;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const EventItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const EventItem = styled.div`
  width: 225px;
`;

export const EventImage = styled.img`
  border-radius: 12px;
`;

export const EventName = styled.div`
  font-weight: bold;
  text-align: left;
  margin-top: 10px;
  font-size: 18px;
`;

export const EventDate = styled.div`
  text-align: left;
  margin-top: 10px;
  font-size: 18px;
`;

export const EventViewFullButton = styled.a`
  display: flex;
  background-color: #000;
  width: 225px;
  height: 50px;
  border-radius: 50px;
  color: #fff;
  font-weight: bold;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const SportsNewsContainer = styled.div``;

export const SportsNewsBannerContainer = styled.div`
  position: relative;
`;

export const SportsNewsBannerImage = styled.img``;

export const SportsNewsBannerDescriptionContainer = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.75);
  width: 500px;
  padding: 50px;
  left: 10%;
  bottom: 15%;
  color: #fff;
  text-align: left;

  header {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 14px;
  }
`;
