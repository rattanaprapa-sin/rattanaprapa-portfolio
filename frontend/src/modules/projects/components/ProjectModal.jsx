import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function ProjectModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Close on Escape key
  useEffect(() => {
    if (!project) return;
    setCurrentImageIndex(0); // Reset image index on open

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    // Prevent scrolling on body when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const nextImage = (e) => {
    e.stopPropagation();
    if (project.modalImages && project.modalImages.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % project.modalImages.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (project.modalImages && project.modalImages.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + project.modalImages.length) % project.modalImages.length);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-md z-[1040] transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div
        className="fixed inset-0 z-[1050] overflow-y-auto overflow-x-hidden flex items-center justify-center p-4 sm:p-6 md:p-12"
        onClick={(e) => {
          // Close if clicked outside the modal content
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Mac OS Window Wrapper */}
        <div
          className="relative w-full max-w-6xl max-h-full bg-white dark:bg-[#0D1117] rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden animate-fade-up border border-slate-300/50 dark:border-slate-700/60"
          role="document"
        >
          {/* --- Mac OS Header --- */}
          <div className="bg-slate-100 dark:bg-[#161B22] px-4 py-3 flex items-center border-b border-slate-200 dark:border-slate-700/50 shrink-0 select-none">
            
            {/* Window Controls */}
            <div className="flex gap-2 w-24 group">
              {/* Close Button (Red) */}
              <button 
                onClick={onClose}
                className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] shadow-[inset_0_0_4px_rgba(0,0,0,0.1)] flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Close"
              >
                <svg className="w-2.5 h-2.5 text-black/50 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </button>
              {/* Minimize (Yellow) */}
              <button className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] shadow-[inset_0_0_4px_rgba(0,0,0,0.1)] flex items-center justify-center focus:outline-none">
                <svg className="w-2.5 h-2.5 text-black/50 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
              </button>
              {/* Maximize (Green) */}
              <button className="w-3.5 h-3.5 rounded-full bg-[#27C93F] shadow-[inset_0_0_4px_rgba(0,0,0,0.1)] flex items-center justify-center focus:outline-none">
                <svg className="w-2.5 h-2.5 text-black/50 opacity-0 group-hover:opacity-100 transition-opacity rotate-45" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 5a1 1 0 011-1h8a1 1 0 110 2H7v5a1 1 0 11-2 0V5zm9 9a1 1 0 01-1 1H5a1 1 0 110-2h5v-5a1 1 0 112 0v5z" clipRule="evenodd" /></svg>
              </button>
            </div>
            
            {/* Title / URL Bar */}
            <div className="flex-1 flex justify-center">
              <div className="text-slate-500 dark:text-slate-400 text-xs font-semibold tracking-wide flex items-center gap-2">
                <svg className="w-3.5 h-3.5 opacity-70" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg>
                {project.title}
              </div>
            </div>
            
            <div className="w-24"></div> {/* Spacer for perfect centering */}
          </div>

          {/* --- Window Body --- */}
          <div className="flex flex-col lg:flex-row h-full max-h-[85vh] bg-white dark:bg-[#0D1117]">
            
            {/* Image Area (Left Side) */}
            <div className="w-full lg:w-[55%] relative flex items-center justify-center overflow-hidden h-auto shrink-0 bg-white dark:bg-[#0D1117] border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800/80">
              {project.modalImages && project.modalImages.length > 1 ? (
                <div className="relative w-full h-full group">
                  <img
                    src={project.modalImages[currentImageIndex]}
                    className="w-full h-auto max-h-[50vh] lg:h-full lg:max-h-none object-contain transition-opacity duration-300"
                    alt={`${project.title} - ${currentImageIndex + 1}`}
                    loading="lazy"
                  />
                  
                  {/* Carousel Controls */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      className="p-3 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 hover:scale-110 transition-all focus:outline-none shadow-lg"
                      onClick={prevImage}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                      className="p-3 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 hover:scale-110 transition-all focus:outline-none shadow-lg"
                      onClick={nextImage}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>

                  {/* Carousel Indicators */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md">
                    {project.modalImages.map((_, idx) => (
                      <button
                        key={idx}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex ? 'w-6 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'w-2 bg-white/50 hover:bg-white/90'
                        }`}
                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="w-full h-full relative p-0">
                  {project.modalImages && project.modalImages.length === 1 ? (
                    <img
                      src={project.modalImages[0]}
                      alt={project.title}
                      className="w-full h-full object-contain filter drop-shadow-2xl"
                      loading="lazy"
                    />
                  ) : project.modalImageUrl || project.imageUrl ? (
                    <img
                      src={project.modalImageUrl || project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-contain filter drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
                      style={project.imageStyle || {}}
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white">
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                      <span className="text-9xl font-bold opacity-90 drop-shadow-xl">{project.title.charAt(0)}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Text Content (Right Side) */}
            <div className="w-full lg:w-[45%] p-8 sm:p-10 lg:p-12 flex flex-col justify-start overflow-y-auto custom-scrollbar">
              
              <div className="mb-6 flex flex-wrap gap-2.5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-3 py-1 bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 rounded-md text-sm font-semibold shadow-sm border border-slate-200/60 dark:border-slate-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight leading-tight">
                {project.title}
              </h2>
              
              {project.date && (
                <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-8 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-md w-fit">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  {project.date}
                </div>
              )}

              <div className="mb-10">
                <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-3 tracking-tight flex items-center gap-2">
                  <span className="w-1 h-5 bg-blue-500 rounded-full"></span>
                  About the Project
                </h5>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line text-[15px] sm:text-base">
                  {project.fullDescription || project.description}
                </p>
              </div>

              {project.challenges && project.challenges.length > 0 && (
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-3 tracking-tight flex items-center gap-2">
                    <span className="w-1 h-5 bg-purple-500 rounded-full"></span>
                    Challenges & Learnings
                  </h5>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-[15px] sm:text-base leading-relaxed">
                        <svg className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    description: PropTypes.string,
    fullDescription: PropTypes.string,
    challenges: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageUrl: PropTypes.string,
    modalImageUrl: PropTypes.string,
    modalImages: PropTypes.arrayOf(PropTypes.string),
    imageStyle: PropTypes.object,
  }),
  onClose: PropTypes.func.isRequired,
};
