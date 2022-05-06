import React from 'react';
import PropTypes from 'prop-types';
import Hero from 'components/oraganisms/hero/hero';
import styled from 'styled-components';
import { GlobalStyles } from 'assets/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import HeadTag from 'components/atoms/headingTag/headingTag';
import Curtain from 'components/atoms/curtain/curtain';

const Wrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeadTag />
      <GlobalStyles />
      <Wrapper>
        <Curtain />
        <Hero />
      </Wrapper>
    </ThemeProvider>
  );
};

Root.propTypes = {};

export default Root;
