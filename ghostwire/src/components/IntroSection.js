import React from 'react';
import Scroll from '../components/Scroll';

const Intro = () => (
<section id="intro" className="wrapper style1 fullscreen fade-up">
        <div className="inner">
          <p>
            
          </p>
          <ul className="actions">
            <li>
              <Scroll type="id" element="one">
                <a href="#one" className="button">
                  Learn more
                </a>
              </Scroll>
            </li>
          </ul>
        </div>
      </section>
);

export default Intro;