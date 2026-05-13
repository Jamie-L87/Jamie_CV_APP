import React, { useState } from 'react';
import '../styles/WorkHistory.css';

const jobs = [
  {
    id: 1,
    title: 'Product Manager',
    company: 'Herman Miller',
    location: 'UK (Remote)',
    period: 'February 2022 - Present',
    description: 'First PM hired by Herman Miller for an IT system in the UK',
    responsibilities: [
      'Define product strategy and vision for EOS Cloud platform',
      'Oversee sprint-to-sprint activities and cross-functional delivery team',
      'Facilitate workshops and establish new working practices (Ways of Working)',
      'Manage SCRUM and QA activities by proxy',
      'Collaborate with dealership network stakeholders',
      'Implement processes for defect resolution and workflow management'
    ],
    highlights: ['Strategic Leadership', 'Agile', 'Stakeholder Management']
  },
  {
    id: 2,
    title: 'Senior Business Analyst',
    company: 'Dyson',
    location: 'Bristol',
    period: 'November 2019 - September 2021',
    description: 'Lead BA on Digital Experience Platform',
    responsibilities: [
      'Define strategic roadmap across Payments & Fraud and Owner Experience verticals',
      'Qualify and size new demand with POs, architects, QA managers, and release teams',
      'Gather high-level requirements and assess impact and complexity'
    ],
    highlights: ['Strategic Planning', 'Requirements Analysis', 'Leadership']
  },
  {
    id: 3,
    title: 'Lead Business Analyst & Retail IT Manager',
    company: 'Dyson',
    location: 'Malmesbury & Bristol',
    period: 'September 2016 - September 2021',
    description: 'Led multiple major transformation initiatives',
    responsibilities: [
      'Dyson Link Mobile App: Re-platforming project improving app rating from 2/5 to 4.4/5 stars',
      'Dyson Retail Store Rollout: Enabled 10x store opening growth, leading to 30 global openings in 2018',
      'Digital Experience Platform: Built BA team from 4 to 16, managed 12 new hires and contractors',
      'Transitioned teams from waterfall to full agile SCRUM methodology',
      'Created "Playbook" for standardized ePos solution deployment'
    ],
    highlights: ['Team Building', 'Mobile Development', 'Retail Operations', 'Agile Transformation']
  },
  {
    id: 4,
    title: 'SAP CRM System Tester & Contact Centre Agent',
    company: 'Dyson',
    location: 'Bristol',
    period: 'August 2013 - 2017',
    description: 'System testing and customer support roles',
    responsibilities: [
      'Reviewed system design documents and created test scripts',
      'Managed SAP CRM global rollout testing and UAT sessions',
      'Created web-based training materials for diverse audiences',
      'Raised and validated defects with technical teams',
      'Supported contact centre operations via phone and written communications'
    ],
    highlights: ['QA Testing', 'SAP CRM', 'User Training', 'Global Rollout']
  }
];

export default function WorkHistory() {
  const [expandedId, setExpandedId] = useState(1);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="work-history">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {jobs.map((job) => (
            <div key={job.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="job-header" onClick={() => toggleExpand(job.id)}>
                  <div className="job-title-group">
                    <h3 className="job-title">{job.title}</h3>
                    <p className="job-company">{job.company}</p>
                  </div>
                  <div className="job-meta">
                    <p className="job-period">{job.period}</p>
                    <span className="expand-icon">{expandedId === job.id ? '−' : '+'}</span>
                  </div>
                </div>

                {expandedId === job.id && (
                  <div className="job-details">
                    <p className="job-description">{job.description}</p>
                    <div className="responsibilities">
                      <h4>Key Responsibilities</h4>
                      <ul>
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="highlights-badges">
                      {job.highlights.map((highlight, idx) => (
                        <span key={idx} className="badge">{highlight}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
