import 'bulma/css/bulma.css';
import { useState, useEffect } from 'react';
import './CSS/navbar.css'; // Assuming this file contains the custom styles for the navbar

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('is-fixed-top', );
            navbar.style.background = 'transparent'; // Set the background color to match the page's background

    } else {
      navbar.classList.remove('is-fixed-top', );
                  navbar.style.background = 'linear-gradient(135deg, #001f3f, #111)';

    }
  };

  return (
    <nav className="navbar is-flex is-justify-content-center mt-3" role="navigation" aria-label="main navigation" style={{background: 'linear-gradient(135deg, #001f3f, #111)'}}>
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
};

export default Header;