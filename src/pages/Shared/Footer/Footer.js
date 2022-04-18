import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='d-flex justify-content-center pt-3'>
                <p>&copy; {(new Date().getFullYear())} Fitness Friend</p>
            </div>
        </footer>
    );
};

export default Footer;