import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='d-flex justify-content-center'>
                <p>&copy; {(new Date().getFullYear())} Fitness Friend</p>
            </div>
        </div>
    );
};

export default Footer;