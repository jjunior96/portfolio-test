import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Galery from '../components/Galery';
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Galery />
      </Layout>
    </>
  );
};

export default IndexPage;
