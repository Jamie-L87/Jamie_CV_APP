import React, { useState } from 'react';
import '../styles/WorkHistory.css';

const jobs = [
  {
    id: 1,
    title: 'Product Manager',
    company: 'Herman Miller',
    location: 'UK (Remote)',
    period: 'February 2022 - Present',
    description: 'EOS Cloud - Agile',
    responsibilities: [
      'Define product strategy and vision for EOS Cloud platform aligned with business objectives',
      'Establish and maintain working backlog with clear prioritisation aligned to business goals',
      'Oversee sprint-to-sprint activities and manage cross-functional delivery team',
      'Facilitate workshops for requirements gathering, process mapping, and solution design',
      'Establish new working practices (Ways of Working), workflows, and agile methodologies',
      'Manage SCRUM and QA activities by proxy, ensuring quality standards',
      'Implement processes for defect resolution, change management, and workflow optimisation',
      'Collaborate extensively with dealership network stakeholders to understand needs',
      'Close partnership with external dealership partners across the UK, Europe, Asia, India, and Australia'
    ],
    highlights: ['Strategic Leadership', 'Product Vision', 'Agile', 'Cross-functional Leadership', 'Stakeholder Management']
  },
  {
    id: 2,
    title: 'Senior Business Analyst',
    company: 'Dyson',
    location: 'Bristol',
    period: 'November 2019 - September 2021',
    description: 'Digital Experience Platform - Agile',
    responsibilities: [
      'Work directly with Product Owners to define a strategic roadmap across two key DXPE verticals: Payments & Fraud, and Owner Experience',
      'Qualify and size new demand working collaboratively with POs, system architects, QA managers, and release teams',
      'Assess impact, complexity, and sizing of new demand to support informed prioritisation decisions',
      'Gather high-level requirements for enhancements across Dyson\'s digital experience platform',
      'Translate stakeholder needs into actionable development requirements for cross-functional delivery teams',
      'Maintain close alignment with delivery lead and third-party partners to ensure smooth execution'
    ],
    highlights: ['Strategic Planning', 'Requirements Analysis', 'Stakeholder Engagement', 'Leadership', 'Agile']
  },
  {
    id: 3,
    title: 'Lead Business Analyst',
    company: 'Dyson',
    location: 'Bristol',
    period: 'September 2016 - November 2019',
    description: 'Multiple Leadership Initiatives - Agile & Waterfall',
    responsibilities: [
      {
        project: 'Dyson Link Mobile Application',
        items: [
          'Built a BA team of 2 and collaborated with UX, UI, and development teams to re-platform the Dyson Link mobile app',
          'Worked directly with Product Owners to understand business and user requirements',
          'Fed requirements into cross-functional teams to establish best practices and define the path forward',
          'Helped build a reliable, intuitive, and modern mobile application enabling user account registration, product control, and data visualisations',
          'Improved Dyson Link app rating from 2/5 to 4.4/5 stars'
        ]
      },
      {
        project: 'Dyson Retail Store Roll-out',
        items: [
          'Took ownership of the Retail IT BA team, covering all store IT from hardware and infrastructure to bespoke ePos solutions',
          'Enabled 10x store opening growth through standardised processes, delivering 30 global store openings in 2018',
          'Researched legal and fiscal requirements across international markets to ensure reusable, scalable solutions',
          'Empowered team to travel to market locations to understand local requirements and best practices',
          'Produced comprehensive Playbook with commercial, group retail, and in-market teams, baselining all standard ePos functionality',
          'Drove quicker and more efficient roll-out of standard solutions across new store locations globally'
        ]
      },
      {
        project: 'Digital Experience Platform Leadership',
        items: [
          'Built and stabilised the DXP BA team from 4 to 16 members across permanent, contractor, and in-market roles',
          'Recruited 12 business analysts and identified individual skills, placing team members in verticals and projects that best utilised their expertise',
          'Worked with lead POs and stakeholders to drive vision and strategy for Dyson\'s major market websites',
          'Redefined ways of working, transitioning the team from heavily waterfall approach to end-to-end SCRUM delivery',
          'Skilled up BAs to perform end-to-end duties in agile delivery while preparing cross-functional and business teams for change',
          'Worked with BA manager, delivery lead, and third-party delivery partners to establish agile practices across the team'
        ]
      }
    ],
    highlights: ['Mobile Development', 'Retail Operations', 'Team Leadership', 'Agile Transformation', 'Global Rollout']
  },
  {
    id: 4,
    title: 'Business Analyst',
    company: 'Dyson',
    location: 'Bristol',
    period: 'April 2014 - September 2016',
    description: 'SAP CRM Global Rollout - Waterfall',
    responsibilities: [
      'Reviewed and understood as-is processes of new markets to inform SAP CRM implementation',
      'Created GAP documents detailing functional aspects of new requirements and configurations',
      'Performed component testing of new build items and integration testing including end-to-end system analysis',
      'Documented issues and defects, validating fixes once resolved and preparing systems for UAT',
      'Conducted UAT sessions with in-market users and stakeholders, managing approvals and sign-off documents',
      'Designed, produced, and presented training material to end users across multiple markets',
      'Provided on-site support during Go-live, warranty, and post-go-live support periods',
      'Raised and managed new incidents from inception to fix delivery, validating fixes before production'
    ],
    highlights: ['SAP CRM', 'Waterfall', 'GAP Analysis', 'UAT Management', 'Global Rollout']
  },
  {
    id: 5,
    title: 'SAP CRM System Tester',
    company: 'Dyson',
    location: 'Bristol',
    period: 'August 2013 - April 2014',
    description: 'SAP CRM Global Rollout',
    responsibilities: [
      'Reviewed and interpreted system design documents to inform test script creation and acceptance criteria',
      'Created detailed test scripts and acceptance criteria based on system design specifications',
      'Raised detailed defect reports including steps to replication, and worked with technical teams and developers to resolve issues',
      'Validated defect fixes and reported findings clearly to wider project stakeholders',
      'Facilitated IPT and UAT sessions with business users across different cultures, backgrounds, and seniority levels',
      'Created and delivered web-based training materials to large, diverse audiences globally'
    ],
    highlights: ['QA Testing', 'SAP CRM', 'UAT Management', 'Global Rollout', 'Training']
  },
  {
    id: 6,
    title: 'Contact Centre Agent',
    company: 'Dyson',
    location: 'Bristol',
    period: 'August 2008 - August 2013',
    description: 'Siebel CRM System Testing',
    responsibilities: [
      'Handled customer communications via phone and written channels, resolving queries and escalating where needed',
      'Spoke to the public across multiple channels, developing deep understanding of customer issues and needs',
      'Supported Siebel CRM system testing as part of contact centre operations',
      'Provided feedback on system usability from an end-user perspective',
      'Developed communication and problem-solving skills across diverse customer base'
    ],
    highlights: ['Customer Service', 'Siebel CRM', 'System Testing', 'Communication', 'User Feedback']
  }
];

