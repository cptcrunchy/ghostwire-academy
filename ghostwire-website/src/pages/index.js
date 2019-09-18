import React from 'react';

import Layout from '../components/layout';
import Footer from '../components/Footer';

import Sidebar from '../components/Sidebar';
import IntroSection from '../components/IntroSection';
import FeaturesSection from '../components/FeaturesSection';
import DescriptionSection from '../components/DescriptionSection';
import ContactSection from '../components/FormSection';

const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="wrapper">

      <IntroSection />

      <FeaturesSection />

      <DescriptionSection />

      <ContactSection />
      
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;
