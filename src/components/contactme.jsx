// ContactMe.jsx
import 'bulma/css/bulma.css';

const ContactMe = () => {
  return (
    <section className="hero is-fullheight" id="contact" >
      <div className="hero-body">
        <div className="container">
            <h1 className="title is-1 has-text-centered my-6">Contact me</h1>
          <div className="columns is-multiline is-centered my-6">
            <div className="column is-3 has-text-centered my-6">
              <figure className="image is-96x96  ">
                <img src="placeholder_icon_url" alt="Social Media Icon" />
              </figure>
              <p className="title is-5">Twitter</p>
            </div>
            <div className="column is-3 has-text-centered my-6">
              <figure className="image is-96x96 ">
                <img src="placeholder_icon_url" alt="Social Media Icon" />
              </figure>
              <p className="title is-5">LinkedIn</p>
            </div>
            <div className="column is-3 has-text-centered my-6">
              <figure className="image is-96x96 ">
                <img src="placeholder_icon_url" alt="Social Media Icon" />
              </figure>
              <p className="title is-5">GitHub</p>
            </div>
            <div className="column is-3 has-text-centered my-6">
              <figure className="image is-96x96 ">
                <img src="placeholder_icon_url" alt="Social Media Icon" />
              </figure>
              <p className="title is-5">Email</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;