import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function NavLeft() {
  return (
    <nav
      className=" h-52 w-16 border-collapse rounded-r-lg
      shadow-3xl flex flex-col justify-around items-center
      fixed left-0 top-1/2 transform -translate-y-1/2
       bg-slate-700 dark:bg-slate-300 dark:shadow-slate-800"
    >
      <Link
        to="https://www.instagram.com/jonathan_febraio/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={ faInstagram }
          className="text-slate-100 dark:text-slate-900 h-14 w-14"
        />
      </Link>
      <Link
        to="https://www.linkedin.com/in/jonathan-febraio-dev/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={ faLinkedin }
          className="text-slate-100 dark:text-slate-900 h-14 w-14"
        />
      </Link>
      <Link to="https://github.com/JRaamos" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={ faGithub }
          className="text-slate-100 dark:text-slate-900 h-14 w-14"
        />
      </Link>
    </nav>
  );
}
export default NavLeft;
