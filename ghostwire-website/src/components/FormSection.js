import React from 'react';

import ContactForm from './Form';
import SocialMedia from './SocialMedia';


const FormSection = () => (
<section id="three" className="wrapper style4 fade-up">
    <div className="inner">
        <h2>Enroll Today</h2>
        <p>Ghostwire Academy is available for FREE to all interested teens between the ages 13-17 . We do
require that initial pipeline students enroll in I.T fundamentals pass their exam certification
before being allowed to register for the more advance certification courses, Net+ and Sec+ 
        </p>
        <div className="split style1">
        <ContactForm />
        <section>
            <ul className="contact">
               
                <SocialMedia />
            </ul>
        </section>
        </div>
    </div>
</section>
);

export default FormSection;