import React from 'react';
import { Link } from 'react-router-dom';
import linkedin from '../images/linkedin.webp';
import github from '../images/github.webp';
import instagran from '../images/instagran.png';

function NavLeft() {
  return (
    <nav
      className=" h-52 w-16 border-collapse rounded-r-lg
      shadow-3xl flex flex-col justify-around items-center
      fixed left-0 top-1/2 transform -translate-y-1/2
       bg-slate-100 dark:bg-slate-300 dark:shadow-slate-800"
    >
      <Link to="https://www.linkedin.com/in/jonathan-febraio-dev/" target="_blank" rel="noreferrer">
        <img
          src={ linkedin }
          alt="linkedin"
          className=" h-14 w-14"
        />
      </Link>
      <Link
        to="https://github.com/JRaamos"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={ github }
          alt="github"
          className=" h-14 w-14"
        />
      </Link>
      <Link
        to="https://www.instagram.com/jonathan_febraio/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={ instagran }
          alt="instagran"
          className=" h-14 w-14"
        />
      </Link>

    </nav>
  );
}
export default NavLeft;
