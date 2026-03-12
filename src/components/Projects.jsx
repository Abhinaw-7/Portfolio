import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projectList = [
        {
            title: "E-Commerce Platform",
            description: "A full-scale e-commerce application built with the MERN stack. Features user authentication, a complete admin dashboard, Stripe payment integration, and responsive design.",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
            tech: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
            github: "https://github.com",
            live: "https://example.com"
        },
        {
            title: "Real-time Chat App",
            description: "A modern, high-performance chat application using Socket.io and React. Supports private messaging, group chats, typing indicators, and user online status.",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
            tech: ["React", "Socket.io", "Node.js", "Express", "TailwindCSS"],
            github: "https://github.com",
            live: "https://example.com"
        },
        {
            title: "DevBlog Platform",
            description: "A content management system for developers. Includes rich text editing, markdown support, SEO optimization, and a comment system with nested replies.",
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
            tech: ["Next.js", "MongoDB", "Auth.js", "Vanilla CSS"],
            github: "https://github.com",
            live: "https://example.com"
        }
    ];

    return (
        <section id="projects" className="section bg-secondary">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                    <div className="section-line"></div>
                </div>

                <div className="projects-grid">
                    {projectList.map((project, index) => (
                        <div key={index} className="project-card glass-panel">
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <a href={project.live} target="_blank" rel="noreferrer" className="overlay-btn btn-primary">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a href={project.github} target="_blank" rel="noreferrer" className="overlay-btn btn-outline" style={{ border: 'none', background: 'rgba(0,0,0,0.7)', color: 'white' }}>
                                        <Github size={16} /> Code
                                    </a>
                                </div>
                            </div>

                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-span">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
