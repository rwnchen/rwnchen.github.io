import React from 'react';
import styled from 'styled-components';

const Landing = () => {
  return (
    <Wrapper>
      <div>
        <h1>hello. i'm Rowena Chen, and i'm a frontend engineer.</h1>
      </div>
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* padding-bottom: 6rem; */
  margin-bottom: 0 !important;
  min-height: calc(
    100vh - ${props => props.theme.borderWidth * 2}px -
      ${props => props.theme.containerPadding * 2}rem - 8rem - 5ch
  );

  h1 {
    margin: 0;
  }

  && a {
    color: ${props => props.theme.accentSub};
  }

  @media (min-width: ${props => props.theme.bpSm}px) {
    margin-left: 5ch !important;
    /* padding-bottom: calc(6rem + 5ch); */

    div {
      width: ${props => props.theme.contentWidth}ch;
    }

    @media (orientation: landscape) {
      div {
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: ${props => props.theme.bpSm}px) {
    min-height: calc(
      100vh - ${props => props.theme.borderWidth * 2}px -
        ${props => props.theme.containerPadding * 2}rem - 10rem - 10ch
    );
  }
`;