export default function WorkHistory() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    // If currently expanded, just close it
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      // Opening a new job - scroll to its header after state updates
      setExpandedId(id);
      setTimeout(() => {
        const header = document.querySelector(`[data-job-id="${id}"] .job-header`);
        if (header) {
          header.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }
  };

  return (
    <section className="work-history">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {jobs.map((job) => (
            <div key={job.id} className="timeline-item" data-job-id={job.id}>
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

                {/* Always render job-details; CSS shows all on print */}
                <div className={`job-details${expandedId === job.id ? ' job-details--open' : ''}`}>
                  <p className="job-description">{job.description}</p>
                  <div className="responsibilities">
                    <h4>Key Responsibilities</h4>
                    <ul>
                      {job.responsibilities.map((resp, idx) => {
                        // Handle structured projects (objects with project name and items)
                        if (typeof resp === 'object' && resp.project) {
                          return (
                            <div key={idx} className="responsibility-project">
                              <p style={{ fontWeight: 'bold', marginTop: '1rem', marginBottom: '0.5rem' }}>{resp.project}</p>
                              <ul>
                                {resp.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          );
                        }
                        // Handle simple string responsibilities
                        return <li key={idx}>{resp}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="highlights-badges">
                    {job.highlights.map((highlight, idx) => (
                      <span key={idx} className="badge">{highlight}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
