import React from 'react';
// import { Link } from 'gatsby'

import Layout from '../components/layout';
import Header from '../components/Header';
import Footer from '../components/Footer';


const ThirdPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">A Generic Page</h1>
          <p>
           Thank you for your interest in enrolling at Ghostwire Academy.
          </p>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default ThirdPage;
