import React from 'react';

import Layout from '../components/layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GWBanner from '../data/gwa/gw_logos_transparent_bg.png';

const ThirdPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <div className="image banner">
            <img src={GWBanner} alt="ghostwire academy banner" className="banner" />
          </div>
          <h2 className="major">Enrollment Submission Saved.</h2>
          <p>
           Thank you for your interest in enrolling at Ghostwire Academy. A member of the Enrollment
           team will contact you soon.
          </p>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default ThirdPage;
