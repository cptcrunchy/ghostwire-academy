import React from 'react';
import { Link } from 'gatsby';

import ContactForm from './Form';
import ContactEmail from './ContactEmail';
import SocialMedia from './SocialMedia';


const FormSection = () => (
<section id="three" className="wrapper style4 fade-up">
    <div className="inner">
        <h2>Enroll Today</h2>
        <p>
        Ghostwire Academy is available to all between the ages 13-17.
        All students must have compelted the <Link to="/">IT Fundamentals course</Link>.
        Registration for IT Fundamentals is first come first serve as class become available.
        Enrollment into continuation courses is exclusively available when the student has completed holds the pre requisite
         certification unless the student has already obtained the pre requisite certifications. 
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