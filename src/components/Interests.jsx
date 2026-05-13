import React from 'react';
import '../styles/Interests.css';

const interests = [
  {
    title: 'Reading',
    description: 'Gothic horror and non-fiction, smart thinking books'
  },
  {
    title: 'Music',
    description: 'Bass guitar in a band, vinyl record collecting and listening'
  },
  {
    title: 'Cooking',
    description: 'Cooking for friends and family, expanding culinary repertoire'
  }
];

export default function Interests() {
  return (
    <section className="interests">
      <div className="container">
        <h2 className="section-title">Interests & Hobbies</h2>
        <div className="interests-grid">
          {interests.map((interest, idx) => (
            <div key={idx} className="interest-card">
              <h3 className="interest-title">{interest.title}</h3>
              <p className="interest-description">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
