import React from 'react';
import styled from 'styled-components';

const Landing = () => {
  return (
    <Wrapper>
      <div>
        <h1>hello. i'm Rowena Chen, and i'm a frontend engineer.</h1>
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
      </div>
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

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
  }
`;
