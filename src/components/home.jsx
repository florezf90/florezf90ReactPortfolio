import "bulma/css/bulma.css";
import "./CSS/homescreen.css";
import 'animate.css'; 
import { useEffect } from 'react';

import  personalimg  from "../assets/photos/florezf90.jpg";


const HomeScreen = () => {

   useEffect(() => {
    document.title = `Florezf90 - Portfolio`; // Set the new website title
  }, []);
  const handlerHover = (event ) => {
    event.target.classList.add('animate__animated', 'animate__shakeX');
  };

  const handlerHoverOut = (event ) => {
    event.target.classList.remove('animate__animated', 'animate__shakeX');
  };

  
  return (
    <section className="hero is-fullheight" id="home">
      <div className="hero-body is-full">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <figure className=" is-23by has-hover-shadow">
               <img src={personalimg} alt="sumadre" className="image homeimg" />
              </figure>
            </div>
            <div className="column is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
              <div>
                <h1 onMouseEnter={handlerHover} onMouseLeave={handlerHoverOut} className="title is-size-1 has-text-centered  has-text-weight-bold has-hover-scale animate__animated animate__shakeX">
                  Welcome to florezf90 website !!
                </h1>
                <p className="subtitle is-size-4 has-text-centered  has-hover-fade pt-5">
                  I am Luis felipe, an engaging full stack developer who is commited to deliver high-quality solutions for business and individuals to achieve their digital goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeScreen;
