import React from 'react';
import { handleGravatar } from '../helpers/featFunctions';
import './Header.css';

function Header() {
  return (
    <div className="header-contain">
      <div className="avata">
        <img
          className="img-gravatar"
          src={ handleGravatar('jhonyramos46@gmail.com') }
          alt="avatar"
        />
        <h2>Jonathan Febraio</h2>
      </div>
      <nav className="navegacao">
        <h3 className="header-navegacao">Home</h3>
        <h3 className="header-navegacao">About</h3>
        <h3 className="header-navegacao">Project</h3>
        <h3 className="header-navegacao">Contact</h3>
      </nav>
    </div>
  );
}

export default Header;
