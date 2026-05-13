import React from 'react';
import '../styles/Skills.css';

const skillCategories = [
  {
    name: 'Product Management',
    skills: ['Product Strategy', 'Product Roadmap', 'Backlog Prioritization', 'Go-to-Market', 'Product Vision']
  },
  {
    name: 'Leadership & Team Building',
    skills: ['Team Building', 'Mentoring', 'Agile Coaching', 'Cross-functional Leadership', 'Stakeholder Management']
  },
  {
    name: 'Agile & Methodology',
    skills: ['Scrum Master', 'Agile Transformation', 'Sprint Planning', 'User Stories', 'Waterfall to Agile Migration']
  },
  {
    name: 'Business Analysis',
    skills: ['Requirements Gathering', 'User Research', 'Business Process Mapping', 'Gap Analysis', 'Solution Design']
  },
  {
    name: 'Systems & Technology',
    skills: ['SAP CRM', 'Siebel CRM', 'E-POS Systems', 'Mobile Applications', 'Global IT Infrastructure']
  },
  {
    name: 'Quality Assurance',
    skills: ['Test Planning', 'UAT Management', 'Defect Management', 'QA Process Design', 'Test Automation']
  }
];

export default function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">Core Competencies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3 className="category-title">{category.name}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, sidx) => (
                  <span key={sidx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
