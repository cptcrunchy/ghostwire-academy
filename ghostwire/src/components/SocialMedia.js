import React from 'react';
import '../assets/sass/main.scss';

const SocialMedia = () => (
    <li>
        <h3>Social</h3>
        <ul className="icons">
            <li>
                <a href="/#" className="fa-twitter">
                <span className="label">Twitter</span>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/GhostWireSA/" className="fa-facebook">
                    <span className="label">Facebook</span>
                </a>
            </li>
            <li>
                <a href="/#" className="fa-instagram">
                    <span className="label">Instagram</span>
                </a>
            </li>
            <li>
                <a href="/#" className="fa-linkedin">
                    <span className="label">LinkedIn</span>
                </a>
            </li>
        </ul>
    </li>
);

export default SocialMedia;