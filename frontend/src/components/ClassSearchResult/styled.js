import styled from 'styled-components/macro';

export const ClassSearchResultContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 28px 0;
  border: none;
  border-bottom: 1px dashed #dce2e2;
  font-family: 'Exo';
  font-style: normal;
`;

export const ClassImg = styled.img`
  border-radius: 5px;
  margin-right: 26px;
`;

export const ClassInfo = styled.div``;

export const ClassNamePlace = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  span {
    color: #c4c4c4;
  }
`;

export const ClassSchedule = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;

  span {
    color: #c4c4c4;
  }
`;

export const ClassLocation = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  color: #8b969b;
`;

export const ClassPrice = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;
