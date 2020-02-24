import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import Landing from '../components/landing';
import Projects from '../components/projects';

const IndexPage = () => (
  <Layout>
    <SEO title="portfolio" />
    <Landing />
    <Projects />
  </Layout>
);

export default IndexPage;
