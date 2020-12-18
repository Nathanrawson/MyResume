import React from 'react';
import Link from './Link';

const Header = (props) => {
  
    return (
      
    <div id={`${props.navId}`} className={props.navClass} > <nav id="resumeNavbar" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="navbar-collapse collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li onClick={() => document.getElementById('Profile').scrollIntoView({ behavior: 'smooth' })} className="nav-link">
          <a id="ProfileButton" className="nav-btn">Profile <span class="sr-only">(current)</span></a>
        </li>
        <li  onClick={() => document.getElementById('Experiences').scrollIntoView({ behavior: 'smooth' })} className="nav-link">
          <a id="ExperiencesButton" className="nav-btn">Experiences</a>
        </li>
        <li  onClick={() => document.getElementById('Abilities').scrollIntoView({ behavior: 'smooth' })} className="nav-link">
          <a id="AbilitiesButton" className="nav-btn">Abilities</a>
        </li>
        <li  onClick={() => document.getElementById('Projects').scrollIntoView({ behavior: 'smooth' })} className="nav-link">
          <a id="ProjectsButton" className="nav-btn">Projects</a>
        </li>
        <li  onClick={() => document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' })} className="nav-link">
          <a id="ContactButton" className="nav-btn">Contact</a>
        </li>
      </ul>
    </div>
  </nav></div>
    );
};

export default Header;