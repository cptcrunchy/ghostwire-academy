import React from 'react';
import '../assets/sass/main.scss';

const Form = () => (

    <section>
        <form method="POST" name="enrollmentForm" data-netlify="true" action="/">
            <div className="fields">
                <div className="field half">
                    <label htmlFor="name">Parent / Guardian Name</label>
                    <input type="text" name="parentName" id="parentName" required="true" />
                </div>
                <div className="field half">
                    <label htmlFor="name">Student Name</label>
                    <input type="text" name="studentName" id="studentName" required="true" />
                </div>
                <div className="field half">
                    <label htmlFor="studentAge">Student Age</label>
                    <input type="number" size="6" min="11" max="18" name="studentAge" id="studentAge" required="true" />
                </div>
                <div className="field half">
                    <label htmlFor="email">Contact Email</label>
                    <input type="text" name="email" id="email" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" require="true" />
                </div>
                <div className="field half">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" name="phone" id="phone" required="true" />
                </div>
                <div className="field half">
                    <label htmlFor="schoolName">School Name</label>
                    <input type="text" name="school" id="school" required="true" />
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
            <input type="hidden" name="form-name" value="enrollmentForm" />
        </form>
    </section>
);

export default Form;