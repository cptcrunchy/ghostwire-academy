import React from 'react';

import ContactForm from './Form';
import ContactEmail from './ContactEmail';
import SocialMedia from './SocialMedia';

const FormSection = () => (
<section id="three" className="wrapper style4 fade-up">
    <div className="inner">
        <h2>Get in touch</h2>
        <p>
        Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
        turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus,
        lacus eget hendrerit bibendum, urna est aliquam sem, sit amet
        imperdiet est velit quis lorem.
        </p>
        <div className="split style1">
        <ContactForm />
        <section>
            <ul className="contact">
                <ContactEmail />
                <SocialMedia />
            </ul>
        </section>
        </div>
    </div>
</section>
);

export default FormSection;