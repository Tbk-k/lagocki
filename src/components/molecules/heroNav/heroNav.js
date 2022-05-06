import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import lightLogo from 'assets/img/logoLight.png';
import HamburgerMenu from 'components/atoms/hamburgerMenu/hamburgerMenu';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1;
  display: flex;
  align-items:center;
  justify-content: space-between;
  img {
    height: 65px;
    margin: 20px;
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
