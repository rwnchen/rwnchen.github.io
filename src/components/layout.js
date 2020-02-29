/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import 'typeface-fira-code';
import 'typeface-work-sans';

import '../styles/layout.css';
import GlobalStyle, { Theme } from '../styles/global';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <MainView>
        <ScrollContainer>{children}</ScrollContainer>
      </MainView>
    </ThemeProvider>
  );
};

const ScrollContainer = props => {
  const [scrollDir, setScrollDir] = useState('down');
  const [lastScrollPos, setLastScrollPos] = useState(window.pageYOffset);
  const [updateTick, setUpdate] = useState(true);

  const onScroll = e => {
    if (updateTick) {
      const pos = e.currentTarget.scrollTop;

      if (pos > lastScrollPos) setScrollDir('down');
      else setScrollDir('up');

      setLastScrollPos(pos <= 0 ? 0 : pos);
      setUpdate(false);
    } else setUpdate(true);
  };

  return (
    <StyledScrollContainer onScroll={onScroll} direction={scrollDir}>
      {props.children}
    </StyledScrollContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const MainView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #7755f0;
`;

const StyledScrollContainer = styled.div`
  width: calc(100% - ${props => props.theme.borderWidth * 2}px);
  height: calc(100% - ${props => props.theme.borderWidth * 2}px);
  padding-left: ${props => props.theme.containerPadding}rem;
  padding-right: ${props => props.theme.containerPadding}rem;
  background-color: #f5fdff;
  overflow-y: scroll;
  scroll-snap-type: y ${props =>
    props.direction === 'down' ? 'mandatory' : 'proximity'};
  scroll-padding: ${props => props.theme.containerPadding}rem;

  > * {
    margin-top: ${props => props.theme.containerPadding}rem;
    /* margin-bottom: ${props => props.theme.containerPadding * 10}rem; */
    margin-bottom: ${props => props.theme.divSpacing}vh;

    scroll-snap-align: start;
    min-height: calc(
      100vh - ${props => props.theme.borderWidth * 2}px -
        ${props => props.theme.containerPadding * 2}rem
    );

    &:last-child {
      margin-bottom: ${props => props.theme.containerPadding}rem;
    }

    @media (min-width: ${props => props.theme.bpSm}px) {
      margin-left: calc(100% - ${props => props.theme.contentWidth}ch);
    }

    @media (min-width: ${props => props.theme.bpMd}px) {
      margin-left: calc(100% - ${props => props.theme.contentWidth}ch - 10vw);
      margin-right: 10vw;
    }

    @media (min-width: ${props => props.theme.bpMd}px) {
      margin-left: calc(100% - ${props => props.theme.contentWidthLg}ch - 20vw);
      margin-right: 20vw;
    }
  }

`;
