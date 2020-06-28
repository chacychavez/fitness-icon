import styled from 'styled-components/macro';

export const EventDetailsContainer = styled.div`
  margin-top: 60px;
`;

export const EventDetailsHeader = styled.header`
  font-family: 'Exo';
  font-weight: bold;
  font-size: 28px;
`;

export const EventDetail = styled.div`
  font-family: 'Exo';
  font-weight: 600;
  font-size: 20px;
  padding: 18px;
  border-bottom: 1px solid #c4c4c4;

  &:last-child {
    border-bottom: none;
  }
`;

export const EventDetailHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const EventDetailContent = styled.div`
  font-family: 'Exo';
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  padding: 38px 0 0 30px;
`;

export const EventDetailContentHeader = styled.header`
  font-family: 'Exo';
  font-weight: bold;
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 5px;
`;
