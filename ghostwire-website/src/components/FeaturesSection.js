import React from 'react';
import { Link } from 'gatsby';

import pic1 from '../data/gwa/instructor.jpg';
import pic2 from '../data/gwa/students1.jpg';
import pic3 from '../data/gwa/studentsCertification.jpg';

const Features = () => (
  <section id="one" className="wrapper style2 spotlights">
    <section>
      <h2 className="header">Ghostwire Academy. A Non-profit Cyber Security Bootcamp</h2>
    </section>
    <section>
      <a href="/#" className="image" alt="image">
        <img src={pic1} className="portrait" alt="Ghostwire Academy Instructor" data-position="25% 25%" />
      </a>
      <div className="content">
        <div className="inner">
          <h2>Cyber Security Taught by Fields Experts</h2>
          <p>
          Ghostwire Academy Instructors are comprised of military Active Duty and veteran Cyber
Security professionals with years of experience in protecting our nations information systems.
Our team is completely comprised of volunteers with a passion for our efforts. If you would like
to volunteer click the link below and meet some of the current instructors.
          </p>
          <ul className="actions">
            <li>
              <Link className="button" to="/elements">
                Learn more
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <a href="/#" className="image">
        <img src={pic2} alt="" className="portrait" data-position="25% 25%" />
      </a>
      <div className="content">
        <div className="inner">
          <h2>Teaching the next generation of Cyber Security!</h2>
          <p>
          We believe that creating a highly skilled and competent generation sharpened in cyber security is
critical to protecting our communities from future cyber attacks and ensuring our Nation&#39;s
economic success.
          </p>
          <ul className="actions">
            <li>
              <Link className="button" to="/generic">
                Learn more
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <a href="/#" className="image">
        <img src={pic3} alt="" className="portrait" data-position="25% 25%" />
      </a>
      <div className="content">
        <div className="inner">
          <h2>A Life Cycle model that encourages volunteerism, STEM,
and technical development</h2>
          <p>Graduates are encouraged to volunteer with Ghostwire Academy. We ask old and new graduates
to continue their activity in Ghostwire Academy through teaching the next generation of youth to
curriculum development on certification courses. Instructors and volunteers are rewarded with
continuing education credits to maintain their newly earned certifications and incentivized
through the &quot;Pay it Forward&quot; program, where volunteers who have reached a milestone of
volunteer hours could receive testing vouchers for higher level cyber security certifications. 
          </p>
          <ul className="actions">
            <li>
              <Link className="button" to="/generic">
                Learn more
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </section>
);
export default Features;
