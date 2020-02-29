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
      lastScrollPos: 0,
    };

    this.container = React.createRef();

    this.onScroll = this.onScroll.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.scrollToProjects = this.scrollToProjects.bind(this);
  }

  componentDidMount() {
    this.setState({ lastScrollPos: window.pageYOffset });
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
      top: 1.3 * window.innerHeight,
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
        {this.props.children.slice(0, 2)}
        <Nav
          scrolled={this.state.lastScrollPos > window.innerHeight * 0.7}
          scrollToTop={this.scrollToTop}
          scrollToProjects={this.scrollToProjects}
        />
        {this.props.children.slice(2)}
      </StyledScrollContainer>
    );
  }
}

const Nav = props => {
  const { scrolled, scrollToTop, scrollToProjects } = props;
  const scrollOnClick = () => (scrolled ? scrollToTop() : scrollToProjects());
  return (
    <NavWrapper scrolled={scrolled}>
      <ul>
        <Name scrolled={scrolled}>Rowena Chen</Name>
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
  scroll-snap-type: y
    ${props => (props.direction === 'down' ? 'mandatory' : 'proximity')};

  > * {
    margin-top: ${props => props.theme.containerPadding}rem;
    margin-bottom: ${props => props.theme.divSpacing}vh;

    scroll-snap-align: start;
    min-height: calc(100vh - ${props => props.theme.borderWidth * 2}px);

    &:last-child {
      margin-bottom: ${props => props.theme.containerPadding}rem;
    }

    @media (min-width: ${props => props.theme.bpSm}px) {
      scroll-padding: ${props => props.theme.containerPadding}rem;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: -9rem;
  height: 12rem;
  min-height: 0;
  scroll-margin: -100vh;

  ul {
    height: ${props => (props.scrolled ? '0' : '7')}rem;
    opacity: ${props => (props.scrolled ? '0' : '1')};
    overflow: hidden;
    transition: all ${props => props.theme.transitions};
  }

  @media (min-width: ${props => props.theme.bpSm}px) {
    top: -6rem;
    margin-left: 5ch;
    scroll-margin: -60vh;
  }

  @media (min-width: ${props => props.theme.bpMd}px) {
    top: 5ch;
    ul {
      height: 15rem !important;
      opacity: 1;
    }

    & > ul > li > a {
      color: ${props =>
        props.scrolled ? props.theme.accentSub : props.theme.accentBright};
    }
  }

  @media (min-width: ${props => props.theme.bpLg}px) {
    top: 5ch;
    margin-left: 5ch;
  }
`;

const Name = styled.li`
  max-height: 0;
  width: 7ch;
  margin: 0;
  margin-bottom: 0.8rem;
  overflow: hidden;
  font-size: 1.4rem;
  font-family: 'Fira Code', monospace;
  color: ${props => props.theme.accentBright};
  transition: all ${props => props.theme.transition};

  @media (min-width: ${props => props.theme.bpMd}px) {
    max-height: ${props => (props.scrolled ? '6' : '0')}rem;
  }
`;

const ArrowContainer = styled.div`
  width: 3ch;
  cursor: pointer;

  svg {
    width: 100%;
    animation: ${props => changeColor(true, props.theme)} 2s linear alternate
      infinite;

    transform: rotate(${props => (props.scrolled ? 180 : 0)}deg);
    transition: all ${props => props.theme.transitions};
  }

  &:hover {
    svg {
      fill: ${props => props.theme.accentAlt};
      animation: ${props => changeColor(false, props.theme)} 2s linear infinite;
    }
  }
`;

const changeColor = (playAnim, theme) => keyframes`
    from {
      fill: ${playAnim ? theme.accentAlt : theme.accentSub};
    }
    to {
      fill: ${playAnim ? theme.accentBright : theme.accentSub};
    }
  `;
