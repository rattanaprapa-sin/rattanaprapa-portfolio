import React from 'react';
import { motion } from 'framer-motion';
import { experiences, educationList } from '../../../data/portfolioData';

export default function Background() {
  return (
    <section className="py-10 lg:py-28 bg-white dark:bg-slate-900 relative" id="background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        <div className="mb-10 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Background
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 dark:text-slate-400"
          >
            A summary of my professional journey and academic foundation.
          </motion.p>
        </div>

        <div className="space-y-20">
          
          {/* --- Work Experience --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm border border-blue-100 dark:border-blue-800">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">Experience</h3>
            </div>

            <div className="border-l-2 border-slate-200 dark:border-slate-800 space-y-12 ml-4 md:ml-5">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-10 group">
                  {/* Timeline Dot */}
                  <div className="absolute w-4 h-4 bg-white dark:bg-slate-900 border-[3px] border-blue-500 rounded-full -left-[9px] top-1.5 transition-transform group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between items-start mb-2 gap-2 sm:gap-1">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h4>
                    <span className="w-fit text-xs sm:text-sm font-medium text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/50 px-3 py-1 rounded-full whitespace-nowrap border border-slate-100 dark:border-slate-700/50 shadow-sm">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <div className="text-blue-600 dark:text-blue-400 font-semibold mb-4 text-lg">
                    {exp.company}
                  </div>
                  
                  <ul className="space-y-2.5 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px] md:text-base">
                    {exp.description.map((item, i) => {
                      const colonIndex = item.indexOf(':');
                      if (colonIndex !== -1 && colonIndex < 40) {
                        return (
                          <li key={i} className="list-disc ml-4 marker:text-slate-300 dark:marker:text-slate-600">
                            <strong className="text-slate-800 dark:text-slate-100 font-medium">{item.substring(0, colonIndex + 1)}</strong>{item.substring(colonIndex + 1)}
                          </li>
                        );
                      }
                      return <li key={i} className="list-disc ml-4 marker:text-slate-300 dark:marker:text-slate-600">{item}</li>;
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* --- Education --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-sm border border-purple-100 dark:border-purple-800">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">Education</h3>
            </div>

            <div className="border-l-2 border-slate-200 dark:border-slate-800 space-y-12 ml-4 md:ml-5">
              {educationList.map((edu, index) => (
                <div key={index} className="relative pl-8 md:pl-10 group">
                  {/* Timeline Dot */}
                  <div className="absolute w-4 h-4 bg-white dark:bg-slate-900 border-[3px] border-purple-500 rounded-full -left-[9px] top-1.5 transition-transform group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between items-start mb-2 gap-2 sm:gap-1">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                    <span className="w-fit text-xs sm:text-sm font-medium text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/50 px-3 py-1 rounded-full whitespace-nowrap border border-slate-100 dark:border-slate-700/50 shadow-sm">
                      {edu.duration}
                    </span>
                  </div>
                  
                  <div className="text-purple-600 dark:text-purple-400 font-semibold mb-3 text-lg">
                    {edu.institutionUrl ? (
                      <a href={edu.institutionUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {edu.institution}
                      </a>
                    ) : (
                      edu.institution
                    )}
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px] md:text-base bg-slate-50 dark:bg-slate-800/30 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50 inline-block">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
