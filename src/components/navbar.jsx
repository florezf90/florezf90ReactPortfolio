import 'bulma/css/bulma.css';
import './CSS/navbar.css';
import  { useState } from 'react';

const Header = () => {
      const [isActive, setIsActive] = useState(false);
 return (
 <nav className="navbar is-flex is-justify-content-center mt-3" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a role="button" className={`navbar-burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => setIsActive(!isActive)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <a className="navbar-item is-hoverable" href="#home">Home</a>
          <a className="navbar-item is-hoverable" href="#skills">Skills</a>
          <a className="navbar-item is-hoverable" href="#projects">Projects</a>
          <a className="navbar-item is-hoverable" href="#contact">Contact Me</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;