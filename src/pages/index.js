import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Galery from '../components/Galery';
import SEO from '../components/seo';

const IndexPage = ({ Photos }) => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Galery>{Photos}</Galery>
      </Layout>
    </>
  );
};

export default IndexPage;
