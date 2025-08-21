import React from "react";

const Skills = () => {
  const skills = ["React", "HTML", "CSS", "JavaScript", "Git", "GitHub", "Vercel", "Netlify", "Java"];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
