import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="section hero-section">
            <div className="container hero-container">

                <div className="hero-content animate-fade-in-up">
                    <div className="hero-badge">
                        <span className="pulse-dot"></span> Available for Web Development Roles
                    </div>

                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text">Abhinaw</span><br />
                        A Full-Stack<br />
                        <span className="outline-text">MERN</span> Developer.
                    </h1>

                    <p className="hero-subtitle">
                        I'm a B.Tech student passionate about building scalable web applications.
                        I specialize in React, Node.js, Express, and MongoDB to deliver premium, seamless user experiences.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn-primary">
                            View My Work <ArrowRight className="btn-icon" size={18} />
                        </a>
                        <a href="/resume.pdf" className="btn-outline">
                            Download CV <Download size={18} />
                        </a>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon">
                            <Github size={22} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
                            <Linkedin size={22} />
                        </a>
                        <a href="mailto:example@email.com" className="social-icon">
                            <Mail size={22} />
                        </a>
                    </div>
                </div>

                <div className="hero-visual animate-float desktop-only">
                    <div className="glass-panel profile-card">
                        <div className="profile-img-container">
                            <img src="/profile.png" alt="Abhinaw" className="profile-img" />
                        </div>
                        <div className="profile-info">
                            <h3>Abhinaw</h3>
                            <p className="text-muted">B.Tech Student</p>
                            <div className="tech-stack-mini">
                                <span className="tech-tag">MongoDB</span>
                                <span className="tech-tag">Express</span>
                                <span className="tech-tag">React</span>
                                <span className="tech-tag">Node.js</span>
                            </div>
                        </div>
                    </div>

                    {/* Decorative background blurs */}
                    <div className="blur-circle accent-primary"></div>
                    <div className="blur-circle accent-secondary"></div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
