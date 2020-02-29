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
  padding-bottom: 6rem;

  height: calc(
    100vh - ${props => props.theme.borderWidth * 2}px -
      ${props => props.theme.containerPadding * 2}rem
  );

  && a {
    color: ${props => props.theme.accentSub};
  }

  @media (min-width: ${props => props.theme.bpSm}px) {
    margin-left: 5ch !important;

    div {
      width: ${props => props.theme.contentWidth}ch;
      margin-bottom: 5ch;
    }

    @media (orientation: landscape) {
      div {
        margin-bottom: 0;
      }
    }
  }
`;
