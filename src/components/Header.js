import React from 'react';
import { handleGravatar } from '../helpers/featFunctions';

function Header() {
  return (
    <div>
      <img src={ handleGravatar('jhonyramos46@gmail.com') } alt="avatar" />
      <h2>Jonathan Febraio</h2>
      <h3>HOME</h3>
      <h3>ABOUT</h3>
      <h3>PROJECTS</h3>
      <h3>CONTACT</h3>
    </div>
  );
}

export default Header;
