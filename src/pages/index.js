import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Landing from '../components/landing';
import Projects from '../components/projects';
import Misc from '../components/misc';

const IndexPage = () => (
  <Layout>
    <SEO title="portfolio" />
    <Landing />
    <Projects />
    <Misc />
  </Layout>
);

export default IndexPage;
