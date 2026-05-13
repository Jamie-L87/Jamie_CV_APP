import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">Professional Summary</h2>
        <div className="about-content">
          <p>
            Product Manager at Herman Miller leading the EOS Cloud initiative – a strategic IT system for the UK market. 
            Proven ability to define product vision, establish agile practices, and lead cross-functional teams to deliver 
            high-impact solutions.
          </p>
          <p>
            With a background spanning 10 years as a Business Analyst and System Tester at Dyson, I've built expertise in 
            digital transformation, team scaling, and enterprise system implementation. Key accomplishments include:
          </p>
          <ul className="highlights">
            <li>Improved Dyson Link mobile app rating from 2/5 to 4.4/5 stars through strategic re-platforming</li>
            <li>Scaled retail IT operations by 10x, enabling 30 global store openings in 2018</li>
            <li>Built and stabilized a BA team from 4 to 16 members across multiple verticals</li>
            <li>Led digital experience platform initiatives serving millions of users globally</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
