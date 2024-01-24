// ContactMe.jsx
import 'bulma/css/bulma.css';
import './CSS/contactme.css';
import email from '../assets/photos/email.png';
import github from '../assets/photos/github.png';
import linkedin from '../assets/photos/orangelinkedin.png';
import instagram from '../assets/photos/insta.png';

const ContactMe = () => {
  return (
        <section className="hero is-fullheight" id='contact'>
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-centered my-6">Contact me</h1>
            <div className="columns is-multiline is-centered is-mobile my-6">
      <div className="column is-3-tablet is-half-mobile">
        <div className="card socialmedicard">
          <div className="card-content has-text-centered">
            <figure className="image is-96x96 mx-auto mb-4">
              <a href="https://www.instagram.com/luisflorez2259/">
              <img src={instagram} alt="Social Media Icon" />
              </a>
            </figure>
            <p className="title is-5 ">Instagram</p>
          </div>
        </div>
      </div>
      <div className="column is-3-tablet is-half-mobile"> 
        <div className="card socialmedicard">
          <div className="card-content has-text-centered">
            <figure className="image is-96x96 mx-auto mb-4">
              <a href="https://www.linkedin.com/in/luis-felipe-florez-98403123a/">
                <img src={linkedin} alt="Social Media Icon" />
              </a>
            </figure>
            <p className="title is-5 ">LinkedIn</p>
          </div>
        </div>
      </div>
      <div className="column is-3-tablet is-half-mobile">
        <div className="card socialmedicard">
          <div className="card-content has-text-centered">
            <figure className="image is-96x96 mx-auto mb-4">
              <a href="https://github.com/florezf90">
                <img src={github} alt="Social Media Icon" />
              </a>
            </figure>
            <p className="title is-5 ">GitHub</p>
          </div>
        </div>
      </div>
      <div className="column is-3-tablet is-half-mobile"> 
        <div className="card socialmedicard">
          <div className="card-content has-text-centered">
            <figure className="image is-96x96 mx-auto mb-4">
              <a href="mailto:floref90@gmail.com">
                <img src={email} alt="Social Media Icon" />
              </a>
            </figure>
            <p className="title is-5 ">Email</p>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;