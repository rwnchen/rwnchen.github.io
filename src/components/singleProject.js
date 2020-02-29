import React from 'react';
import styled from 'styled-components';

const Project = props => {
  const p = props.project;

  const projectMeta = p => {
    return (
      <>
        <a href={p.link}>link</a> / {p.year} / {p.platform} / {p.role}
      </>
    );
  };

  return (
    <ListItem
      link={p.link}
      name={p.name}
      meta={projectMeta(p)}
      desc={p.description}
    />
  );

  // return (
  //   <Wrapper onClick={() => window.open(p.link, '__blank')}>
  //     <Hover>
  //       <h2>/</h2>
  //     </Hover>
  //     <ProjectInfo>
  //       <h2>{p.name}</h2>
  //       <Metadata>
  //         <a href={p.link}>link</a> / {p.year} / {p.platform} / {p.role}
  //       </Metadata>
  //       <p>{p.description}</p>
  //     </ProjectInfo>
  //   </Wrapper>
  // );
};

export default Project;

export const ListItem = props => {
  const onclick = props.link
    ? () => window.open(props.link, '__blank')
    : () => null;
  const cursor = props.link ? 'pointer' : 'default';
  const { name, meta, desc } = props;

  return (
    <Wrapper onClick={onclick} style={{ cursor }}>
      {props.link && (
        <Hover>
          <h2>/</h2>
        </Hover>
      )}
      <ProjectInfo>
        <h2>{name}</h2>
        <Metadata>{meta}</Metadata>
        <p>{desc}</p>
      </ProjectInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProjectInfo = styled.div`
  width: 100%;

  @media (min-width: ${props => props.theme.bpSm}px) {
    width: calc(100% - 2ch - 1rem);
  }
`;

const Hover = styled.div`
  overflow: hidden;
  width: 0ch;
  transition: all ${props => props.theme.transitions};

  @media (min-width: ${props => props.theme.bpSm}px) {
    margin-right: 0;
    opacity: 0;
    font-family: 'Fira Code', monospace;
    color: ${props => props.theme.accentBright};

    ${Wrapper}:hover & {
      margin-right: 1rem;
      width: 2ch;
      opacity: 1;
    }
  }
`;

export const Metadata = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.accentSub};
  margin-bottom: 0;
  text-transform: lowercase;
`;
