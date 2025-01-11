import React from 'react';
import { assets } from '../assets/assets';

export const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div className="container text-center py-3">
                <p style={styles.text}>
                    @2024 Designed & Developed by 
                </p>
                <a
                    href="https://sabarikportfolio.netlify.app" // Replace with your portfolio URL
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.link}
                >
                    <strong>Sabari K</strong>
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2 gap-3">
                    <a href='https://www.linkedin.com/in/sabarishanmugapriyan-k/'><img style={{cursor:"pointer"}} src={assets.linkedIn} alt="LinkedIn" /></a>
                    <a href="https://github.com/Sabariks092?tab=repositories"><img src={assets.github} alt="GitHub" /></a>
                    <a href="https://www.facebook.com/sabari.NS2friends"><img src={assets.facebook_icon} width={23} alt="Facebook" /></a>
                    <a href="https://www.instagram.com/sam.ks_0409/"><img src={assets.instagram_icon} width={30}  alt="Instagram" /></a>
                </div>

            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#000',
        color: '#fff',
        position: 'relative',
        bottom: 0,
        width: '100%',
        marginTop:'aut'
    },
    text: {
        margin: 0,
        fontSize: '16px',
    },
    link: {
        color: '#00bcd4',
        textDecoration: 'none',
        fontSize: '16px',
    },
};

export default Footer;
