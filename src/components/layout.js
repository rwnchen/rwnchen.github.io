/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
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
  background-color: #7755f0;
`;

const ScrollContainer = styled.div`
  width: calc(100% - ${props => props.theme.borderWidth * 2}px);
  height: calc(100% - ${props => props.theme.borderWidth * 2}px);
  padding-left: ${props => props.theme.containerPadding}rem;
  padding-right: ${props => props.theme.containerPadding}rem;
  background-color: #f5fdff;
  overflow-y: scroll;

  > * {
    margin-top: ${props => props.theme.containerPadding}rem;
    margin-bottom: ${props => props.theme.containerPadding * 3}rem;
  }
`;
