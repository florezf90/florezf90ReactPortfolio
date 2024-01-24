import 'bulma/css/bulma.css';


const ProjectsScreen = () => {
  // Content for the carousel cards
  return (
    <section className="hero is-fullheight">
  <div className="hero-body">
    <div className="container">
      <h1 className="title is-1 has-text-centered my-6">Projects</h1>
      <div className="columns is-centered is-variable is-8 mt-6">
        <div className="column is-5 mt-6 p-4">
          <div className="card mt-6">
            <div className="card-content">
              <p className="title">Project 1</p>
              <ul>
                <li>
                  <span className="icon">
                  </span>
                  title
                </li>
                <li>
                  <span className="icon">
                  </span>
                  description
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="column is-5 mt-6 p-4">
          <div className="card mt-6">
            <div className="card-content">
              <p className="title">Project 2</p>
              <ul>
                <li>
                  <span className="icon">
                  </span>
                  title
                </li>
                <li>
                  <span className="icon">
                  </span>
                  description
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="columns is-centered is-variable is-8 mt-6">
        <div className="column is-5 mt-6 p-4">
          <div className="card mt-6">
            <div className="card-content">
              <p className="title">Project 3</p>
              <div className="divider"></div>
              <ul>
                <li>
                  <span className="icon">
                  </span>
                  title
                </li>
                <li>
                  <span className="icon">
                  </span>
                  description
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="column is-5 mt-6 p-4">
          <div className="card mt-6">
            <div className="card-content">
              <p className="title">Project 4</p>
              <div className="divider"></div>
              <ul>
                <li>
                  <span className="icon">
                  </span>
                  title
                </li>
                <li>
                  <span className="icon">
                  </span>
                  description
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
  )
}

export default ProjectsScreen;