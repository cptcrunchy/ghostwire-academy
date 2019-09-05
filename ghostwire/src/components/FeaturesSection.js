import React from 'react';
import { Link } from 'gatsby';
import pic1 from '../images/gwa-classroom-instructor.jpg';
import pic2 from '../images/gwa-classroom-students.jpg';
import pic3 from '../images/gwa-students-certification.jpg';

const Features = () => (
  <section id="one" className="wrapper style2 spotlights">
    <section>
      <a href="/#" className="image" alt="image">
        <img src={pic1} alt="Ghostwire Academy Instructor" className="portrait" data-position="center center" />
      </a>
      <div className="content">
        <div className="inner">
          <h2>Cyber Security Taught by Fields Experts</h2>
          <p>
            Ghostwire Academy Instructors are comprised of current Active Duty
            Cyber Security professionals or Data Forensic Specialists. Meet some
            of the current instructors.
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
        <img src={pic2} alt="" className="portrait" data-position="top center" />
      </a>
      <div className="content">
        <div className="inner">
          <h2>Teaching the next generation of Cyber Security!</h2>
          <p>
          We believe that creating a highly skilled and competent generation is critical
           to protecting our communities from future cyber attacks and ensuring our Nation's economic success.
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
          <h2>Organizational Growth from Within</h2>
          <p>Graduates of Ghostwire Academy are asked to help volunteer for the next cohort of students.
            Ghostwire Academy instructors are rewarded and incentivized through the "Pay it Forward" program. 
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
