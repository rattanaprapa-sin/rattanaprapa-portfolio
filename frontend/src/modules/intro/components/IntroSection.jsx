import React from 'react';
import { Link } from 'react-scroll';

export default function IntroSection() {
  return (
    <section className="min-vh-100 d-flex align-items-center bg-white position-relative overflow-hidden" id="top">
      {/* Decorative background shape */}
      <div className="position-absolute top-0 end-0 translate-middle-y opacity-25 bg-shape-intro"></div>

      <div className="container position-relative z-1">
        <div className="row align-items-center">
          <div className="col-7 col-md-7 text-start">
            <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-2 py-1 px-lg-3 py-lg-2 mb-2 mb-lg-3 fw-medium" style={{ fontSize: '0.75rem' }}>
              Hello, Welcome to my portfolio
            </span>
            <h1 className="fw-bold text-dark mb-3 mb-lg-4" style={{ fontSize: 'clamp(1.2rem, 3vw, 3rem)' }}>
              I'm a <span className="text-gradient">Full Stack Developer</span><br />
              <span className="text-secondary fw-semibold mt-1 mt-lg-2 d-inline-block" style={{ fontSize: 'clamp(0.9rem, 2vw, 2rem)' }}>Building End-to-End Solutions</span>
            </h1>
            <p className="text-secondary mb-4 pe-lg-5" style={{ fontSize: 'clamp(0.8rem, 1.5vw, 1.25rem)' }}>
              I specialize in designing robust databases and developing scalable web applications using React, .NET, and Express.js.
            </p>
            <div className="d-flex flex-column flex-xl-row gap-2 justify-content-start">
              <Link to="projects" smooth={true} duration={500} offset={-80} className="btn btn-primary rounded-pill px-3 py-2 px-lg-4 py-lg-3 shadow-sm hover-lift text-white text-nowrap" style={{ cursor: 'pointer', fontSize: 'clamp(0.8rem, 1vw, 1.2rem)' }}>
                View Projects
              </Link>
              <Link to="contact" smooth={true} duration={500} offset={-80} className="btn btn-outline-dark rounded-pill px-3 py-2 px-lg-4 py-lg-3 hover-lift text-nowrap" style={{ cursor: 'pointer', fontSize: 'clamp(0.8rem, 1vw, 1.2rem)' }}>
                Contact Me
              </Link>
            </div>
          </div>
          <div className="col-5 col-md-5 mt-0 text-center">
            {/* Abstract 3D shape or Image placeholder */}
            <div className="bg-white rounded-circle shadow-lg position-relative z-1 ratio ratio-1x1 d-flex align-items-center justify-content-center overflow-hidden border border-2 border-lg-4 border-white">
              <img src="/Profile.png" alt="Rattanaprapa Sinkrathok" className="w-100 h-100 object-fit-cover" style={{ objectPosition: 'center 20%', pointerEvents: 'none' }} draggable="false" onContextMenu={(e) => e.preventDefault()} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
