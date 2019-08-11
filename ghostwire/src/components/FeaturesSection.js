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
          <h2>Sed ipsum dolor</h2>
          <p>
            Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
            turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.
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
          <h2>Feugiat consequat</h2>
          <p>
            Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
            turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.
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
          <h2>Ultricies aliquam</h2>
          <p>
            Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
            turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.
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
