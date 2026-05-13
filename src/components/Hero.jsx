import React from 'react';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Jamie Ladd</h1>
        <p className="hero-subtitle">Digital Product Manager | Product Owner | Business Analysis</p>
        <p className="hero-description">
          Results-driven Digital Product Manager with 13+ years of experience leading digital transformations, 
          building high-performing teams, and delivering innovative solutions across fintech, retail, 
          and enterprise software.
        </p>
        <div className="hero-contact">
          <a href="mailto:ladd665@gmail.com?subject=Let's Connect&body=Hi Jamie," className="contact-link">Email</a>
          <a href="https://www.linkedin.com/in/jamie-ladd-54631797/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
          <a href="tel:07702487636" className="contact-link">07702 487636</a>
          <span className="contact-link contact-location">Calne, Wiltshire</span>
        </div>
      </div>
    </div>
  );
}
