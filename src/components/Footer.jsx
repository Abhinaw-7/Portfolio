import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer bg-secondary">
            <div className="container footer-container">

                <div className="footer-top">
                    <div className="footer-brand">
                        <h2>Portfolio.</h2>
                        <p>Building digital experiences with passion and precision.</p>
                    </div>

                    <div className="footer-links">
                        <div className="link-group">
                            <h3>Quick Links</h3>
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#skills">Skills</a>
                            <a href="#projects">Projects</a>
                        </div>
                        <div className="link-group">
                            <h3>Socials</h3>
                            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        © {new Date().getFullYear()} Abhinaw. All rights reserved.
                    </p>
                    <p className="made-with">
                        Made with <Heart size={16} className="heart-icon" /> by a B.Tech MERN Stack Developer
                    </p>

                    <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
                        <ArrowUp size={20} />
                    </button>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
