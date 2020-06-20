import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import fbSquare from '../../assets/images/fb-square.svg';
import igSquare from '../../assets/images/ig-square.svg';
import logo from '../../assets/images/logo.svg';
import searchGray from '../../assets/images/search-icon-gray.svg';
import search from '../../assets/images/search-icon.svg';
import twitterSquare from '../../assets/images/twitter-square.svg';
import {
  NavbarContainer,
  NavbarLogoContainer,
  NavbarLogoText,
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
            <img src={logo} alt="Fitness icon" width={30} height={30} />
            <NavbarLogoText>Fitness icon</NavbarLogoText>
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
            <img src={igSquare} alt="social" width={24} height={24} />
          </NavbarSocial>
          <NavbarSocial>
            <img src={fbSquare} alt="social" width={24} height={24} />
          </NavbarSocial>
          <NavbarSocial>
            <img src={twitterSquare} alt="social" width={24} height={24} />
          </NavbarSocial>
          <NavbarSearch>
            <img
              src={pathname === '/' ? searchGray : search}
              alt="search"
              width={24}
              height={24}
            />
          </NavbarSearch>
        </NavbarSocialSearchContainer>
      </NavbarContainer>
    </ThemeProvider>
  );
};

export default Navbar;
