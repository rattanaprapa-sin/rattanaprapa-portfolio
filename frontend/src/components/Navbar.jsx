import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useTheme } from '../contexts/ThemeContext';
import styles from './Navbar.module.css';
import Button from './ui/Button';
import IconSun from './icons/IconSun';
import IconMoon from './icons/IconMoon';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`navbar navbar-expand-lg fixed-top py-3 ${styles.glassNav}`}>
      <div className="container">
        <a
          href="#top"
          className="navbar-brand fw-bold text-body fs-4 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            scroll.scrollToTop({ duration: 500, smooth: true });
          }}
        >
          Portfolio<span className="text-primary">.</span>
        </a>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2 align-items-center">
            <li className="nav-item">
              <Link
                className="nav-link fw-medium text-body cursor-pointer"
                to="about"
                smooth={true}
                duration={500}
                offset={-80}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-medium text-body cursor-pointer"
                to="skills"
                smooth={true}
                duration={500}
                offset={-80}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-medium text-body cursor-pointer"
                to="background"
                smooth={true}
                duration={500}
                offset={-80}
              >
                Background
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-medium text-body cursor-pointer"
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item ms-lg-2 d-flex align-items-center">
              <button
                onClick={toggleTheme}
                className={`${styles.themeToggleBtn} ${theme === 'light' ? styles.isLight : styles.isDark}`}
                title="Toggle Theme"
              >
                <div className={styles.themeToggleCircle}>
                  {theme === 'light' ? <IconSun /> : <IconMoon />}
                </div>
                <div className={styles.themeToggleText}>
                  {theme === 'light' ? 'DAY MODE' : 'NIGHT MODE'}
                </div>
              </button>
            </li>
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <Button
                component={Link}
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                variant="primary"
                size="md"
                className="cursor-pointer"
              >
                Contact Me
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
