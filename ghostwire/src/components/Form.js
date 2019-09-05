import React from 'react';
import '../assets/sass/main.scss';

const Form = () => (
    <section>
        <form method="post" data-netlify="true" action="/generic">
            <div className="fields">
                <div className="field half">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="5" />
                </div>
            </div>
            <ul className="actions">
                <li>
                    <button type="submit" className="button submit">Send</button>
                </li>
            </ul>
        </form>
    </section>
);

export default Form;