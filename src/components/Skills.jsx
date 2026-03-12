import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillsData = [
        { category: "Frontend", items: ["React.js", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS", "Redux Toolkit"] },
        { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Mongoose"] },
        { category: "Database", items: ["MongoDB", "SQL (Basic)", "Firebase"] },
        { category: "Tools", items: ["Git & GitHub", "Postman", "VS Code", "Vite", "NPM/Yarn"] }
    ];

    return (
        <section id="skills" className="section">
            <div className="container">

                <div className="section-header">
                    <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
                    <div className="section-line"></div>
                </div>

                <div className="skills-grid">
                    {skillsData.map((skillGroup, index) => (
                        <div key={index} className="skill-card glass-panel">
                            <h3 className="skill-category">{skillGroup.category}</h3>
                            <div className="skill-items">
                                {skillGroup.items.map((item, i) => (
                                    <span key={i} className="skill-pill">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
