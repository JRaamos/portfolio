import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeToggleButton from './ThemeToggleButton';
import Hamburger from './Hamburger';
import { useWindowSize } from '../hooks/useWindowSize';

export default function Header() {
  const location = useLocation();
  const { t } = useTranslation();
  const [width] = useWindowSize();

  return (
    <div className="flex items-center shadow-xl dark:shadow-slate-800">

      <div
        className="h-14 w-full
        flex items-center justify-around"
      >
        <div className="flex justify-evenly w-60">

          <p className="text-2xl font-mono ">Jonathan Febraio</p>
        </div>

        {
        width < 768 ? <Hamburger />

          : (
            <nav className="flex justify-between w-80">

              <Link to="/">
                <p>{t('home')}</p>
              </Link>

              { location.pathname === '/' && (
                <a href="#about">{t('about')}</a>
              )}

              <Link to="/projects">
                <p>{t('projects')}</p>
              </Link>

              <Link to="/contact">
                <p>{t('contact')}</p>
              </Link>

            </nav>
          )
}
      </div>
      { width > 768 && <ThemeToggleButton />}
    </div>
  );
}
