import styled from 'styled-components/macro';
import theme from 'styled-theming';

const backgroundColor = theme('mode', {
  light: '#fff',
  dark: '#000',
});

const textColor = theme('mode', {
  light: '#000',
  dark: '#fff',
});

export const NavbarContainer = styled.nav`
  position: fixed;
  width: 100vw;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${backgroundColor};
`;

export const NavbarLogoContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    height: 64px;
    text-decoration: none;
  }

  span {
    margin-left: 8px;
    font-size: 24px;
    font-weight: bold;
    color: ${textColor};
  }
`;

export const NavbarItemContainer = styled.ul`
  display: flex;
`;

export const NavbarItem = styled.li`
  list-style-type: none;
  margin: auto 24px;

  a {
    display: flex;
    text-decoration: none;
    color: ${textColor};
    font-weight: bold;
    height: 64px;
    align-items: center;
  }
`;

export const NavbarSocialSearchContainer = styled.ul`
  display: flex;
`;

export const NavbarSocial = styled.li`
  list-style-type: none;
  margin: 0 8px;
`;

export const NavbarSearch = styled.li`
  list-style-type: none;
  margin: 0 8px;
`;
