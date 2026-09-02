import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useTheme } from '../contexts/ThemeContext';
import Button from './ui/Button';
import IconSun from './icons/IconSun';
import IconMoon from './icons/IconMoon';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [isScrolling, setIsScrolling] = useState(false);

  const handleNavClick = (to) => {
    setActiveSection(to);
    setIsScrolling(true);
    // Lock scroll spy briefly
    setTimeout(() => {
      setIsScrolling(false);
    }, 50);
  };

  const navItems = [
    { name: 'Home', to: 'top' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Background', to: 'background' },
    { name: 'Projects', to: 'projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-panel ${
        scrolled ? 'py-3 shadow-sm' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            className="font-bold text-2xl text-slate-800 dark:text-white cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              scroll.scrollToTop({ duration: 0, smooth: false });
            }}
          >
            Portfolio<span className="text-blue-600">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                className={`relative font-medium cursor-pointer transition-colors pb-1 ${
                  activeSection === item.to
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white'
                }`}
                spy={true}
                to={item.to}
                smooth={false}
                duration={0}
                offset={-80}
                onSetActive={() => {
                  if (!isScrolling) setActiveSection(item.to);
                }}
                onClick={() => handleNavClick(item.to)}
              >
                {item.name}
                {activeSection === item.to && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-600 dark:bg-blue-400"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            
            <button
              onClick={toggleTheme}
              className="relative p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-300 overflow-hidden flex items-center justify-center w-10 h-10"
              title="Toggle Theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="absolute flex items-center justify-center"
                >
                  {theme === 'light' ? <IconSun /> : <IconMoon />}
                </motion.div>
              </AnimatePresence>
            </button>

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
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-2xl py-4 px-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              className={`block font-medium cursor-pointer py-2 border-l-4 pl-4 transition-all duration-300 ${
                activeSection === item.to
                  ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-slate-800/50'
                  : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white border-transparent'
              }`}
              spy={true}
              to={item.to}
              smooth={false}
              duration={0}
              offset={-80}
              onClick={() => {
                setIsOpen(false);
                handleNavClick(item.to);
              }}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
            <span className="font-medium text-slate-600 dark:text-slate-300">Theme</span>
            <button
              onClick={toggleTheme}
              className="relative p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-300 overflow-hidden flex items-center justify-center w-10 h-10"
              title="Toggle Theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="absolute flex items-center justify-center"
                >
                  {theme === 'light' ? <IconSun /> : <IconMoon />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
          <Button
            component={Link}
            to="contact"
            smooth={false}
            duration={0}
            offset={-80}
            variant="primary"
            size="md"
            className="w-full justify-center"
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </Button>
        </div>
      )}
    </nav>
  );
}
