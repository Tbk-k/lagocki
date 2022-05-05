import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import lightLogo from 'assets/img/logoLight.png';
import HamburgerMenu from 'components/atoms/hamburgerMenu/hamburgerMenu';

const Wrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  height: fit-content;
  width: 80vw;
  z-index: 1;
  display: flex;
  img {
    height: 65px;
  }
`;

const HeroNav = () => {
  return (
    <Wrapper>
      <img src={lightLogo} />
      <HamburgerMenu />
    </Wrapper>
  );
};

HeroNav.propTypes = {};

export default HeroNav;
