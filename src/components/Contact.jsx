import React from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">

                <div className="section-header">
                    <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
                    <div className="section-line"></div>
                </div>

                <div className="contact-wrapper">
                    <div className="contact-info glass-panel">
                        <h3>Contact Information</h3>
                        <p className="contact-text">
                            I'm open to freelance opportunities, frontend/backend roles, and collaborative projects.
                            Feel free to reach out using the form or through the contact details below.
                        </p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="icon-circle"><MapPin size={20} /></div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Cyber City, Remote</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="icon-circle"><Mail size={20} /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p>abhinaw@example.com</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="icon-circle"><Phone size={20} /></div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+91 98765 43210</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form glass-panel" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" placeholder="John Doe" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" placeholder="john@example.com" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" rows="5" placeholder="Let's build something awesome..." required></textarea>
                        </div>

                        <button type="submit" className="btn-primary submit-btn">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
