import React, { useState } from 'react';
import '../styles/WorkHistory.css';

const jobs = [
  {
    id: 1,
    title: 'Digital Product Manager',
    company: 'Herman Miller',
    location: 'UK (Remote)',
    period: 'February 2022, Present',
    description: 'First Digital Product Manager hired by Herman Miller for EOS Cloud, used internationally across the UK, Europe, Asia, India, and Australia',
    responsibilities: [
      'Define product strategy and vision for EOS Cloud platform aligned with business objectives',
      'Conduct requirements elicitation with stakeholders across dealerships and internal teams',
      'Analyze business processes and identify optimization opportunities for efficiency gains',
      'Create detailed user stories and acceptance criteria for development team',
      'Oversee sprint-to-sprint activities and manage cross-functional delivery team',
      'Facilitate workshops for requirements gathering, process mapping, and solution design',
      'Establish new working practices (Ways of Working) and agile methodologies',
      'Perform impact analysis and sizing of new features and enhancements',
      'Manage SCRUM and QA activities by proxy, ensuring quality standards',
      'Collaborate extensively with dealership network stakeholders to understand needs',
      'Document business rules, system workflows, and process improvements',
      'Implement processes for defect resolution, change management, and workflow optimization'
    ],
    highlights: ['Strategic Leadership', 'Business Analysis', 'Requirements Gathering', 'Stakeholder Management', 'Agile']
  },
  {
    id: 2,
    title: 'Senior Business Analyst',
    company: 'Dyson',
    location: 'Bristol',
    period: 'November 2019, September 2021',
    description: 'Lead BA on Digital Experience Platform',
    responsibilities: [
      'Worked directly with Product Owners to define a strategic roadmap across two key DXPE verticals: Payments & Fraud, and Owner Experience',
      'Qualified and sized new demand working collaboratively with POs, system architects, QA managers, and release teams',
      'Assessed the impact, complexity, and sizing of new demand to support informed prioritisation decisions',
      'Gathered high-level requirements for enhancements across Dyson\'s digital experience platform',
      'Translated stakeholder needs into actionable development requirements for cross-functional delivery teams',
      'Maintained close alignment with the delivery lead and third-party partners to ensure smooth execution'
    ],
    highlights: ['Strategic Planning', 'Requirements Analysis', 'Stakeholder Engagement', 'Leadership', 'Agile']
  },
  {
    id: 3,
    title: 'Lead Business Analyst, Retail IT Manager',
    company: 'Dyson',
    location: 'Malmesbury, Bristol',
    period: 'September 2016, September 2021',
    description: 'Led multiple major transformation initiatives',
    responsibilities: [
      'Built and scaled the DXP BA team from 4 to 16, recruiting 12 BAs across permanent, contractor, and in-market roles',
      'Identified individual skills and placed team members in verticals and projects that best utilised their expertise',
      'Worked with lead POs and stakeholders to drive vision and strategy for Dyson\'s major market websites',
      'Led full agile transformation, moving the team from a heavily waterfall approach to end-to-end SCRUM delivery',
      'Took ownership of the Retail IT BA team, covering all store IT from hardware and infrastructure to bespoke ePos solutions',
      'Researched legal and fiscal requirements across international markets to ensure reusable, scalable solutions',
      'Produced a comprehensive Playbook with commercial, group retail, and in-market teams, baselining all standard ePos functionality',
      'Enabled 10x store opening growth through standardised processes, delivering 30 global store openings in 2018',
      'Built a BA team of 2 and collaborated with UX, UI, and development teams to re-platform the Dyson Link mobile app',
      'Improved Dyson Link app rating from 2/5 to 4.4/5 stars through strategic requirements definition and stakeholder alignment'
    ],
    highlights: ['Team Building', 'Agile Transformation', 'Mobile Development', 'Retail Operations', 'Global Rollout']
  },
  {
    id: 4,
    title: 'SAP CRM System Tester, Contact Centre Agent',
    company: 'Dyson',
    location: 'Bristol',
    period: 'August 2013, 2017',
    description: 'System testing and customer support roles',
    responsibilities: [
      'Reviewed and interpreted system design documents to inform test script creation and acceptance criteria',
      'Managed SAP CRM global rollout testing across the UK, Ireland, USA, Canada, and Japan',
      'Raised detailed defect reports including steps to replication, and worked with technical teams and developers to resolve issues',
      'Validated defect fixes and reported findings clearly to wider project stakeholders',
      'Facilitated IPT and UAT sessions with business users across different cultures, backgrounds, and seniority levels',
      'Created and delivered web-based training materials to large, diverse audiences globally',
      'Supported Siebel CRM testing as part of contact centre operations',
      'Handled customer communications via phone and written channels, resolving queries and escalating where needed'
    ],
    highlights: ['QA Testing', 'SAP CRM', 'Siebel CRM', 'UAT Management', 'Global Rollout', 'User Training']
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
