import React from 'react';
import { BookOpen, GraduationCap, Code } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section bg-secondary">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
                    <div className="section-line"></div>
                </div>

                <div className="about-content">
                    <div className="about-text glass-panel">
                        <p className="about-description">
                            Hello! I'm <strong>Abhinaw</strong>, a passionate Web Developer focused on building
                            interactive, accessible, and responsive user experiences. I'm currently pursuing my B.Tech degree,
                            where I've built a strong foundation in computer science principles and modern web development.
                        </p>
                        <p className="about-description">
                            My journey in the MERN stack started with my curiosity about how full-scale web applications
                            function from the database to the browser. Today, I create seamless, high-performance web
                            solutions utilizing the latest technologies.
                        </p>
                    </div>

                    <div className="about-cards">
                        <div className="about-card glass-panel">
                            <div className="card-icon-wrapper">
                                <GraduationCap className="card-icon" />
                            </div>
                            <h3>Education</h3>
                            <p>B.Tech student</p>
                            <span className="card-detail">Expected '25 / '26</span>
                        </div>

                        <div className="about-card glass-panel">
                            <div className="card-icon-wrapper">
                                <Code className="card-icon" />
                            </div>
                            <h3>Experience</h3>
                            <p>MERN Stack</p>
                            <span className="card-detail">Personal & Open Source Projects</span>
                        </div>

                        <div className="about-card glass-panel">
                            <div className="card-icon-wrapper">
                                <BookOpen className="card-icon" />
                            </div>
                            <h3>Passions</h3>
                            <p>Clean Code</p>
                            <span className="card-detail">UI/UX Design, Performance</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
