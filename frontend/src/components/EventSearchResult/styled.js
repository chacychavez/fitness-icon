import styled from 'styled-components/macro';

export const EventSearchResultContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 28px 0;
  border: none;
  border-bottom: 1px dashed #dce2e2;

  font-family: 'Exo';
  font-style: normal;
`;

export const EventDate = styled.div`
  margin-right: 26px;
`;

export const EventMonth = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
`;

export const EventDay = styled.div`
  font-weight: bold;
  font-size: 32px;
  line-height: 43px;
  text-align: center;
`;

export const EventImg = styled.img`
  border-radius: 5px;
  margin-right: 26px;
`;

export const EventInfo = styled.div``;

export const EventName = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

export const EventLevels = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

export const EventLocation = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  color: #8b969b;
`;

export const EventPrice = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;
