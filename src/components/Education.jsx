import React from 'react';
import '../styles/Education.css';

const education = [
  {
    school: 'Wiltshire College',
    period: '2003 - 2005',
    details: [
      'Music Technology – Passed with Merit',
      'Music Practice – Passed with Merit',
      'Business Studies – Pass'
    ]
  },
  {
    school: 'Sheldon Secondary School',
    period: '1998 - 2003',
    details: [
      '8 GCSEs (Grades A–C)'
    ]
  }
];

export default function Education() {
  return (
    <section className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {education.map((edu, idx) => (
            <div key={idx} className="education-item">
              <div className="education-header">
                <h3 className="school-name">{edu.school}</h3>
                <span className="edu-period">{edu.period}</span>
              </div>
              <ul className="edu-details">
                {edu.details.map((detail, didx) => (
                  <li key={didx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
