/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, keyframes } from 'styled-components';

import 'typeface-fira-code';
import 'typeface-work-sans';

import '../styles/layout.css';
import GlobalStyle, { Theme } from '../styles/global';

import { Arrow } from './arrow';

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

class ScrollContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollDir: 'down',
      lastScrollPos: window.pageYOffset,
    };

    this.container = React.createRef();

    this.onScroll = this.onScroll.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.scrollToProjects = this.scrollToProjects.bind(this);
  }

  onScroll = e => {
    const pos = e.currentTarget.scrollTop;

    if (pos > this.state.lastScrollPos) this.setState({ scrollDir: 'down' });
    else this.setState({ scrollDir: 'up' });

    this.setState({ lastScrollPos: pos <= 0 ? 0 : pos });
  };

  scrollToTop = () => {
    this.container.current.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  scrollToProjects = () => {
    console.log('here');
    this.container.current.scrollTo({
      top: 1.4 * window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <StyledScrollContainer
        ref={this.container}
        onScroll={this.onScroll}
        direction={this.state.scrollDir}
      >
        <Nav
          scrollPos={this.state.lastScrollPos}
          scrollToTop={this.scrollToTop}
          scrollToProjects={this.scrollToProjects}
        />
        {this.props.children}
      </StyledScrollContainer>
    );
  }
}

const Nav = props => {
  const scrolled = props.scrollPos > window.innerHeight / 2;
  const scrollOnClick = () =>
    scrolled ? props.scrollToTop() : props.scrollToProjects();
  return (
    <NavWrapper scrolled={scrolled}>
      <ul>
        <li>
          <a href="https://github.com/rwnchen">/ github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rowena-chen/">/ linkedin</a>
        </li>
        <li>
          <a href="/Rowena_Chen.pdf" target="blank">
            / resume
          </a>
        </li>
      </ul>
      <ArrowContainer scrolled={scrolled} onClick={scrollOnClick}>
        <Arrow />
      </ArrowContainer>
    </NavWrapper>
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
  position: relative;
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

    @media (min-width: ${props => props.theme.bpLg}px) {
      margin-left: calc(100% - ${props => props.theme.contentWidthLg}ch - 20vw);
      margin-right: 20vw;
    }
  }
`;

const NavWrapper = styled.div`
  position: fixed;
  bottom: 1ch;

  margin: 0;
  max-height: 100%;
  min-height: 0px;

  && a {
    color: ${props => props.theme.accentSub} !important;
  }

  ul {
    height: ${props => (props.scrolled ? '0' : '6')}rem;
    margin-bottom: 1rem;
    opacity: ${props => (props.scrolled ? '0' : '1')};
    overflow: hidden;
    transition: all ${props => props.theme.transitions};
  }
`;

const ArrowContainer = styled.div`
  width: 3ch;
  cursor: pointer;

  svg {
    width: 100%;
    animation: ${props => changeColor(props.scrolled, props.theme)} 2s linear
      alternate infinite;
    transform: rotate(${props => (props.scrolled ? 180 : 0)}deg);
    transition: all ${props => props.theme.transitions};
  }
`;

const changeColor = (scrolled, theme) => keyframes`
    from {
      fill: ${scrolled ? theme.accentAlt : theme.accentSub};
    }
    to {
      fill: ${scrolled ? theme.accentBright : theme.accentSub};
    }
  `;
