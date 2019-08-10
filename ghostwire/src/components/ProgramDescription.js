import React from 'react';
import { Link } from 'gatsby';
import '../assets/sass/main.scss';

const Description = () => (
<section id="two" className="wrapper style2-alt fade-up">
    <div className="inner">
        <h2>What we do</h2>
        <p>
        Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
        turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus,
        lacus eget hendrerit bibendum, urna est aliquam sem, sit amet
        imperdiet est velit quis lorem.
        </p>
        <div className="features">
            <section>
                <span className="icon major fa-code" />
                <h3>Lorem ipsum amet</h3>
                <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
                </p>
            </section>
            <section>
                <span className="icon major fa-lock" />
                <h3>Aliquam sed nullam</h3>
                <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
                </p>
            </section>
            <section>
                <span className="icon major fa-cog" />
                <h3>Sed erat ullam corper</h3>
                <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
                </p>
            </section>
            <section>
                <span className="icon major fa-desktop" />
                <h3>Veroeros quis lorem</h3>
                <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
                </p>
            </section>
            <section>
                <span className="icon major fa-chain" />
                <h3>Urna quis bibendum</h3>
                <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
                </p>
            </section>
            <section>
                <span className="icon major fa-diamond" />
                <h3>Aliquam urna dapibus</h3>
                <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
                </p>
            </section>
        </div>
        <ul className="actions">
            <li>
                <Link className="button" to="/generic">
                Learn more
                </Link>
            </li>
        </ul>
    </div>
</section>
);

export default Description;