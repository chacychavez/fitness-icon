import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import {
  NavbarContainer,
  NavbarLogoContainer,
  NavbarItemContainer,
  NavbarItem,
  NavbarSocialSearchContainer,
  NavbarSocial,
  NavbarSearch,
} from './styled';

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <ThemeProvider theme={{ mode: pathname === '/' ? 'light' : 'dark' }}>
      <NavbarContainer>
        <NavbarLogoContainer>
          <Link to="/">
            <span>
              <img src="https://via.placeholder.com/32" alt="Fitness icon" />
            </span>
            <span>Fitness icon</span>
          </Link>{' '}
        </NavbarLogoContainer>
        <NavbarItemContainer>
          <NavbarItem>
            <Link to="/event-calendar">Event Calendar</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/sports-directory">Sports Directory</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/articles">Articles</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/product-reviews">Product Reviews</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/submit-an-event">Submit an Event</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/advertise">Advertise!</Link>
          </NavbarItem>
        </NavbarItemContainer>
        <NavbarSocialSearchContainer>
          <NavbarSocial>
            <img src="https://via.placeholder.com/24" alt="social" />
          </NavbarSocial>
          <NavbarSocial>
            <img src="https://via.placeholder.com/24" alt="social" />
          </NavbarSocial>
          <NavbarSocial>
            <img src="https://via.placeholder.com/24" alt="social" />
          </NavbarSocial>
          <NavbarSearch>
            <img src="https://via.placeholder.com/24" alt="search" />
          </NavbarSearch>
        </NavbarSocialSearchContainer>
      </NavbarContainer>
    </ThemeProvider>
  );
};

export default Navbar;
