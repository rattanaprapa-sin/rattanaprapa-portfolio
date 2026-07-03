import React from 'react';

export default function AboutMe() {
  const resumeUrl = "/Resume - Rattanaprapa Sinkrathok .pdf";

  return (
    <>
      <section className="section-padding bg-light" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="bg-white rounded-4 shadow-sm p-5 h-100 hover-lift d-flex flex-column align-items-center justify-content-center">
                <div className="rounded-circle mb-4 ratio ratio-1x1 w-75 mx-auto overflow-hidden shadow-sm border border-4 border-white">
                  <img src="/AboutMe.jpg" alt="Rattanaprapa Sinkrathok" className="w-100 h-100 object-fit-cover" style={{ objectPosition: 'center 20%', pointerEvents: 'none' }} draggable="false" onContextMenu={(e) => e.preventDefault()} loading="lazy" />
                </div>
                <h3 className="h4 fw-bold mt-3">Rattanaprapa Sinkrathok</h3>
                <p className="text-secondary text-center mb-0">Recent IT Graduate & Full Stack Developer.</p>
              </div>
            </div>
            <div className="col-lg-7 ps-lg-5 d-flex flex-column justify-content-center">
              <h2 className="display-5 fw-bold mb-4">About Me</h2>
              <div className="mb-4">
                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 me-2 mb-2 rounded-pill">Full Stack Developer</span>
                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 me-2 mb-2 rounded-pill">Frontend Developer</span>
                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 me-2 mb-2 rounded-pill">Backend Developer</span>
              </div>
              <p className="text-secondary fs-5 mb-4">
                Recent IT graduate and motivated Full Stack Developer with hands-on internship experience building end-to-end web applications. Proficient in modern web technologies including React, .NET, and Express.js.
              </p>
              <p className="text-secondary fs-5 mb-5">
                Proven ability to design robust databases, integrate RESTful APIs, and streamline HR business processes. Eager to leverage a strong technical foundation and adaptability to deliver impactful solutions in a full-time developer role.
              </p>

              <div className="d-flex gap-3 mt-4">
                <button
                  type="button"
                  className="btn btn-primary btn-lg rounded-pill px-4 hover-lift shadow-sm text-white"
                  data-bs-toggle="modal"
                  data-bs-target="#resumeModal"
                >
                  View Resume
                </button>
                <a
                  href={resumeUrl}
                  download="Resume_Rattanaprapa_Sinkrathok.pdf"
                  className="btn btn-outline-primary btn-lg rounded-pill px-4 hover-lift"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <div className="modal fade" id="resumeModal" tabIndex="-1" aria-labelledby="resumeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content rounded-4 border-0 shadow-lg">
            <div className="modal-header border-0 pb-0">
              <h5 className="modal-title fw-bold" id="resumeModalLabel">My Resume</h5>
              <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-3" style={{ height: '80vh' }}>
              <iframe
                src={resumeUrl}
                width="100%"
                height="100%"
                className="rounded-3"
                style={{ border: 'none' }}
                title="Resume Preview"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
