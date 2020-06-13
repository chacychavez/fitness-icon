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
