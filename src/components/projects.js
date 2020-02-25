import React from 'react';
import styled from 'styled-components';

import Project from './singleProject';

const Projects = () => {
  return (
    <Wrapper>
      <h1>/projects</h1>
      <ProjectContainer>
        <Project />
        <Project />
        <Project />
      </ProjectContainer>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;

  ::after {
    content: '';
    height: 80vh;
  }
`;

const ProjectContainer = styled.div`
  /* scroll-snap-type: x proximity; */

  > div {
    margin-bottom: 2.8rem;
    /* scroll-snap-align: start; */

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
