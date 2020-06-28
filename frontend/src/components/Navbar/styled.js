import styled from 'styled-components/macro';
import theme from 'styled-theming';

const backgroundColor = theme('mode', {
  light: '#fff',
  dark: '#000',
});

const logoTextColor = theme('mode', {
  light: '#000',
  dark: '#fff',
});

const textColor = theme('mode', {
  light: '#6d7577',
  dark: '#fff',
});

export const NavbarContainer = styled.nav`
  position: fixed;
  z-index: 99;
  width: 100vw;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${backgroundColor};
`;

export const NavbarLogoContainer = styled.div`
  a {
    margin-left: 16px;
    display: flex;
    align-items: center;
    height: 64px;
    text-decoration: none;
  }
`;

export const NavbarLogoText = styled.span`
  font-family: 'Exo', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 700;
  margin-left: 10px;
  font-size: 30px;
  font-weight: bold;
  color: ${logoTextColor};
`;

export const NavbarItemContainer = styled.ul`
  display: flex;
`;

export const NavbarItem = styled.li`
  list-style-type: none;
  margin: auto 26px;

  a {
    font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
    font-style: normal;
    font-size: 16px;
    display: flex;
    text-decoration: none;
    color: ${textColor};
    font-weight: 600;
    height: 64px;
    align-items: center;
  }
`;

export const NavbarSocialSearchContainer = styled.ul`
  display: flex;
  margin-right: 16px;
`;

export const NavbarSocial = styled.li`
  list-style-type: none;
  margin: 0 6px;
`;

export const NavbarSearch = styled.li`
  list-style-type: none;
  margin: 0 4px;
`;
