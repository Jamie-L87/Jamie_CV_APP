import React from 'react';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Jamie Ladd</h1>
        <p className="hero-subtitle">Product Manager | Product Owner | Digital Strategy</p>
        <p className="hero-description">
          Results-driven Product Manager with 13+ years of experience leading digital transformations, 
          building high-performing teams, and delivering innovative solutions across fintech, retail, 
          and enterprise software.
        </p>
        <div className="hero-contact">
          <a href="mailto:jamie@example.com" className="contact-link">Email</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
        </div>
      </div>
    </div>
  );
}
