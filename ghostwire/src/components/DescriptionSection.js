import React from 'react';
import { Link } from 'gatsby';
import '../assets/sass/main.scss';

const Description = () => (
<section id="two" className="wrapper style2-alt fade-up">
    <div className="inner">
        <h2>How does Ghostwire Academy's Program work?</h2>
        <p>To ensure the highest quality of education, Ghostwire has a tiered approach
            to ensure students can fully understand the core concepts of Cyber Security.
            Ghostwire Academy is supported by military veterans, current Cyber Security operatives,
            Graduates and Parents.
        </p>
        <div className="features">
            <section>
                <span className="icon major fa-file-o" />
                <h3>Register Student for IT Fundamentals (ITF)</h3>
                <p>ITF is the only single certification that covers all areas of 
                    IT foundations. Students will learn about software, hardware, security, networking,
                    and basic IT literacy. Students will prepare for the CompTIA IT Fundamentals exam,
                    and any student that passes our pre-test, will get to take the CompTIA test for free!
                </p>
            </section>
            <section>
                <span className="icon major fa-lock" />
                <h3>Introduction to Digital Forensics</h3>
                <p>In the Digital Forensics class the students will learn the basics of how the Windows
                    operating sytem stores data, what happens to a file after it's deleted, how files can
                    be hidden, and much more. This is more advanced topic so it is recommended that students
                    have already take IT Fundamentals.
                </p>
            </section>
            <section>
                <span className="icon major fa-cog" />
                <h3>Cyber Security</h3>
                <p>GhostWire Academy's cyber security course introduces basic programming in order to develop, 
                    design &amp; construct common exploits. The course will then cover basic network analysis
                    techniques that enable the detection of vulnerabilities that could make a system, or network
                    of systems, vulnerable to those exploits.
                </p>
                <p>The objective of this course is to teach students how to discover vulnerabilities in systems,
                    or a network of systems, so that students will better understand how to defend their systems from exploits.
                </p>
            </section>
            <section>
                <span className="icon major fa-desktop" />
                <h3>Introduction and Certification for CompTIA Networking+</h3>
                <p>Network+ ensures an IT professional has the knowledge and skills to:</p>
                <ul>
                    <li>Design and implement functional networks</li>
                    <li>Configure, manage, and maintain essential network devices</li>
                    <li>Use devices such as switches and routers to segment network traffic and create resilient networks</li>
                    <li>Identify benefits and drawbacks of existing network configurations</li>
                    <li>Implement network security, standards, and protocols</li>
                    <li>Troubleshoot network problems</li>
                    <li>Support the creation of virtualized networks</li>
                </ul>
            </section>
            <section>
                <span className="icon major fa-chain" />
                <h3>Introduction and Certification for CompTIA Security+</h3>
                <p>CompTIA Security+ is a global certification that validates the baseline skills
                    you need to perform core security functions and pursue an IT security career.</p>
            </section>
            <section>
                <span className="icon major fa-diamond" />
                <h3>Opportunities for Career Advancement.</h3>
                <p>Students are provided with internship, workforce, and scholarship opportunities as the NPO grows
                    and provides them. Graduates are then asked to volunteer and help the next cohort of students.
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