import React from 'react';
import github from '../img/github.webp';
import instagran from '../img/instagran.png';
import linkedin from '../img/linkedin.webp';
import './NavLateral.css';

function NavLateral() {
  return (
    <nav className="nav-lateral">
      <a href="https://www.linkedin.com/in/jonathan-febraio-dev/" target="_blank" rel="noreferrer">
        <img
          src={ linkedin }
          alt="linkedin"
          className="img-nav"
        />
      </a>
      <a
        href="https://github.com/JRaamos"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={ github }
          alt="github"
          className="img-nav"
        />
      </a>
      <a
        href="https://www.instagram.com/jonathan_febraio/"
        target="_blank"
        rel="noreferrer"

      >
        <img
          src={ instagran }
          alt="instagran"
          className="img-nav"
        />
      </a>

    </nav>
  );
}
export default NavLateral;
