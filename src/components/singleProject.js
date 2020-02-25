import React from 'react';
import styled from 'styled-components';

const Project = () => {
  return (
    <div>
      <h2>Project Name</h2>
      <ProjectInfo>
        <a href="#">link</a> / 2xxx / platform / role
      </ProjectInfo>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  );
};

export default Project;

const ProjectInfo = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.accentSub};
  margin-bottom: 0.8rem;
`;
