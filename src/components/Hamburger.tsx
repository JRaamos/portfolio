import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PortfolioContext from '../context/PortfolioContext';
import ThemeToggleButton from './ThemeToggleButton';
import Lenguage from './Lenguage';

function HamburgerMenu() {
  const location = useLocation();
  const { t } = useTranslation();
  const { isOpen, setIsOpen } = useContext(PortfolioContext);

  const menuAnimation = isOpen ? 'animate-fadeIn' : 'animate-fadeOut';
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menuElement = document.getElementById('hamburger-menu');
      const buttonElement = document.getElementById('hamburger-button');

      if (isOpen && menuElement && !menuElement.contains(event.target as Node)
          && buttonElement && !buttonElement.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => window.removeEventListener('click', handleClickOutside);
  }, [isOpen, setIsOpen]);

  return (
    <div>
      <button
        id="hamburger-button"
        onClick={ () => setIsOpen(!isOpen) }
        className="focus:outline-none"
        type="button"
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon
          icon={ isOpen ? faTimes : faBars }
          className="transition duration-300 transform hover:scale-125"
        />
      </button>

      <div
        id="hamburger-menu"
        className={ `${isOpen ? menuAnimation : 'hidden-menu'}
       absolute left-0 top-0 h-full w-60 bg-slate-300 shadow-lg
        flex flex-col items-start py-4` }
      >

        {isOpen && (
          <div
            className="absolute left-0 top-0 h-full
         w-60 bg-slate-300 shadow-lg flex flex-col items-center py-4"
          >

            <ThemeToggleButton />
            <nav>

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
            <Lenguage />
          </div>
        )}
      </div>
    </div>
  );
}

export default HamburgerMenu;
