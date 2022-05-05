import React from 'react';
import PropTypes from 'prop-types';
import Hero from 'components/oraganisms/hero/hero';
import styled from 'styled-components';
import { GlobalStyles } from 'assets/styles/globalStyles';

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
`;

const Root = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Hero />
      </Wrapper>
    </>
  );
};

Root.propTypes = {};

export default Root;
