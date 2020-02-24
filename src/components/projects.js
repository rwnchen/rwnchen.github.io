import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  return (
    <Wrapper>
      <h1>/projects</h1>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: calc(
    100vh - ${props => props.theme.borderWidth * 2}px -
      ${props => props.theme.containerPadding * 2}rem
  );
`;
