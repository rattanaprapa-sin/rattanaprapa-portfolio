import React from 'react';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';

export default function AboutMe() {
  const resumeUrl = '/Resume - Rattanaprapa Sinkrathok .pdf';

  return (
    <>
      <section className="section-padding bg-body-tertiary" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="bg-body rounded-4 shadow-sm p-5 h-100 hover-lift d-flex flex-column align-items-center justify-content-center">
                <div className="rounded-circle mb-4 ratio ratio-1x1 w-75 mx-auto overflow-hidden shadow-sm border border-4 border-body">
                  <img
                    src="/AboutMe.jpg"
                    alt="Rattanaprapa Sinkrathok"
                    className="w-100 h-100 object-fit-cover pe-none"
                    style={{ objectPosition: 'center 20%' }}
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                    loading="lazy"
                  />
                </div>
                <h3 className="h4 fw-bold mt-3">Rattanaprapa Sinkrathok</h3>
                <p className="text-body-secondary text-center mb-0">
                  Recent IT Graduate & Full Stack Developer.
                </p>
              </div>
            </div>
            <div className="col-lg-7 ps-lg-5 d-flex flex-column justify-content-center">
              <h2 className="display-5 fw-bold mb-4">About Me</h2>
              <div className="mb-4">
                <Badge className="me-2 mb-2">Full Stack Developer</Badge>
                <Badge className="me-2 mb-2">Frontend Developer</Badge>
                <Badge className="me-2 mb-2">Backend Developer</Badge>
              </div>
              <p className="text-body-secondary fs-5 mb-4">
                Recent IT graduate and Full Stack Developer with hands-on internship experience
                building web applications. Experienced in React, .NET, and Express.js.
              </p>
              <p className="text-body-secondary fs-5 mb-5">
                Skilled in designing databases and integrating RESTful APIs. Ready to apply my
                technical skills to a full-time developer role.
              </p>

              <div className="d-flex gap-3 mt-4">
                <Button data-bs-toggle="modal" data-bs-target="#resumeModal">
                  View Resume
                </Button>
                <Button
                  component="a"
                  href={resumeUrl}
                  download="Resume_Rattanaprapa_Sinkrathok.pdf"
                  variant="outline-primary"
                >
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <div
        className="modal fade"
        id="resumeModal"
        tabIndex="-1"
        aria-labelledby="resumeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content rounded-4 border-0 shadow-lg">
            <div className="modal-header border-0 pb-0">
              <h5 className="modal-title fw-bold" id="resumeModalLabel">
                My Resume
              </h5>
              <button
                type="button"
                className="btn-close shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-3" style={{ height: '80vh' }}>
              <iframe
                src={resumeUrl}
                width="100%"
                height="100%"
                className="rounded-3 border-0"
                title="Resume Preview"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
