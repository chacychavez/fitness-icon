import styled from 'styled-components/macro';

export const EventSubmissionMainContainer = styled.div`
  padding: 64px 0;
  font-family: 'Exo';
  font-style: normal;
  max-width: 1300px;
  margin: 0 auto;
`;

export const EventSubmissionContainer = styled.div`
  width: 630px;
`;

export const EventSubmissionHeader = styled.header`
  font-weight: 800;
  font-size: 36px;
  line-height: 48px;
  margin-top: 50px;
`;

export const EventSubmissionTabs = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  list-style: none;
  background: #f7fafb;
  border: 1px solid #dde8e8;
  box-sizing: border-box;
  border-radius: 3px;
`;

export const EventSubmissionTab = styled.li`
  display: flex;
  cursor: pointer;

  span {
    display: flex;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background-color: ${(props) => (props.active ? '#1DA1F2' : '#000')};
    color: #fff;
    font-weight: bold;
    font-size: 11px;
    align-items: center;
    justify-content: center;
  }

  header {
    margin-left: 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 21px;
    text-decoration-line: ${(props) => (props.active ? 'underline' : 'none')};

    color: ${(props) => (props.active ? '#1DA1F2' : '#000')};
  }
`;

export const EventSubmissionNavigations = styled.div`
  display: flex;
  margin-top: 34px;
`;

export const NavigationButton = styled.a`
  margin-right: 14px;
  display: flex;
  width: 181px;
  height: 51px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  background: #000;
  color: #ffffff;
  cursor: pointer;
`;
