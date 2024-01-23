import 'bulma/css/bulma.css';
import './CSS/SkillsScreen.css';

const SkillsScreen = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-centered mb-6">Skills</h1>
          <div className="columns is-centered is-variable is-8 mt-6">
            <div className="column is-4 mt-6">
              <div className="card mt-6">
                <div className="card-content">
                  <p className="title">Front-end Skillset</p>
                  <ul>
                    <li>
                      <span className="icon">
                      </span>
                      Front-end Skill 1
                    </li>
                    <li>
                      <span className="icon">
                      </span>
                      Front-end Skill 2
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="column is-4 mt-6">
              <div className="card mt-6">
                <div className="card-content">
                  <p className="title">Back-end Skillset</p>
                  <ul>
                    <li>
                      <span className="icon">
                      </span>
                      Back-end Skill 1
                    </li>
                    <li>
                      <span className="icon">
                      </span>
                      Back-end Skill 2
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="column is-4 mt-6">
              <div className="card mt-6">
                <div className="card-content">
                  <p className="title">Other Skills</p>
                  <div className="divider"></div>
                  <ul>
                    <li>
                      <span className="icon">
                      </span>
                      Other Skill 1
                    </li>
                    <li>
                      <span className="icon">
                      </span>
                      Other Skill 2
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