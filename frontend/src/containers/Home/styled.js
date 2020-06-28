import styled from 'styled-components/macro';

export const HomeContainer = styled.div`
  padding: 32px 0;
  text-align: center;
`;

export const HomeSearchContainer = styled.div`
  position: relative;
  margin-top: 100px;
  display: grid;
  justify-content: center;
`;

export const HomeSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeSearchInput = styled.input`
  height: 50px;
  width: 450px;
  padding: 0 18px;
  border-radius: 48px 0 0 48px;
  border: 2px solid rgba(196, 196, 196, 0.7);
  font-size: 20px;
  font-family: 'Exo', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 600;
  color: #a2a2a2;
  background-color: #fafbfb;

  &:focus {
    outline: none;
  }
`;

export const HomeSearchButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 87px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  border-radius: 0 48px 48px 0;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
`;

export const HomeBanner = styled.div`
  margin-top: 70px;
  width: 100%;
  height: 512px;
  /* Use props.src */
  background: #c4c4c4;
`;
