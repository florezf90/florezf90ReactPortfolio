import 'bulma/css/bulma.css';
import ProjectCard from './projectcard';
import projectsData from './projectsdata';


const ProjectsScreen = () => {
  return (
    <section className="hero is-fullheight" id='projects'>
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-centered my-6">Projects</h1>
          <div className="columns is-multiline is-centered is-variable is-8 mt-6">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



export default ProjectsScreen;