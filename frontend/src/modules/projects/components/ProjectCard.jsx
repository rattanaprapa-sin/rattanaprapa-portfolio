import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';
import Badge from '../../../components/ui/Badge';

export default function ProjectCard({ project, onClick }) {
  return (
    <div
      className={`card h-100 border-0 shadow-sm rounded-4 hover-lift overflow-hidden ${styles.projectCard}`}
      onClick={onClick}
    >
      {/* Image or Placeholder */}
      <div className="ratio ratio-16x9 overflow-hidden position-relative">
        <div className={`${styles.projectCardImage} w-100 h-100`}>
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="object-fit-cover w-100 h-100"
              style={project.imageStyle || {}}
              loading="lazy"
            />
          ) : (
            <div className="bg-primary bg-gradient bg-opacity-75 d-flex align-items-center justify-content-center text-white w-100 h-100 position-absolute top-0 start-0">
              <span className="display-3 fw-bold">{project.title.charAt(0)}</span>
            </div>
          )}
        </div>

        {/* Hover Overlay */}
        <div
          className={`position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center ${styles.projectCardOverlay}`}
        >
          <div
            className={`bg-body rounded-circle d-flex justify-content-center align-items-center shadow ${styles.projectCardOverlayIcon}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-search text-primary"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>
        </div>
      </div>
      <div className="card-body p-4 d-flex flex-column">
        <div className="mb-1">
          {project.tags.map((tag, i) => (
            <Badge key={i} size="sm" pill={false} className="me-2 mb-2 fw-bold">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="d-flex flex-column mb-3">
          <h6 className="card-title fw-bold mb-2 fs-5">{project.title}</h6>
          {project.date && <small className="text-body-secondary opacity-75" style={{ fontSize: '0.85rem' }}>{project.date}</small>}
        </div>
        <p className="card-text text-body-secondary mb-0 flex-grow-1 lh-base" style={{ fontSize: '0.95rem' }}>{project.description}</p>
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
};
