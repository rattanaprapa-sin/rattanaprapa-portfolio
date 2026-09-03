import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../../../data/portfolioData';

export default function ProjectList() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section className="py-10 lg:py-32 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden" id="projects">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Editorial Left-Align Header */}
          <div className="mb-12 lg:mb-32 animate-fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-slate-200 dark:border-slate-800 pb-8">
              <div className="flex-1">
                <h2 className="text-3xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                  Featured <br className="hidden md:block"/> Projects.
                </h2>
              </div>
              
              <div className="flex-1 md:pl-12 md:border-l border-slate-200 dark:border-slate-800 mt-4 md:mt-0">
                <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-light max-w-lg">
                  A curated selection of my best work, presented as live web applications. Click any project to explore the details.
                </p>
              </div>
            </div>
          </div>

          {/* Showcase Stack */}
          <div className="flex flex-col gap-0 lg:gap-40">
            {projects.map((project, index) => (
              <div key={project.title} className="flex flex-col">
                <div 
                  className="animate-fade-up" 
                  style={{ animationDelay: `${(index % 2) * 150}ms` }} 
                >
                  <ProjectCard 
                    project={project} 
                    index={index}
                    onClick={() => setSelectedProject(project)} 
                  />
                </div>
                
                {/* Mobile Divider */}
                {index !== projects.length - 1 && (
                  <div className="w-full h-px bg-slate-200 dark:bg-slate-700 my-12 lg:hidden"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
