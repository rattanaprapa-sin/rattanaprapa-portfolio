import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from '../../../contexts/ThemeContext';
import Button from '../../../components/ui/Button';
import Badge from '../../../components/ui/Badge';
import Tilt from 'react-parallax-tilt';

export default function IntroSection() {
  const { theme } = useTheme();
  return (
    <section
      className="min-h-[90vh] lg:min-h-screen flex items-center bg-slate-50 dark:bg-slate-900 relative overflow-hidden pt-24 lg:pt-20 pb-12 lg:pb-0"
      id="top"
    >
      {/* Decorative background shape */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-l from-blue-500/20 to-purple-500/20 blur-3xl rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-8">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-3/5 text-center lg:text-left"
          >
            <Badge 
              variant="glass" 
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm lg:text-base border border-slate-200/50 dark:border-white/10 shadow-sm mb-6 inline-flex"
            >
              Hello, Welcome to my portfolio
            </Badge>
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6 leading-tight min-h-[100px] sm:min-h-[140px] lg:min-h-[180px]">
              I'm a <br className="hidden sm:block lg:hidden" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 inline-block mt-2">
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    2000,
                    'Frontend Developer',
                    2000,
                    'Backend Developer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
              <br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-xl sm:text-3xl text-slate-500 dark:text-slate-400 font-semibold mt-4 inline-block"
              >
                Building Web Applications
              </motion.span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              I design databases and build web applications using React and Express.js.
            </p>
            <div className="flex flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                component={Link}
                to="projects"
                smooth={true}
                duration={800}
                variant="primary"
                className="cursor-pointer shadow-lg hover:shadow-xl w-auto"
              >
                View Projects
              </Button>
              <Button
                component={Link}
                to="contact"
                smooth={true}
                duration={800}
                variant="outline-adaptive"
                className="cursor-pointer shadow-md hover:shadow-lg w-auto"
              >
                Contact Me
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-2/3 sm:w-1/2 lg:w-2/5 mx-auto"
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2000} className="relative aspect-square rounded-full flex items-center justify-center overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl group">
              <img
                src="/Profile.png"
                alt="Rattanaprapa Sinkrathok"
                className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
