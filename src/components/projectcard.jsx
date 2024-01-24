import 'bulma/css/bulma.css';
import PropTypes from 'prop-types';



const ProjectCard = ({ project }) => {
  return (
    <div className="column is-5 mt-6 p-4">
      <div className="card mt-6" style={{ borderRadius: "10px" }}>
        <div className="card-content">
          <div className="columns is-mobile">
            <div className="column is-one-fifth">
              <figure className="image is-96x96">
                <img src={project.img} alt="Project Image" />
              </figure>
            </div>
            <div className="column">
              <p className="title is-size-4">{project.title}</p>
              <p>{project.about}</p>
              <p>Skills used: {project.skillsUsed.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    about: PropTypes.string,
    skillsUsed: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;