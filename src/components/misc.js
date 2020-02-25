import React from 'react';
import styled from 'styled-components';

import { Metadata } from './singleProject';

const Misc = () => {
  return (
    <div>
      <h1>/misc</h1>

      <MiscItem>
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
      </MiscItem>
    </div>
  );
};

export default Misc;

const MiscItem = styled.div``;
