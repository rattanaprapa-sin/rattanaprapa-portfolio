import React from 'react';
import { experiences, educationList } from '../../../data/portfolioData';

export default function Background() {
  return (
    <section className="section-padding bg-body-tertiary" id="background">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Background</h2>
          <p className="text-body-secondary lead">
            My professional experience and academic background.
          </p>
        </div>

        <div className="row g-4 g-lg-5">
          {/* Experience Column */}
          <div className="col-lg-6">
            <h4 className="fw-bold mb-4 text-body border-bottom pb-2">Work Experience</h4>
            <div className="d-flex flex-column gap-4">
              {experiences.map((exp, index) => (
                <div className="card border-0 shadow-sm rounded-4 hover-lift h-100" key={index}>
                  <div className="card-body p-4">
                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center mb-3">
                      <h5 className="card-title fw-bold mb-1 mb-sm-0">{exp.role}</h5>
                      <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 rounded-pill px-3 py-2 fw-normal">
                        {exp.duration}
                      </span>
                    </div>
                    <h6 className="mb-3">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary fw-semibold text-decoration-none"
                        >
                          {exp.company}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-box-arrow-up-right ms-1 mb-1"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                            />
                          </svg>
                        </a>
                      ) : (
                        <span className="text-primary fw-semibold">{exp.company}</span>
                      )}
                      {exp.companySuffix && (
                        <span className="text-body-secondary ms-2 fw-normal small">
                          {exp.companySuffix}
                        </span>
                      )}
                    </h6>
                    {Array.isArray(exp.description) ? (
                      <ul className="card-text text-body-secondary mb-0 ps-3 lh-lg">
                        {exp.description.map((item, i) => (
                          <li key={i} className="mb-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="card-text text-body-secondary mb-0">{exp.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="col-lg-6">
            <h4 className="fw-bold mb-4 text-body border-bottom pb-2">Education</h4>
            <div className="d-flex flex-column gap-4">
              {educationList.map((edu, index) => (
                <div className="card border-0 shadow-sm rounded-4 hover-lift h-100" key={index}>
                  <div className="card-body p-4">
                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center mb-3">
                      <h5 className="card-title fw-bold mb-1 mb-sm-0">{edu.degree}</h5>
                      <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 rounded-pill px-3 py-2 fw-normal">
                        {edu.duration}
                      </span>
                    </div>
                    {edu.institutionUrl ? (
                      <h6 className="mb-3">
                        <a
                          href={edu.institutionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary fw-semibold text-decoration-none"
                        >
                          {edu.institution}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-box-arrow-up-right ms-1 mb-1"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                            />
                          </svg>
                        </a>
                      </h6>
                    ) : (
                      <h6 className="text-primary fw-semibold mb-3">{edu.institution}</h6>
                    )}
                    <p className="card-text text-body-secondary mb-0">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
