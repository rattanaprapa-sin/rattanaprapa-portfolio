import React, { useState } from 'react';
import { contacts } from '../../../data/portfolioData';

export default function ContactForm() {
  const [copiedTitle, setCopiedTitle] = useState('');

  const handleClick = (e, contact) => {
    if (contact.action === 'copy') {
      e.preventDefault();
      navigator.clipboard.writeText(contact.value);
      setCopiedTitle(contact.title);
      setTimeout(() => setCopiedTitle(''), 2000);
    }
  };
  return (
    <section className="section-padding bg-body-tertiary" id="contact">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Contact</h2>
          <p className="text-body-secondary lead">
            Let's connect and build something amazing together.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {contacts.map((contact, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <a
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : undefined}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-decoration-none position-relative d-block"
                onClick={(e) => handleClick(e, contact)}
              >
                {/* Copied Popup Tooltip */}
                {copiedTitle === contact.title && (
                  <div
                    className="position-absolute bg-dark text-white px-3 py-1 rounded shadow-sm"
                    style={{
                      top: '-45px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontSize: '0.875rem',
                      zIndex: 10,
                      animation: 'fadeIn 0.2s ease',
                    }}
                  >
                    Copied!
                    <div
                      className="position-absolute"
                      style={{
                        bottom: '-5px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderLeft: '6px solid transparent',
                        borderRight: '6px solid transparent',
                        borderTop: '6px solid #212529',
                      }}
                    ></div>
                  </div>
                )}
                <div className="card border-0 shadow-sm rounded-4 hover-lift h-100 text-center p-2 p-lg-3">
                  <div className="card-body d-flex flex-column justify-content-center">
                    <h5 className="card-title fw-bold text-body mb-2">{contact.title}</h5>
                    <p className="card-text text-body-secondary mb-0 text-break">{contact.value}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
