import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ProjectModal({ project, onClose }) {
  // Close on Escape key
  useEffect(() => {
    if (!project) return;

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

  return (
    <>
      <div className="modal-backdrop fade show blur-backdrop" onClick={onClose} style={{ zIndex: 1040 }}></div>
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        style={{ zIndex: 1050, overflowY: 'auto' }}
        onClick={(e) => {
          // Close if clicked outside the modal content
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable" role="document">
          <div className="modal-content rounded-4 border-0 shadow-lg overflow-hidden">
            <div className="modal-header border-0 pb-0 position-absolute top-0 end-0 z-3 m-2">
              <button type="button" className="btn-close bg-white rounded-circle p-2 shadow-sm" aria-label="Close" onClick={onClose} style={{ opacity: 0.9 }}></button>
            </div>

            <div className="modal-body p-0">
              <div className="row g-0 project-modal-row">
                {/* Image Header (Carousel or Single Image) */}
                <div className="col-lg-7 bg-dark position-relative d-flex align-items-center overflow-hidden">
                  {project.modalImages && project.modalImages.length > 1 ? (
                    <div id={`projectImageCarousel-${project.title.replace(/\s+/g, '-')}`} className="carousel slide w-100" data-bs-ride="carousel">
                      <div className="carousel-indicators">
                        {project.modalImages.map((_, idx) => (
                          <button key={idx} type="button" data-bs-target={`#projectImageCarousel-${project.title.replace(/\s+/g, '-')}`} data-bs-slide-to={idx} className={idx === 0 ? "active" : ""} aria-current={idx === 0 ? "true" : "false"} aria-label={`Slide ${idx + 1}`}></button>
                        ))}
                      </div>
                      <div className="carousel-inner ratio ratio-16x9">
                        {project.modalImages.map((img, idx) => (
                          <div className={`carousel-item ${idx === 0 ? 'active' : ''} h-100`} key={idx}>
                            <img src={img} className="object-fit-cover w-100 h-100" alt={`${project.title} - ${idx + 1}`} loading="lazy" />
                          </div>
                        ))}
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target={`#projectImageCarousel-${project.title.replace(/\s+/g, '-')}`} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target={`#projectImageCarousel-${project.title.replace(/\s+/g, '-')}`} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  ) : (
                    <div className="ratio ratio-16x9 w-100 overflow-hidden">
                      {project.modalImages && project.modalImages.length === 1 ? (
                        <img src={project.modalImages[0]} alt={project.title} className="object-fit-cover w-100 h-100" loading="lazy" />
                      ) : project.modalImageUrl || project.imageUrl ? (
                        <img src={project.modalImageUrl || project.imageUrl} alt={project.title} className="object-fit-cover w-100 h-100" style={project.imageStyle || {}} loading="lazy" />
                      ) : (
                        <div className="bg-primary bg-gradient bg-opacity-75 d-flex align-items-center justify-content-center text-white w-100 h-100">
                          <span className="display-1 fw-bold">{project.title.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="col-lg-5 p-4 px-md-5 py-md-4 d-flex flex-column justify-content-center overflow-y-auto">
                  <div className="mb-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="badge bg-primary bg-opacity-10 text-primary me-2 mb-2 px-3 py-2 rounded-pill">{tag}</span>
                    ))}
                  </div>

                  <h2 className="fw-bold mb-2">{project.title}</h2>
                  {project.date && <p className="text-secondary mb-4 opacity-75">{project.date}</p>}

                  <div className="mb-4">
                    <h5 className="fw-bold mb-3">About the Project</h5>
                    <p className="text-secondary lh-base" style={{ whiteSpace: 'pre-line' }}>{project.fullDescription || project.description}</p>
                  </div>

                  {project.challenges && project.challenges.length > 0 && (
                    <div>
                      <h5 className="fw-bold mb-3">Challenges & Learnings</h5>
                      <ul className="text-secondary lh-base mb-0 ps-3">
                        {project.challenges.map((challenge, i) => (
                          <li key={i} className="mb-2">{challenge}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
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
    imageStyle: PropTypes.object
  }),
  onClose: PropTypes.func.isRequired
};
