import styled from 'styled-components/macro';

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
