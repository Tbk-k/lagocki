import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gsap from 'gsap';

const StyledCurtain = styled.div`
  width: 100vw;
  height: 50vh;
  position: absolute;
  z-index: 10;
  background-color: black;
  bottom: 0;
  &:first-of-type {
    top: 0;
  }
`;

const Curtain = () => {
  const tl = useRef(null);
  const leftCurtainRef = useRef(null);
  const rightCurtainRef = useRef(null);

  React.useEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    if (tl.current) {
      tl.current
        .set(leftCurtainRef.current, { xPercent: -100 })
        .set(rightCurtainRef.current, { xPercent: 100 })
        .to(leftCurtainRef.current, { xPercent: 0, duration: 0.5 })
        .to(rightCurtainRef.current, { xPercent: 0, duration: 0.5 }, '-=0.5')
        .to([rightCurtainRef.current, leftCurtainRef.current], { yPercent: 200, duration: 1, delay: 0.25 });
    }
  }, []);

  return (
    <>
      <StyledCurtain ref={leftCurtainRef} />
      <StyledCurtain ref={rightCurtainRef} />
    </>
  );
};

Curtain.propTypes = {};

export default Curtain;
