import 'bulma/css/bulma.css';
import './CSS/skillsScreen.css';
import 'animate.css'

const SkillsScreen = () => {

    const handlerHover = (event ) => {
    event.target.classList.add('animate__animated', "animate__zoomInLeft");
  };




  return (
    <section className="hero is-fullheight" id="skills">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-centered mb-6"  >Skills</h1>
          <div className="columns is-centered is-variable is-8 my-6">
            <div className="column is-4 mt-6">
              <div className="card mt-6">
                <div className="card-content"  onMouseEnter={handlerHover} >
                  <p className="title skillstitle"  >Front-end Skillset</p>
                  <ul>
                    <li>
                      <span className="icon">
                      </span>
                      HTML
                    </li>
                    <li>
                      <span className="icon">
                      </span>
                      JavaScript
                    </li>
                      <li>
                      <span className="icon">
                      </span>
                      jQuery
                    </li>
                      <li>
                      <span className="icon">
                      </span>
                      CSS
                    </li>
                    <li>
                      <span className="icon">
                      </span>
                      React
                    </li>
                      <li>
                      <span className="icon">
                      </span>
                      Responsive Design.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="column is-4 mt-6">
              <div className="card mt-6">
                <div className="card-content" onMouseEnter={handlerHover}>
                  <p className="title skillstitle">Back-end Skillset</p>
                  <ul>
                    <li>
                      <span className="icon">
                      </span>
                      node.js
                    </li>
                    <li>
                      <span className="icon">
                      </span>
                      mySQL
                    </li>
                    <li><span className="icon">
                      </span>
                      express.js
                    </li>
                    <li>
                      <span className="icon">
                      </span>
                      MongoDB
                    </li>
                      <li>
                      <span className="icon">
                      </span>
                      RESTful API
                    </li>
                    <li>
                      <span className="icon">
                      </span>
                      Object Oriented Programming (OOP)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsScreen;