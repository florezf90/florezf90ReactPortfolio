import 'bulma/css/bulma.css';
import './CSS/homescreen.css';

const HomeScreen = () => {
  return (
<section className="hero is-fullheight">
      <div className="hero-body is-full">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <figure className="image is-16by9 has-hover-shadow">
                <img src="https://via.placeholder.com/640x360" alt="Placeholder image" />
              </figure>
            </div>
            <div className="column is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
              <div>
                <h1 className="title is-size-1 has-text-centered  has-text-weight-bold has-hover-scale">Welcome to florezf90 website</h1>
                <p className="subtitle is-size-4 has-text-centered  has-hover-fade">Explore my projects and skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default HomeScreen;