import React from 'react';
import Scroll from '../components/Scroll';

const Intro = () => (
<section id="intro" className="wrapper style1 fullscreen fade-up">
        <div className="inner">
          
          <iframe controls autoplay
           width="1000" 
           height="425"
           src="https://www.youtube-nocookie.com/embed/C6HTUMvvwBI?autoplay=1&controls=1s"
           frameborder="0" 
           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
           allowfullscreen>
           </iframe>
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