import React from 'react';
import styled from 'styled-components';

import { ProjectContainer } from './projects';
import { ListItem } from './singleProject';

const Misc = () => {
  return (
    <Wrapper>
      <h1>/misc</h1>

      <ProjectContainer>
        <ListItem
          link="http://www.cs.cornell.edu/~eland/papers/chi2019_whathack.pdf"
          name="What.Hack"
          meta={
            <>
              <a href="http://www.cs.cornell.edu/~eland/papers/chi2019_whathack.pdf">
                link
              </a>{' '}
              / research paper
            </>
          }
          desc="An educational game designed to teach players to recognize and avoid phishing attempts. Published at CHI 19."
        />
      </ProjectContainer>

      <ProjectContainer>
        <ListItem
          link="https://www.ravelry.com/projects/astralturf"
          name="Knitting"
          meta={
            <>
              <a href="http://www.cs.cornell.edu/~eland/papers/chi2019_whathack.pdf">
                link
              </a>{' '}
              / my ravelry
            </>
          }
          desc="I knit stuff. Click to check out the stuff I knit."
        />
      </ProjectContainer>
    </Wrapper>
  );
};

export default Misc;

const Wrapper = styled.div`
  padding-top: 1ch;

  @media (min-width: ${props => props.theme.bpSm}px) {
    padding-top: 5ch;
  }
`;
