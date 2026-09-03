import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';

export default function AboutMe() {
  const resumeUrl = '/Resume/Resume - Rattanaprapa Sinkrathok .pdf';
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPdfLoaded, setIsPdfLoaded] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobileView(window.innerWidth < 768);
    // Initial check
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleOpenModal = () => {
    setIsPdfLoaded(false); // Reset loading state when opening
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="py-10 lg:py-32 bg-white dark:bg-slate-950 overflow-hidden" id="about">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-center">
            
            {/* Left Image Column - Editorial Style */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full lg:w-5/12"
            >
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800">
                {/* Clean overlay for premium feel */}
                <div className="absolute inset-0 bg-slate-900/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                
                <img
                  src="/AboutMe.jpg"
                  alt="Rattanaprapa Sinkrathok"
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                  style={{ objectPosition: 'center 20%' }}
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Right Content Column */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:w-7/12 flex flex-col justify-center"
            >
              <div className="text-slate-500 dark:text-slate-400 text-sm font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-slate-300 dark:bg-slate-700"></span>
                Behind the Code
              </div>

              <h2 className="text-2xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 sm:mb-8 tracking-tight">
                About Me.
              </h2>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {[
                  "Full Stack Developer", 
                  "Frontend Developer", 
                  "Backend Developer"
                ].map((text, i) => (
                  <motion.div 
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                    }}
                  >
                    <Badge variant="primary-soft" className="px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm rounded-full">{text}</Badge>
                  </motion.div>
                ))}
              </motion.div>
              
              <div className="prose sm:prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-8 sm:mb-10">
                <p className="mb-6 text-base sm:text-lg">
                  I am a recent IT graduate and Full Stack Developer with internship experience in building web applications. I work primarily with React and Express.js. I have practical experience in designing relational databases and integrating RESTful APIs. My focus is on writing maintainable code and building clean, functional user interfaces.
                </p>
              </div>

              <div className="flex flex-row flex-wrap gap-4 justify-center sm:justify-start">
                <Button 
                  onClick={handleOpenModal}
                  variant="primary" 
                  className="shadow-lg shadow-blue-500/20 px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold text-sm sm:text-base"
                >
                  View Resume
                </Button>
                <Button
                  component="a"
                  href={resumeUrl}
                  download="Resume_Rattanaprapa_Sinkrathok.pdf"
                  variant="outline-adaptive"
                  className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold border-slate-200 dark:border-slate-800 text-sm sm:text-base"
                >
                  Download PDF
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mac OS Style Resume Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/40 dark:bg-slate-900/60 backdrop-blur-md" 
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          {/* Mac OS Window */}
          <div className="relative w-full max-w-5xl h-auto aspect-[1/1.414] max-h-[85vh] md:aspect-auto md:h-[85vh] bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-slate-200/50 dark:border-slate-700/50 flex flex-col overflow-hidden animate-fade-up">
            
            {/* Mac OS Title Bar */}
            <div className="h-12 bg-slate-100/50 dark:bg-slate-800/50 border-b border-slate-200/50 dark:border-slate-700/50 flex items-center px-4 relative shrink-0">
              
              {/* Window Controls */}
              <div className="flex items-center gap-2 absolute left-4 z-10">
                {/* Red Close Button */}
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border border-[#e0443e] hover:bg-[#ff5f56]/80 flex items-center justify-center group focus:outline-none"
                  aria-label="Close"
                >
                  <svg className="w-2 h-2 text-black/60 opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                {/* Yellow Minimize (Visual only) */}
                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border border-[#dea123] flex items-center justify-center group">
                  <svg className="w-2 h-2 text-black/60 opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M20 12H4" /></svg>
                </div>
                {/* Green Maximize (Visual only) */}
                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border border-[#1aab29] flex items-center justify-center group">
                  <svg className="w-2 h-2 text-black/60 opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                </div>
              </div>
              
              {/* Title / File Name */}
              <div className="mx-auto flex items-center justify-center text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wide select-none px-16 truncate">
                <span className="sm:hidden">Resume.pdf</span>
                <span className="hidden sm:inline">Resume_Rattanaprapa_Sinkrathok.pdf</span>
              </div>
            </div>
            
            {/* Modal Body / PDF Viewer */}
            <div className="flex-grow bg-white dark:bg-[#1a1a1a] overflow-auto relative rounded-b-2xl touch-pan-x touch-pan-y touch-pinch-zoom">
              
              {/* Loading State */}
              <div 
                className={`absolute inset-0 flex flex-col items-center justify-center bg-white dark:bg-[#1a1a1a] z-10 transition-opacity duration-700 ease-out ${isPdfLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              >
                <div className="w-10 h-10 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mb-4"></div>
                <p className="text-slate-500 dark:text-slate-400 font-medium animate-pulse">Loading Document...</p>
              </div>

              {/* PDF Iframe */}
              <div className="w-full h-full min-h-[100%] relative">
                <iframe 
                  src={`${resumeUrl}${isMobileView ? '#toolbar=0&navpanes=0&view=Fit' : '#navpanes=0&view=FitH'}`} 
                  title="Rattanaprapa Resume"
                  className="absolute inset-0 w-full h-full border-none"
                  onLoad={() => {
                    // Give the browser 1.2 seconds to finish any reflow/zoom animations internally
                    // before fading out the loading overlay. The iframe is always fully opaque underneath.
                    setTimeout(() => setIsPdfLoaded(true), 1200);
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
