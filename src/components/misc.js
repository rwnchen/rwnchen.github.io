import React from 'react';
import styled from 'styled-components';

import { ProjectContainer } from './projects';
import { ProjectInfo, Metadata } from './singleProject';

const Misc = () => {
  return (
    <Wrapper>
      <h1>/misc</h1>

      <ProjectContainer>
        <ProjectInfo>
          <h2>What.Hack</h2>
          <Metadata>
            <a href="http://www.cs.cornell.edu/~eland/papers/chi2019_whathack.pdf">
              link
            </a>{' '}
            / research paper
          </Metadata>
          <p>
            An educational game designed to teach players to recognize and avoid
            phishing attempts. Published at CHI 19.
          </p>
        </ProjectInfo>
      </ProjectContainer>
    </Wrapper>
  );
};

export default Misc;

const Wrapper = styled.div`
  padding-top: 5ch;
`;

const MiscItem = styled.div``;
