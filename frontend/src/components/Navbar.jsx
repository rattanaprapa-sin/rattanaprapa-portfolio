import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top glass-nav py-3">
      <div className="container">
        <a href="#top" className="navbar-brand fw-bold text-dark fs-4" onClick={(e) => { e.preventDefault(); scroll.scrollToTop({ duration: 500, smooth: true }); }} style={{cursor: 'pointer'}}>
          Portfolio<span className="text-primary">.</span>
        </a>
        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2 align-items-center">
            <li className="nav-item">
              <Link className="nav-link fw-medium text-dark" to="about" smooth={true} duration={500} offset={-80} style={{cursor: 'pointer'}}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium text-dark" to="skills" smooth={true} duration={500} offset={-80} style={{cursor: 'pointer'}}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium text-dark" to="background" smooth={true} duration={500} offset={-80} style={{cursor: 'pointer'}}>Background</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium text-dark" to="projects" smooth={true} duration={500} offset={-80} style={{cursor: 'pointer'}}>Projects</Link>
            </li>
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <Link className="btn btn-primary rounded-pill px-4 shadow-sm text-white" to="contact" smooth={true} duration={500} offset={-80} style={{cursor: 'pointer'}}>Hire Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
