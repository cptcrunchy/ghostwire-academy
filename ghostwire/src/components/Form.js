import React from 'react';
import '../assets/sass/main.scss';

const Form = () => (
    <section>
        <form method="post" action="#">
            <div className="fields">
                <div className="field half">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="5" />
                </div>
            </div>
            <ul className="actions">
                <li>
                <a href="/#" className="button submit">
                    Send Message
                </a>
                </li>
            </ul>
        </form>
    </section>
);

export default Form;