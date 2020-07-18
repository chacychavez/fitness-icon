import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const EventCalendarContainer = styled.div`
  padding: 50px 200px;

  font-family: 'Exo', Arial, Helvetica, sans-serif;
  font-style: normal;
`;

export const EventsContainer = styled.div`
  margin: 40px 0;
`;

export const EventHeader = styled.header`
  text-align: left;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 16px;

  img {
    margin-right: 12px;
  }
`;

export const EventCalendarLocationDateContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`;

export const EventCalendarLocation = styled.span`
  padding: 4px 16px;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 40px;
  margin: 0 10px;
  font-weight: 600;
  font-size: 14px;
  color: #6f6f6f;
  margin-left: 10px;

  img {
    margin-left: 36px;
    vertical-align: middle;
  }
`;

export const EventCalendarDate = styled.span`
  padding: 4px 16px;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 40px;
  margin: 0 10px;
  font-weight: 600;
  font-size: 14px;
  color: #6f6f6f;
  margin-left: 10px;

  img {
    margin-left: 36px;
    vertical-align: middle;
  }
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

export const EventName = styled(Link)`
  display: block;
  font-weight: bold;
  text-align: left;
  margin-top: 14px;
  font-size: 18px;
  line-height: 24px;
  text-decoration-line: none;
  color: #000;
`;

export const EventDate = styled.div`
  text-align: left;
  margin-top: 10px;
  font-weight: 600;
  font-size: 16px;
  color: #6f6f6f;
`;

export const EventViewFullButton = styled.a`
  display: flex;
  background-color: #fd5b00;
  width: 200px;
  height: 50px;
  border-radius: 50px;
  margin: 75px auto 0 auto;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 600;
  color: #fff;
`;
