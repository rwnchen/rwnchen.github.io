import React from 'react';
import styled from 'styled-components';

import Project from './singleProject';
import projects from '../data/projects.json';

const Projects = () => {
  return (
    <Wrapper>
      <h1>/projects</h1>
      <ProjectContainer>
        {projects.map((p, i) => (
          <Project key={i} project={p} />
        ))}
      </ProjectContainer>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5ch;
  margin-bottom: 0 !important;

  ::after {
    content: '';
    height: ${props => props.theme.divSpacing}vh;
  }
`;

export const ProjectContainer = styled.div`
  > div {
    margin-bottom: 2.4rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (min-width: ${props => props.theme.bpSm}px) {
    margin-left: 5ch;
  }
`;
