import React from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../../../contexts/ThemeContext';
import Button from '../../../components/ui/Button';
import Badge from '../../../components/ui/Badge';
import styles from './IntroSection.module.css';

export default function IntroSection() {
  const { theme } = useTheme();
  return (
    <section
      className="min-vh-100 d-flex align-items-center bg-body position-relative overflow-hidden"
      id="top"
    >
      {/* Decorative background shape */}
      <div
        className={`position-absolute top-0 end-0 translate-middle-y opacity-25 ${styles.bgShapeIntro}`}
      ></div>

      <div className="container position-relative z-1">
        <div className="row align-items-center">
          <div className="col-7 col-md-7 text-start">
            <Badge
              variant="primary-soft"
              className="px-2 py-1 px-lg-3 py-lg-2 mb-2 mb-lg-3 fw-medium fs-6"
            >
              Hello, Welcome to my portfolio
            </Badge>
            <h1 className="display-4 fw-bold text-body mb-3 mb-lg-4">
              I'm a <span className="text-gradient">Full Stack Developer</span>
              <br />
              <span className="fs-3 text-body-secondary fw-semibold mt-1 mt-lg-2 d-inline-block">
                Building Web Applications
              </span>
            </h1>
            <p className="lead text-body-secondary mb-4 pe-lg-5">
              I design databases and build web applications using React, .NET, and Express.js.
            </p>
            <div className="d-flex flex-column flex-xl-row gap-2 justify-content-start">
              <Button
                component={Link}
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                variant="primary"
                className="px-3 py-2 px-lg-4 py-lg-3 text-nowrap"
                style={{ cursor: 'pointer' }}
              >
                View Projects
              </Button>
              <Button
                component={Link}
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                variant="custom"
                className={`${theme === 'light' ? 'btn-outline-dark' : 'btn-outline-light'} px-3 py-2 px-lg-4 py-lg-3 text-nowrap`}
                style={{ cursor: 'pointer' }}
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="col-5 col-md-5 mt-0 text-center">
            {/* Abstract 3D shape or Image placeholder */}
            <div className={`bg-body rounded-circle shadow-lg position-relative z-1 ratio ratio-1x1 d-flex align-items-center justify-content-center overflow-hidden border border-2 border-lg-4 ${styles.imgContainer}`}>
              <img
                src="/Profile.png"
                alt="Rattanaprapa Sinkrathok"
                className={`w-100 h-100 object-fit-cover ${styles.introProfileImg}`}
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
