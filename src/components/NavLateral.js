import React from 'react';
import github from '../img/github.webp';
import instagran from '../img/instagran.png';
import linkedin from '../img/linkedin.webp';

function NavLateral() {
  return (
    <div>
      <nav>
        <a
          href="https://github.com/JRaamos"
          target="_blank"
          rel="noreferrer"
        >
          <img src={ github } alt="github" />
        </a>
        <a
          href="https://www.instagram.com/jonathan_febraio/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={ instagran } alt="instagran" />
        </a>
        <a href="https://www.linkedin.com/in/jonathan-febraio-dev/" target="_blank" rel="noreferrer">
          <img src={ linkedin } alt="linkedin" />
        </a>
      </nav>
    </div>
  );
}
export default NavLateral;
