import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themisImage from 'assets/img/themis.jpeg';
import HeroNav from 'components/molecules/heroNav/heroNav';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${themisImage});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  /* span {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
  } */
`;

const Hero = () => {
  return (
    <Wrapper>
      <span />
      <HeroNav />
    </Wrapper>
  );
};

Hero.propTypes = {};

export default Hero;
