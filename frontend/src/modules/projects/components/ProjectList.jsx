import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../../../data/portfolioData';

export default function ProjectList() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section className="section-padding bg-body" id="projects">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Featured Projects</h2>
            <p className="text-body-secondary lead">Some of my recent work.</p>
          </div>

          <div className="row g-4">
            {projects.map((project) => (
              <div className="col-md-6 col-lg-4" key={project.title}>
                <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
