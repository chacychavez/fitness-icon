import styled from 'styled-components/macro';

export const SearchResultsMainContainer = styled.div`
  display: flex;
  padding: 0 216px;
  flex-direction: column;
`;

export const SearchResultsNavbar = styled.div`
  margin-top: 114px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SearchTextHeader = styled.header`
  font-family: 'Exo';
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
`;

export const SearchTabs = styled.ul`
  margin: 0;
`;

export const SearchTab = styled.li`
  display: inline-block;
  font-family: 'Exo';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  margin-left: 32px;
  cursor: pointer;

  text-decoration-line: ${(props) => (props.active ? 'underline' : 'none')};
  color: ${(props) => (props.active ? '#1da1f2' : '#000')};
`;

export const SearchResultsFilterSort = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 16px 24px;

  border: 1px solid #dce2e2;
  box-sizing: border-box;
  border-radius: 3px;
`;

export const SearchResultsFilter = styled.div``;

export const SearchFilterInput = styled.input`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  border: 1px solid #a7aeaf;
  box-sizing: border-box;
  box-shadow: inset 1px 3px 4px rgba(0, 0, 0, 0.02);
  border-radius: 53px;
  padding: 4px 32px 4px 16px;
  margin-right: 16px;
  width: 214px;
  background-image: ${(props) => `url(${props.icon})`};
  background-repeat: no-repeat;
  background-size: 16px;
  background-position-y: center;
  background-position-x: 184px;

  &:focus {
    outline: none;
  }
`;

export const SearchFilterDateContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const SearchFilterDate = styled.span`
  display: flex;
  align-items: center;
  padding: 4px 16px;
  border: 1px solid #a7aeaf;
  box-sizing: border-box;
  box-shadow: inset 1px 3px 4px rgba(0, 0, 0, 0.02);
  border-radius: 20px;
  margin-right: 16px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  cursor: pointer;

  color: #444545;

  img {
    margin-left: 36px;
    vertical-align: middle;
  }
`;

export const SearchResultsSort = styled.div`
  font-family: 'Exo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;

  span {
    color: #9c9c9c;
    margin-right: 15px;
  }
`;

export const SearchSortText = styled.a`
  font-family: 'Exo';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  text-decoration-line: ${(props) => (props.active ? 'underline' : 'none')};
  color: #000000;
  margin-right: 20px;
  cursor: pointer;
`;

export const SearchResultsContainer = styled.div`
  padding: 0 24px;
`;

export const EventSearchResultContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 28px 0;
  border: none;
  border-bottom: 1px dashed #dce2e2;
`;

export const EventDate = styled.div`
  margin-right: 26px;
`;

export const EventMonth = styled.div`
  font-family: 'Exo';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
`;

export const EventDay = styled.div`
  font-family: 'Exo';
  font-style: normal;
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
  font-family: 'Exo';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

export const EventLevels = styled.div`
  font-family: 'Exo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

export const EventLocation = styled.div`
  font-family: 'Exo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  color: #8b969b;
`;

export const EventPrice = styled.div`
  font-family: 'Exo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;
