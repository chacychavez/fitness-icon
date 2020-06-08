import styled from 'styled-components/macro';

export const HomeContainer = styled.div`
  text-align: center;
`;

export const HomeLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
`;

export const HomeHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(20px + 2vmin);
  color: white;
`;

export const HomeLink = styled.span`
  color: #61dafb;
  font-size: calc(10px + 2vmin);
`;
