import React from 'react';
import logo from '../../assets/logo.svg';
import { HomeContainer, HomeLogo, HomeHeader, HomeLink } from './styled';

export const Home = () => {
  return (
    <HomeContainer>
      <HomeHeader>
        <HomeLogo src={logo} alt='logo' />
        <p>New website coming!</p>
        <HomeLink>Fitness icon</HomeLink>
      </HomeHeader>
    </HomeContainer>
  );
};
