import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../../../components/ui/Badge';
import Tilt from 'react-parallax-tilt';

export default function ProjectCard({ project, onClick, index = 0 }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-20 items-center`}>
      
      {/* --- Text Section --- */}
      <div className="w-full lg:w-5/12 flex flex-col justify-center">
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <Badge key={i} size="sm" pill={true} variant="body-tertiary">
              {tag}
            </Badge>
          ))}
        </div>
        
        <h3 className="text-2xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-4 tracking-tight">
          {project.title}
        </h3>
        
        {project.date && (
          <div className="text-blue-600 dark:text-blue-400 font-semibold mb-6">
            {project.date}
          </div>
        )}
        
        <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
          {project.description}
        </p>

        <div>
          <button 
            onClick={onClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 rounded-full text-sm sm:text-base font-semibold transition-colors shadow-md"
          >
            View Project Details
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* --- Browser Mockup Section --- */}
      <div className="w-full lg:w-7/12">
        <Tilt
          tiltMaxAngleX={4}
          tiltMaxAngleY={4}
          scale={1.02}
          transitionSpeed={2500}
          glareEnable={true}
          glareMaxOpacity={0.15}
          glareColor="#ffffff"
          glarePosition="all"
          className="w-full cursor-pointer group"
        >
          <div 
            onClick={onClick}
            className="w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-[#0D1117] flex flex-col transition-transform duration-500 group-hover:-translate-y-2"
          >
            {/* Mac OS Browser Header */}
            <div className="bg-slate-100 dark:bg-[#161B22] px-3 py-2 flex items-center border-b border-slate-200 dark:border-slate-700/50 shrink-0">
              <div className="flex gap-1.5 w-16">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-[inset_0_0_2px_rgba(0,0,0,0.1)]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-[inset_0_0_2px_rgba(0,0,0,0.1)]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-[inset_0_0_2px_rgba(0,0,0,0.1)]"></div>
              </div>
              
              <div className="flex-1 flex justify-center">
                <div className="bg-white dark:bg-[#0D1117] border border-slate-200 dark:border-slate-700/50 text-slate-400 dark:text-slate-500 text-[10px] font-medium px-4 py-1 rounded flex items-center gap-1.5 max-w-[70%] truncate shadow-sm">
                  <svg className="w-2.5 h-2.5 text-slate-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                  <span className="truncate">{project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.com</span>
                </div>
              </div>
              
              <div className="w-16"></div> {/* Spacer for centering */}
            </div>
            
            {/* Browser Body (Image) */}
            <div className="relative aspect-video bg-slate-50 dark:bg-slate-900 w-full overflow-hidden">
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  style={project.imageStyle || {}}
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-blue-900/20 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                  <svg className="w-16 h-16 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xl font-bold opacity-50">Web Application</span>
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-white/10 dark:bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
        </Tilt>
      </div>

    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageUrl: PropTypes.string,
    imageStyle: PropTypes.object,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number,
};
