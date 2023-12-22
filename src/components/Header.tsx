import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';

export default function Header() {
  const location = useLocation();
  return (
    <div className="flex items-center shadow-xl dark:shadow-slate-800">
      <div
        className="h-12 w-full
      flex items-center justify-around"
      >
        <div className="flex justify-evenly w-44">

          <p className="text-2xl font-mono">Jonathan</p>
        </div>
        <nav className="flex justify-between w-80">

          <Link to="/">
            <p>Inicio</p>
          </Link>

          { location.pathname === '/' && (
            <a href="#about">Sobre mim</a>
          )}

          <Link to="/projects">
            <p>Projetos</p>
          </Link>

          <Link to="/contact">
            <p>Contato</p>
          </Link>

        </nav>
      </div>
      <ThemeToggleButton />
    </div>
  );
}
