import React from 'react';
import { categories } from '../../../data/portfolioData';
import Badge from '../../../components/ui/Badge';

export default function SkillSet() {
  return (
    <section className="section-padding bg-body" id="skills">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">My Skills</h2>
          <p className="text-body-secondary lead">Technologies and tools I work with.</p>
        </div>

        <div className="row g-4 justify-content-center">
          {categories.map((category) => (
            <div className="col-md-6" key={category.title}>
              <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift">
                <div className="card-body p-4">
                  <h4 className="card-title fw-bold mb-4">{category.title}</h4>
                  <div className="d-flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="body-tertiary" pill={false}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
