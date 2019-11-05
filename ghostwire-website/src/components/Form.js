import React from 'react';
import '../assets/sass/main.scss';

const Form = () => (
    <section>
        <form method="POST" name="enrollment" enctype="application/x-www-form-urlencoded" data-netlify="true" action="/success" >
            <div className="fields">
                <div className="field half">
                    <label htmlFor="name">Parent / Guardian Name</label>
                    <input type="text" name="parentName" id="parentName" />
                </div>
                <div className="field half">
                    <label htmlFor="name">Student Name</label>
                    <input type="text" name="studentName" id="studentName" />
                </div>
                <div className="field">
                    <label htmlFor="email">Contact Email</label>
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