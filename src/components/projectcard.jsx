import 'bulma/css/bulma.css';
import PropTypes from 'prop-types';



const ProjectCard = ({ project }) => {
  return (
    <div className="column is-5 mt-6 p-4">
      <div className="card mt-6" style={{ borderRadius: "10px" }}>
        <div className="card-content">
          <div className="columns is-mobile">
            <div className="column">
              <p className="title is-size-4 has-text-centered skillstitle">{project.title}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <figure className="image is-21 mb-6">
                  <img src={project.img} alt="memoria" />
                </figure>
              </a>
              <p className="mb-6 ">{project.about}</p>
              <p>Skills used: 
                <br />
                <br />{project.skillsUsed.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    img: PropTypes.img,
    title: PropTypes.string,
    about: PropTypes.string,
    skillsUsed: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string
  }).isRequired,
};

export default ProjectCard;