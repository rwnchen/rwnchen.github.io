import React from 'react';
import styled from 'styled-components';

const Project = props => {
  const p = props.project;

  return (
    <Wrapper>
      <Hover>
        <h2>/</h2>
      </Hover>
      <ProjectInfo>
        <h2>{p.name}</h2>
        <Metadata>
          <a href={p.link}>link</a> / {p.year} / {p.platform} / {p.role}
        </Metadata>
        <p>{p.description}</p>
      </ProjectInfo>
    </Wrapper>
  );
};

export default Project;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const ProjectInfo = styled.div``;

const Hover = styled.div`
  max-width: 0%;
  margin-right: 1rem;
  overflow: hidden;

  ${Wrapper}:hover & {
    max-width: 100%;
  }

  font-family: 'Fira Code', monospace;
  color: ${props => props.theme.accentBright};
`;

export const Metadata = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.accentSub};
  margin-bottom: 0.6rem;
  text-transform: lowercase;
`;
