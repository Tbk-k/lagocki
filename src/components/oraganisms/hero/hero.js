import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themisImage from 'assets/img/themis.jpeg';
import HeroNav from 'components/molecules/heroNav/heroNav';
import gsap from 'gsap';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${themisImage});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
const IntroCurtain = styled.div`
  /* width: 100%;
  height: 50%;
  position: absolute;
  background-color: black;
  z-index:1;
  &:first-of-type {
    top: 0;
  }
  &:nth-of-type(2) {
    bottom: 0;
  } */
`;

const InnerWrapper = styled.div`
  position: relative;
  z-index: 1;
  color: ${({ theme }) => theme.colors.white};
`;
const Caption = styled.div`
  font-family: 'Caladea', serif;
  font-size: 45px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
`;
const Word = styled.div`
  overflow: hidden;
  display: flex;
  &:nth-of-type(1),
  &:nth-of-type(2) {
    margin-bottom: 10px;
  }
  &:nth-of-type(2),
  &:nth-of-type(4) {
    margin-left: 20px;
  }
`;

const StyledDiv = styled.div`
  width: 85%;
  margin: 0 auto;
  text-align: center;
  span {
    line-height: 1.5;
    opacity: 0;
  }
`;

const Hero = () => {
  const tl = useRef(null);
  const divRef = useRef(null);
  const captionRef = useRef(null);
  const wordRef = useRef(null);
  const word1Ref = useRef(null);
  const word2Ref = useRef(null);
  const word3Ref = useRef(null);

  React.useEffect(() => {
    tl.current = gsap.timeline();
    if (tl.current) {
      tl.current
        .set(captionRef.current, { y: `${divRef.current.offsetHeight / 2}` })
        .set([wordRef.current.children, word1Ref.current.children, word2Ref.current.children, word3Ref.current.children], { yPercent: 100 })
        .to(wordRef.current.children, { yPercent: 0, duration: 0.5, stagger: 0.05 })
        .to(word1Ref.current.children, { yPercent: 0, duration: 0.5, stagger: 0.05 }, '-=0.5')
        .to(word2Ref.current.children, { yPercent: 0, duration: 0.5, stagger: 0.05 }, '-=1')
        .to(word3Ref.current.children, { yPercent: 0, duration: 0.5, stagger: 0.05 }, '-=1');
    }
  }, []);

  return (
    <Wrapper>
      <HeroNav />
      <InnerWrapper>
        <Caption ref={captionRef}>
          <Word ref={wordRef}>
            <div>K</div>
            <div>o</div>
            <div>m</div>
            <div>o</div>
            <div>r</div>
            <div>n</div>
            <div>i</div>
            <div>k</div>
          </Word>
          <Word ref={word1Ref}>
            <div>S</div>
            <div>ą</div>
            <div>d</div>
            <div>o</div>
            <div>w</div>
            <div>y</div>
          </Word>
          <Word ref={word2Ref}>
            <div>K</div>
            <div>a</div>
            <div>m</div>
            <div>i</div>
            <div>l</div>
          </Word>
          <Word ref={word3Ref}>
            <div>Ł</div>
            <div>a</div>
            <div>g</div>
            <div>o</div>
            <div>c</div>
            <div>k</div>
            <div>i</div>
          </Word>
        </Caption>
        <StyledDiv ref={divRef}>
          <span>Jest funcjonariuszem publicznym działającym przy Sądzie Rejonowym w Płocku, realizującym </span>
          <span> swoje zadania w ramach postępowań komorniczych naobszarze Apelacji Łódziej.</span>
        </StyledDiv>
      </InnerWrapper>
    </Wrapper>
  );
};

Hero.propTypes = {};

export default Hero;
