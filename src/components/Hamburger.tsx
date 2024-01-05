import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PortfolioContext from '../context/PortfolioContext';
import ThemeToggleButton from './ThemeToggleButton';
import Lenguage from './Lenguage';

function HamburgerMenu() {
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
       absolute left-0 top-0 w-52 bg-slate-300 shadow-lg h-[calc(100%)]
        flex flex-col items-start py-4` }
      >

        {isOpen && (
          <div
            className="absolute left-0 top-0 h-full
         w-60  flex flex-col items-center py-4"
          >
            <div className="flex justify-between w-44 mx-3">
              <Lenguage />
              <ThemeToggleButton />
            </div>

            <nav className=" mt-10">

              <Link to="/">
                <p className=" font-mono text-xl font-black m-1">{t('home')}</p>
              </Link>
              <div>

                <a
                  href="#about"
                  className=" font-mono text-xl font-black m-1"
                >
                  {t('about')}

                </a>
              </div>

              <a
                href="#projects"
                className=" font-mono text-xl font-black m-1"
              >
                {t('project')}

              </a>

              <Link to="/contact">
                <p className=" font-mono text-xl font-black m-1">{t('contact')}</p>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default HamburgerMenu;
