import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 25px;
  height: 18px;
  margin: 20px;
  margin-right: 40px;
  position: relative;
  cursor: pointer;
  span {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 100px;
    transform: translateY(9px);
    transition: transform 1s;
  }

  span:first-of-type {
    transform: translateY(0);
    transform-origin: 100% 0;
  }
  span:last-of-type {
    transform: translateY(18px);
    right: 0;
    transform-origin: 0 100%;
  }
  &:hover {
    span:first-of-type {
      transform: scaleX(0.6);
    }
    span:last-of-type {
      transform: translateY(18px) scaleX(0.6);
    }
  }
`;

const HamburgerMenu = () => {
  const hamburgerRef = useRef(null);
  const tl = useRef(null);

  return (
    <Wrapper ref={hamburgerRef}>
      <span></span>
      <span></span>
      <span></span>
    </Wrapper>
  );
};

HamburgerMenu.propTypes = {};

export default HamburgerMenu;
